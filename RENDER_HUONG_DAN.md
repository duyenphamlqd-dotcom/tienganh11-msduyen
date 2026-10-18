# 🚀 HƯỚNG DẪN TRIỂN KHAI HỆ THỐNG LÊN RENDER HOẠT ĐỘNG 24/24

Chào Cô Duyên và các bạn học sinh! Tài liệu này hướng dẫn chi tiết từng bước để đưa toàn bộ hệ thống 12 đề luyện thi Tiếng Anh 11 lên nền tảng đám mây **Render.com** để trang web hoạt động online **24/24 hoàn toàn miễn phí**, có đường link chia sẻ cho học sinh làm bài trên điện thoại và máy tính.

---

## 📌 TỔNG QUAN HỆ THỐNG ĐÃ XÂY DỰNG
Hệ thống gồm:
1. **`index.html`**: Trang chủ Dashboard trung tâm (quản lý học sinh, tiến độ, lọc đề, thống kê kết quả).
2. **`tests/`**: Thư mục chứa 12 bài thi hoàn chỉnh (chuẩn hóa tên file, nhúng thanh điều hướng quay về trang chủ, tự động điền họ tên, ghi nhận điểm số và hỗ trợ AI Narrator đọc bài nghe).
3. **`server.js` & `package.json`**: Máy chủ Node.js sẵn sàng cho Render Web Service.
4. **`render.yaml`**: Cấu hình tự động triển khai (Infrastructure as Code) cho Render.

---

## 🌟 BƯỚC 1: ĐƯA TOÀN BỘ THƯ MỤC LÊN GITHUB

