/**
 * ==========================================================
 * SHARED NAVIGATION & SYSTEM SYNC - HỆ THỐNG ĐỀ CƯƠNG TIẾNG ANH 11
 * Giáo viên thiết kế: Ms. Duyên | Global Success
 * ==========================================================
 */

(function () {
  'use strict';

  // 1. Danh mục 12 bài thi
  const TESTS_CATALOG = [
    {
      group: "TEST 01",
      items: [
        { file: "test01-listening-part1.html", title: "🎧 Test 01 - Listening Part 1 (Dan's day)", id: "test01-listening-part1" },
        { file: "test01-listening-part2.html", title: "🎧 Test 01 - Listening Part 2 (Health Advice)", id: "test01-listening-part2" },
        { file: "test01-reading-q9-13.html", title: "📖 Test 01 - Reading Q9–13 (Japan Life)", id: "test01-reading-q9-13" },
        { file: "test01-reading-q14-18.html", title: "📖 Test 01 - Reading Q14–18", id: "test01-reading-q14-18" },
      ]
    },
    {
      group: "TEST 02",
      items: [
        { file: "test02-listening-part1.html", title: "🎧 Test 02 - Listening Part 1 (Tom & Linda)", id: "test02-listening-part1" },
        { file: "test02-listening-part2.html", title: "🎧 Test 02 - Listening Part 2 (Fitness Activity)", id: "test02-listening-part2" },
        { file: "test02-reading-q9-13.html", title: "📖 Test 02 - Reading Q9–13", id: "test02-reading-q9-13" },
        { file: "test02-reading-q14-18.html", title: "📖 Test 02 - Reading Q14–18", id: "test02-reading-q14-18" },
      ]
    },
    {
      group: "TEST 03",
      items: [
        { file: "test03-reading-q9-13.html", title: "📖 Test 03 - Reading Q9–13", id: "test03-reading-q9-13" },
        { file: "test03-reading-q14-18.html", title: "📖 Test 03 - Reading Q14–18", id: "test03-reading-q14-18" },
      ]
    },
    {
      group: "CHUYÊN ĐỀ ÔN TẬP TỔNG HỢP (TEST 123)",
      items: [
        { file: "test123-reordering.html", title: "✍️ 12 câu sắp xếp từ & câu", id: "test123-reordering" },
        { file: "test123-writing.html", title: "📝 12 câu tự luận & viết lại", id: "test123-writing" },
      ]
    }
  ];

  // Lấy tên file hiện tại
  const currentPath = window.location.pathname;
  const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'test01-reading-q9-13.html';

  // 2. Chèn thanh Header dùng chung
  function injectSharedBar() {
    if (document.getElementById('duyen-shared-bar')) return;

    const nav = document.createElement('div');
    nav.id = 'duyen-shared-bar';

    // Tạo HTML cho danh sách bài
    let dropdownHtml = '';
    TESTS_CATALOG.forEach(group => {
      dropdownHtml += `<div class="dsb-group-title">${group.group}</div>`;
      group.items.forEach(item => {
        const isActive = currentFile.toLowerCase() === item.file.toLowerCase();
        dropdownHtml += `
          <a href="${item.file}" class="dsb-item ${isActive ? 'active' : ''}">
            <span>${item.title}</span>
            ${isActive ? '<span>📍</span>' : ''}
          </a>
        `;
      });
    });

    const studentName = localStorage.getItem('duyen_student_name') || 'Chưa nhập';
    const studentClass = localStorage.getItem('duyen_student_class') || '';
    const studentLabel = studentName !== 'Chưa nhập' ? `${studentName}${studentClass ? ' (' + studentClass + ')' : ''}` : 'Chưa nhập tên';

    nav.innerHTML = `
      <div class="dsb-container">
        <div class="dsb-left">
          <a href="../index.html" class="dsb-home-btn" title="Quay về trang chủ hệ thống">
            <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            <span>Trang Chủ</span>
          </a>

          <div class="dsb-test-selector-wrapper">
            <button class="dsb-select-trigger" id="dsbToggleDropdown" type="button">
              <span>📚 Danh sách 12 đề</span>
              <span style="font-size: 10px;">▼</span>
            </button>
            <div class="dsb-dropdown" id="dsbDropdown">
              ${dropdownHtml}
            </div>
          </div>
        </div>

        <div class="dsb-right">
          <div class="dsb-student-badge" id="dsbStudentBadge" title="Thông tin học sinh được lưu tự động">
            <span>👤 Học sinh:</span>
            <strong id="dsbBadgeName">${studentLabel}</strong>
          </div>
          <a href="../index.html#results" class="dsb-home-btn" style="background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.2);" title="Xem bảng điểm và chứng nhận">
            🏆 Bảng điểm
          </a>
        </div>
      </div>
    `;

    document.body.insertAdjacentElement('afterbegin', nav);

    // Xử lý đóng/mở dropdown
    const trigger = document.getElementById('dsbToggleDropdown');
    const dropdown = document.getElementById('dsbDropdown');
    if (trigger && dropdown) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
      });
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
          dropdown.classList.remove('show');
        }
      });
    }
  }

  // 3. Đồng bộ họ tên học sinh từ localStorage vào các input
  function syncStudentInfo() {
    const nameKeys = ['studentName', 'student', 'name'];
    const classKeys = ['studentClass', 'class', 'cls'];

    let nameInput = null;
    let classInput = null;

    for (const k of nameKeys) {
      const el = document.getElementById(k);
      if (el) { nameInput = el; break; }
    }
    for (const k of classKeys) {
      const el = document.getElementById(k);
      if (el) { classInput = el; break; }
    }

    const savedName = localStorage.getItem('duyen_student_name');
    const savedClass = localStorage.getItem('duyen_student_class');

    if (nameInput) {
      if (savedName && !nameInput.value.trim()) {
        nameInput.value = savedName;
        nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        nameInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      nameInput.addEventListener('input', () => {
        const val = nameInput.value.trim();
        if (val) {
          localStorage.setItem('duyen_student_name', val);
          updateBadge();
        }
      });
    }

    if (classInput) {
      if (savedClass && !classInput.value.trim()) {
        classInput.value = savedClass;
        classInput.dispatchEvent(new Event('input', { bubbles: true }));
        classInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      classInput.addEventListener('input', () => {
        const val = classInput.value.trim();
        if (val) {
          localStorage.setItem('duyen_student_class', val);
          updateBadge();
        }
      });
    }
  }

  function updateBadge() {
    const badgeName = document.getElementById('dsbBadgeName');
    if (!badgeName) return;
    const name = localStorage.getItem('duyen_student_name');
    const cls = localStorage.getItem('duyen_student_class');
    if (name) {
      badgeName.textContent = `${name}${cls ? ' (' + cls + ')' : ''}`;
    } else {
      badgeName.textContent = 'Chưa nhập tên';
    }
  }

  // 4. Tự động ghi nhận kết quả bài làm vào localStorage
  function setupResultObserver() {
    const scoreElements = [
      document.getElementById('score'),
      document.getElementById('finalScore'),
      document.getElementById('resultScore'),
      document.getElementById('resultCorrect'),
      document.getElementById('certScore')
    ].filter(Boolean);

    function recordResult() {
      let scoreText = '';
      for (const el of scoreElements) {
        if (el && el.textContent.trim()) {
          scoreText = el.textContent.trim();
          break;
        }
      }

      if (!scoreText) return;

      const progress = JSON.parse(localStorage.getItem('duyen_test_progress') || '{}');
      const studentName = localStorage.getItem('duyen_student_name') || 'Học sinh';

      // Tìm tên đề
      let testTitle = document.title || currentFile;
      for (const g of TESTS_CATALOG) {
        for (const it of g.items) {
          if (it.file.toLowerCase() === currentFile.toLowerCase()) {
            testTitle = it.title;
            break;
          }
        }
      }

      progress[currentFile] = {
        title: testTitle,
        scoreText: scoreText,
        studentName: studentName,
        completedAt: new Date().toLocaleString('vi-VN'),
        timestamp: Date.now()
      };

      localStorage.setItem('duyen_test_progress', JSON.stringify(progress));
    }

    // Observer theo dõi thay đổi kết quả
    scoreElements.forEach(el => {
      const observer = new MutationObserver(() => {
        if (el.textContent.trim()) {
          recordResult();
        }
      });
      observer.observe(el, { childList: true, characterData: true, subtree: true });
    });

    // Lắng nghe các nút Nộp bài
    document.querySelectorAll('button').forEach(btn => {
      const txt = (btn.textContent || '').toLowerCase();
      if (txt.includes('nộp bài') || txt.includes('check my answer') || txt.includes('submit')) {
        btn.addEventListener('click', () => {
          setTimeout(recordResult, 600);
          setTimeout(recordResult, 1500);
        });
      }
    });
  }

  // 5. Hỗ trợ phát âm AI (Web Speech) cho Test 01 Listening nếu chưa có MP3
  function setupAiSpeechFallback() {
    if (!('speechSynthesis' in window)) return;
    if (!currentFile.includes('test01-listening')) return;

    const audioBox = document.querySelector('.panel audio, .card audio, section audio, #player, #originalAudio');
    if (!audioBox) return;

    const speechBox = document.createElement('div');
    speechBox.className = 'dsb-ai-speech-box';
    speechBox.innerHTML = `
      <div class="dsb-ai-speech-info">
        <span style="font-size:24px">🎙️</span>
        <div>
          <strong style="color:#60a5fa;display:block">Hỗ trợ nghe trực tuyến bằng AI Narrator:</strong>
          <small style="color:#cbd5e1">Nếu chưa tải file MP3, bạn có thể bấm nút bên phải để AI đọc bài nghe chuẩn tiếng Anh!</small>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <button id="dsbPlaySpeech" type="button" class="dsb-ai-speech-btn">▶ Nghe giọng AI</button>
        <button id="dsbStopSpeech" type="button" class="dsb-ai-speech-btn" style="background:#475569;display:none;">⏹ Dừng</button>
      </div>
    `;

    audioBox.insertAdjacentElement('beforebegin', speechBox);

    const playBtn = document.getElementById('dsbPlaySpeech');
    const stopBtn = document.getElementById('dsbStopSpeech');

    let isSpeaking = false;

    function getTranscriptText() {
      if (typeof transcript !== 'undefined' && Array.isArray(transcript)) {
        return transcript.map(t => {
          if (Array.isArray(t)) return t[0];
          if (t && typeof t === 'object') return (t.speaker ? t.speaker + ': ' : '') + (t.en || t.text || '');
          return String(t);
        }).join('. ');
      }
      return '';
    }

    playBtn.addEventListener('click', () => {
      const text = getTranscriptText();
      if (!text) {
        alert('Không tìm thấy nội dung bài nghe.');
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Tốc độ vừa phải cho học sinh lớp 11 dễ nghe

      // Chọn giọng Anh-Mỹ hoặc Anh-Anh nếu có
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith('en-') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
      if (enVoice) utterance.voice = enVoice;

      utterance.onstart = () => {
        isSpeaking = true;
        playBtn.textContent = '🔊 Đang đọc...';
        stopBtn.style.display = 'inline-block';
      };

      utterance.onend = () => {
        isSpeaking = false;
        playBtn.textContent = '▶ Nghe lại giọng AI';
        stopBtn.style.display = 'none';
      };

      utterance.onerror = () => {
        isSpeaking = false;
        playBtn.textContent = '▶ Nghe giọng AI';
        stopBtn.style.display = 'none';
      };

      window.speechSynthesis.speak(utterance);
    });

    stopBtn.addEventListener('click', () => {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      playBtn.textContent = '▶ Nghe giọng AI';
      stopBtn.style.display = 'none';
    });
  }

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectSharedBar();
      syncStudentInfo();
      setupResultObserver();
      setupAiSpeechFallback();
    });
  } else {
    injectSharedBar();
    syncStudentInfo();
    setupResultObserver();
    setupAiSpeechFallback();
  }
})();
