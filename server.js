/**
 * ==========================================================
 * HIGH-PERFORMANCE WEB SERVER FOR RENDER DEPLOYMENT
 * Hệ thống đề cương Tiếng Anh 11 | Ms. Duyên
 * Hoạt động 24/24 trên Render (Web Service hoặc Static Site)
 * ==========================================================
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // 1. Healthcheck endpoint cho Render & UptimeRobot (Giữ server 24/24)
  if (pathname === '/health' || pathname === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: 'English 11 Exam System - Ms. Duyen',
      active247: true
    }));
    return;
  }

  // 2. API Endpoint danh sách bài thi
  if (pathname === '/api/tests') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const testsDir = path.join(ROOT_DIR, 'tests');
    fs.readdir(testsDir, (err, files) => {
      if (err) {
        res.end(JSON.stringify({ error: 'Cannot list tests' }));
      } else {
        res.end(JSON.stringify({ tests: files.filter(f => f.endsWith('.html')) }));
      }
    });
    return;
  }

  // 3. Chuẩn hóa đường dẫn file
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  let filePath = path.join(ROOT_DIR, pathname);

  // Nếu truy cập không có .html (ví dụ /tests/test01-reading-q9-13)
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  // Bảo vệ không cho duyệt ra ngoài thư mục gốc
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback về index.html nếu không tìm thấy file
      const indexFile = path.join(ROOT_DIR, 'index.html');
      fs.readFile(indexFile, (err2, data) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Hệ thống đề cương Tiếng Anh 11 - Ms. Duyên`);
  console.log(`🌐 Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`💚 Healthcheck: http://localhost:${PORT}/health`);
  console.log(`⚡ Sẵn sàng hoạt động 24/24 trên nền tảng Render`);
  console.log(`=======================================================`);
});