### Cách 1: Tải trực tiếp bằng trình duyệt trên GitHub (Đơn giản nhất, không cần cài Git)
1. Đăng nhập vào [github.com](https://github.com) (nếu chưa có tài khoản, bấm **Sign up** để đăng ký miễn phí).
2. Bấm dấu **+** ở góc trên cùng bên phải ➜ Chọn **New repository**.
3. Đặt tên kho lưu trữ: `tienganh11-msduyen` ➜ Chọn chế độ **Public** ➜ Bấm **Create repository**.
4. Ở trang vừa tạo, bấm vào dòng chữ xanh **"uploading an existing file"**.
5. Kéo toàn bộ các file và thư mục trong thư mục này vào trình duyệt (bao gồm `index.html`, thư mục `tests`, thư mục `assets`, `server.js`, `package.json`, `render.yaml`).
6. Chờ thanh tải lên hoàn tất ➜ Bấm **Commit changes**.

### Cách 2: Dùng Git CLI (Nếu máy đã cài Git)
```bash
git init
git add .
git commit -m "Khoi tao he thong de cuong Tieng Anh 11 Ms Duyen"
git branch -M main
git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/tienganh11-msduyen.git
git push -u origin main
```

---

## 🌐 BƯỚC 2: TRIỂN KHAI LÊN RENDER (CHẠY 24/24 MIỄN PHÍ)

Có 2 phương án triển khai trên Render. **Khuyên dùng Phương án 1 (Static Site) vì 100% không bao giờ bị "ngủ" (sleep), hoạt động 24/7/365 liên tục**:

### ⭐ PHƯƠNG ÁN 1: TRIỂN KHAI DẠNG "STATIC SITE" (KHUYÊN DÙNG)
> **Ưu điểm vượt trội:**
> - Hoàn toàn MIỄN PHÍ vĩnh viễn.
> - **Chạy 24/24 KHÔNG BAO GIỜ BỊ NGỦ** (Không bị tình trạng 15 phút không dùng thì tắt như Web Service).
> - Tốc độ tải trang cực nhanh qua mạng CDN toàn cầu, có sẵn HTTPS (SSL) bảo mật.

**Các bước thực hiện:**
1. Truy cập [render.com](https://render.com) ➜ Bấm **GET STARTED** ➜ Chọn **Sign in with GitHub**.
2. Tại bảng điều khiển Render (Dashboard), bấm nút **New +** ➜ Chọn **Static Site**.
3. Kết nối với kho mã nguồn `tienganh11-msduyen` vừa tạo ở Bước 1.
4. Điền các thông tin:
   - **Name**: `tienganh11-msduyen` (hoặc tên tuỳ ý).
   - **Branch**: `main` (hoặc `master`).
   - **Build Command**: *Để trống* (hoặc gõ `#`).
   - **Publish Directory**: `.` (dấu chấm) hoặc để trống.
5. Bấm nút **Create Static Site**.
6. Render sẽ triển khai trong vòng 20 - 30 giây. Khi xuất hiện chữ **Live** màu xanh, bạn sẽ nhận được đường link dạng:
   👉 `https://tienganh11-msduyen.onrender.com`

---

### 🚀 PHƯƠNG ÁN 2: TRIỂN KHAI DẠNG "WEB SERVICE" (NODE.JS)
Nếu bạn muốn chạy server Node.js chuyên biệt:
1. Tại bảng điều khiển Render, bấm nút **New +** ➜ Chọn **Web Service**.
2. Chọn repository `tienganh11-msduyen`.
3. Cấu hình:
   - **Name**: `tienganh11-service`
   - **Runtime**: `Node`
   - **Build Command**: *Để trống*
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
4. Bấm **Create Web Service**.
5. **Mẹo giữ Web Service hoạt động 24/24 không bị ngủ (Sleep):**
   - Bản Free Web Service của Render sẽ ngủ sau 15 phút nếu không có ai truy cập.
   - Để khắc phục: Đăng ký tài khoản miễn phí tại [uptimerobot.com](https://uptimerobot.com) ➜ Tạo một Monitor loại **HTTP(s)** ➜ Dán link endpoint: `https://ten-app-cua-ban.onrender.com/health` ➜ Đặt chu kỳ kiểm tra: **5 phút/lần**.
   - UptimeRobot sẽ tự động gửi tín hiệu mỗi 5 phút, giữ máy chủ luôn thức 24/24!

---

## 🎯 DANH SÁCH 12 BÀI THI TRONG HỆ THỐNG
| STT | Tên bài thi | Kỹ năng | Đường dẫn trên web |
|---|---|---|---|
| 1 | Test 01 - Listening (Part 1 - Dan's Day) | 🎧 Nghe | `/tests/test01-listening-part1.html` |
| 2 | Test 01 - Listening (Part 2 - Alex & Adviser) | 🎧 Nghe | `/tests/test01-listening-part2.html` |
| 3 | Test 01 - Reading (Q9–13 - Japan Life) | 📖 Đọc điền | `/tests/test01-reading-q9-13.html` |
| 4 | Test 01 - Reading (Q14–18) | 📖 Đọc điền | `/tests/test01-reading-q14-18.html` |
| 5 | Test 02 - Listening (Part 1 - Tom & Linda) | 🎧 Nghe | `/tests/test02-listening-part1.html` |
| 6 | Test 02 - Listening (Part 2 - Fitness) | 🎧 Nghe | `/tests/test02-listening-part2.html` |
| 7 | Test 02 - Reading (Q9–13) | 📖 Đọc điền | `/tests/test02-reading-q9-13.html` |
| 8 | Test 02 - Reading (Q14–18) | 📖 Đọc điền | `/tests/test02-reading-q14-18.html` |
| 9 | Test 03 - Reading (Q9–13) | 📖 Đọc điền | `/tests/test03-reading-q9-13.html` |
| 10 | Test 03 - Reading (Q14–18) | 📖 Đọc điền | `/tests/test03-reading-q14-18.html` |
| 11 | Chuyên đề 12 câu sắp xếp câu / từ | ✍️ Sắp xếp | `/tests/test123-reordering.html` |
| 12 | Chuyên đề 12 câu tự luận & viết lại | 📝 Tự luận | `/tests/test123-writing.html` |

---

## 💡 CÁC TÍNH NĂNG ĐẶC BIỆT ĐÃ TÍCH HỢP
1. **Lưu họ tên tự động:** Học sinh chỉ cần nhập tên một lần duy nhất tại trang chủ, cả 12 bài thi sẽ tự động điền họ tên học sinh vào bài làm và giấy chứng nhận.
2. **AI Speech Narrator:** Với bài nghe chưa có sẵn file MP3 trên máy, học sinh chỉ cần bấm **"Nghe giọng AI"**, hệ thống sẽ tự động phát âm chuẩn tiếng Anh bản xứ.
3. **Theo dõi tiến độ & Bảng vàng:** Điểm số được lưu tự động trên trình duyệt, có thanh tiến độ trực quan và bảng điểm tổng hợp tại trang chủ.
4. **Giấy chứng nhận (Certificate):** Tự động xuất chứng nhận danh dự có chữ ký điện tử của Cô Duyên khi học sinh đạt trên 70% số điểm, hỗ trợ in ấn hoặc lưu PDF.
