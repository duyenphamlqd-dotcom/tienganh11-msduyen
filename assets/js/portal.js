/**
 * ==========================================================
 * PORTAL JAVASCRIPT - TRANG CHỦ HỆ THỐNG ĐỀ CƯƠNG TIẾNG ANH 11
 * Giáo viên thiết kế: Ms. Duyên | Global Success
 * ==========================================================
 */

(function () {
  'use strict';

  // 1. Dữ liệu 12 bài thi
  const PORTAL_TESTS = [
    // --- TEST 01 ---
    {
      id: "test01-listening-part1",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Part 1 · Listening",
      desc: "Dan's Daily Routine: 4 câu True/False, tích hợp AI Narrator đọc giọng bản xứ, bản dịch tiếng Việt và 10 cụm từ B1 Flashcards.",
      file: "tests/test01-listening-part1.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "2.0 điểm"
    },
    {
      id: "test01-listening-part2",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Part 2 · Listening",
      desc: "Conversation: Alex & School Health Adviser. 4 câu trắc nghiệm nhiều lựa chọn, phân tích chi tiết bằng chứng nghe và dịch ngữ nghĩa.",
      file: "tests/test01-listening-part2.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "2.0 điểm"
    },
    {
      id: "test01-reading-q9-13",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Q9–13 · Reading Cloze",
      desc: "Life expectancy in Japan: 5 câu đọc điền từ vựng, ngữ pháp thì hiện tại hoàn thành, collocations và 15 cụm từ Matching & Flashcards.",
      file: "tests/test01-reading-q9-13.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "test01-reading-q14-18",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Q14–18 · Reading Cloze",
      desc: "Healthy Lifestyles & Diet: 5 câu đọc điền đoạn văn, giải thích cặn kẽ đáp án đúng/sai kèm bài dịch tiếng Việt từng câu.",
      file: "tests/test01-reading-q14-18.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },

    // --- TEST 02 ---
    {
      id: "test02-listening-part1",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Part 1 · Listening",
      desc: "Tom & Linda Conversation: 4 câu True/False, âm thanh nguyên bản MP3 nhúng sẵn trong web, giải thích chi tiết và cấp chứng nhận.",
      file: "tests/test02-listening-part1.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "2.0 điểm"
    },
    {
      id: "test02-listening-part2",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Part 2 · Listening",
      desc: "John Keith - 4 Types of Physical Activity: 4 câu trắc nghiệm A-B-C-D, âm thanh nguyên bản MP3 nhúng trực tiếp không cần Internet.",
      file: "tests/test02-listening-part2.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "2.0 điểm"
    },
    {
      id: "test02-reading-q9-13",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Q9–13 · Reading Cloze",
      desc: "Health and Living Conditions: 5 câu đọc điền từ, kiểm tra collocations, liên từ và từ loại kèm hệ thống Flashcard ôn tập.",
      file: "tests/test02-reading-q9-13.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "test02-reading-q14-18",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Q14–18 · Reading Cloze",
      desc: "Longevity Habits & Routine: 5 câu đọc điền phân loại ngữ pháp, kiểm tra tức thì từng câu, dịch song ngữ và xuất PDF giấy chứng nhận.",
      file: "tests/test02-reading-q14-18.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },

    // --- TEST 03 ---
    {
      id: "test03-reading-q9-13",
      group: "TEST 03",
      groupBadge: "Test 03",
      title: "Test 03 · Q9–13 · Reading Cloze",
      desc: "Nutritional Diet & Exercise: 5 câu đọc điền, phương pháp học chủ động có phản hồi giải thích ngữ pháp và gợi ý tư duy.",
      file: "tests/test03-reading-q9-13.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "test03-reading-q14-18",
      group: "TEST 03",
      groupBadge: "Test 03",
      title: "Test 03 · Q14–18 · Reading Cloze",
      desc: "Healthcare Advances: 5 câu đọc điền kiểm tra toàn diện kĩ năng đọc hiểu giữa kì 1, tích hợp bộ công cụ Vocabulary Lab.",
      file: "tests/test03-reading-q14-18.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },

    // --- TEST 123 (CHUYÊN ĐỀ ÔN TẬP) ---
    {
      id: "test123-reordering",
      group: "CHUYÊN ĐỀ ÔN TẬP (TEST 123)",
      groupBadge: "Chuyên đề",
      title: "Chuyên đề 12 câu sắp xếp câu / từ",
      desc: "Tương tác sắp xếp trật tự từ/cụm từ tạo thành câu hoàn chỉnh đúng ngữ pháp. Tích hợp giải thích cấu trúc câu và từ loại.",
      file: "tests/test123-reordering.html",
      category: "writing",
      skillText: "✍️ Sắp xếp câu",
      questions: 12,
      time: "50 phút",
      points: "10.0 điểm"
    },
    {
      id: "test123-writing",
      group: "CHUYÊN ĐỀ ÔN TẬP (TEST 123)",
      groupBadge: "Chuyên đề",
      title: "Chuyên đề 12 câu tự luận & viết lại câu",
      desc: "12 câu tự luận viết lại câu không đổi nghĩa và chia dạng từ. Kiểm tra tự động, gợi ý từng bước, phân tích đáp án chi tiết.",
      file: "tests/test123-writing.html",
      category: "writing",
      skillText: "📝 Tự luận",
      questions: 12,
      time: "50 phút",
      points: "10.0 điểm"
    }
  ];

  // 2. Khởi tạo dữ liệu
  function initPortal() {
    renderStudentInfo();
    renderTestsCards('all');
    updateStats();
    setupEventListeners();
  }

  // 3. Render thông tin học sinh
  function renderStudentInfo() {
    const name = localStorage.getItem('duyen_student_name') || '';
    const cls = localStorage.getItem('duyen_student_class') || '';

    const nameInput = document.getElementById('portalStudentName');
    const classInput = document.getElementById('portalStudentClass');
    const displayEl = document.getElementById('portalStudentDisplay');

    if (nameInput) nameInput.value = name;
    if (classInput) classInput.value = cls;

    if (displayEl) {
      if (name) {
        displayEl.innerHTML = `Xin chào, <strong>${escapeHtml(name)}</strong> ${cls ? `<span style="color:#94a3b8">(${escapeHtml(cls)})</span>` : ''}! Chúc bạn ôn tập tốt!`;
      } else {
        displayEl.innerHTML = `Vui lòng nhập họ tên để hệ thống tự động ghi nhận điểm và cấp chứng nhận!`;
      }
    }
  }

  // 4. Render danh sách thẻ bài thi
  function renderTestsCards(filter) {
    const container = document.getElementById('testsContainer');
    if (!container) return;

    const progress = JSON.parse(localStorage.getItem('duyen_test_progress') || '{}');

    // Gom nhóm bài thi
    const groups = {};
    PORTAL_TESTS.forEach(test => {
      if (filter !== 'all' && test.category !== filter) return;

      if (!groups[test.group]) groups[test.group] = [];
      groups[test.group].push(test);
    });

    let html = '';

    for (const groupName in groups) {
      const tests = groups[groupName];
      if (tests.length === 0) continue;

      html += `
        <section class="group-section">
          <div class="group-header">
            <span class="group-badge">${escapeHtml(tests[0].groupBadge)}</span>
            <h2 class="group-title">${escapeHtml(groupName)}</h2>
          </div>
          <div class="tests-grid">
      `;

      tests.forEach(test => {
        // Tên file để tra cứu trong localStorage
        const fileName = test.file.replace('tests/', '');
        const savedResult = progress[fileName];
        const isCompleted = !!savedResult;

        html += `
          <div class="test-card" data-category="${test.category}">
            <div>
              <div class="test-badge-row">
                <span class="skill-tag ${test.category}">${test.skillText}</span>
                <span class="status-badge ${isCompleted ? 'completed' : 'pending'}">
                  ${isCompleted ? '✓ Đã làm' : '⏳ Chưa làm'}
                </span>
              </div>
              <h3 class="test-card-title">${escapeHtml(test.title)}</h3>
              <p class="test-card-desc">${escapeHtml(test.desc)}</p>
            </div>

            <div>
              ${isCompleted ? `
                <div style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.25);border-radius:8px;padding:8px 12px;margin-bottom:14px;font-size:12.5px;color:#a7f3d0">
                  <strong>Kết quả:</strong> ${escapeHtml(savedResult.scoreText)}
                  <span style="display:block;color:#94a3b8;font-size:11px;margin-top:2px;">🕒 ${savedResult.completedAt || ''}</span>
                </div>
              ` : ''}

              <div class="test-meta-info">
                <div class="test-meta-item"><span>📝</span> ${test.questions} câu</div>
                <div class="test-meta-item"><span>⏱</span> ${test.time}</div>
                <div class="test-meta-item"><span>⭐</span> ${test.points}</div>
              </div>

              <a href="${test.file}" class="btn-start-test">
                <span>${isCompleted ? 'Làm lại đề này ↻' : 'Bắt đầu làm bài →'}</span>
              </a>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </section>
      `;
    }

    if (html === '') {
      html = `<div style="text-align:center;padding:40px;color:#94a3b8">Không có bài thi nào phù hợp với bộ lọc.</div>`;
    }

    container.innerHTML = html;
  }

  // 5. Cập nhật số liệu thống kê
  function updateStats() {
    const progress = JSON.parse(localStorage.getItem('duyen_test_progress') || '{}');
    const completedCount = Object.keys(progress).length;
    const totalCount = PORTAL_TESTS.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    const completedEl = document.getElementById('statCompleted');
    const totalEl = document.getElementById('statTotal');
    const pctEl = document.getElementById('statPercent');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    if (completedEl) completedEl.textContent = completedCount;
    if (totalEl) totalEl.textContent = totalCount;
    if (pctEl) pctEl.textContent = percentage + '%';

    if (progressFill) progressFill.style.width = percentage + '%';
    if (progressText) progressText.textContent = `${completedCount}/${totalCount} đề đã hoàn thành (${percentage}%)`;

    renderResultsTable();
  }

  // 6. Bảng kết quả tổng hợp
  function renderResultsTable() {
    const tableBody = document.getElementById('resultsTableBody');
    if (!tableBody) return;

    const progress = JSON.parse(localStorage.getItem('duyen_test_progress') || '{}');
    const entries = Object.entries(progress);

    if (entries.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:24px;color:#94a3b8">Bạn chưa làm bài nào. Hãy chọn một đề thi ở trên để bắt đầu!</td></tr>`;
      return;
    }

    let rows = '';
    entries.forEach(([fileName, res], idx) => {
      rows += `
        <tr>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08)">${idx + 1}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08);font-weight:700">${escapeHtml(res.title || fileName)}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08);color:#34d399;font-weight:700">${escapeHtml(res.scoreText || 'Đã nộp')}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08);color:#94a3b8">${escapeHtml(res.completedAt || '')}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08)">
            <a href="tests/${fileName}" style="color:#60a5fa;text-decoration:none;font-weight:600">Mở bài thi →</a>
          </td>
        </tr>
      `;
    });

    tableBody.innerHTML = rows;
  }

  // 7. Thiết lập sự kiện
  function setupEventListeners() {
    // Lưu thông tin học sinh
    const saveBtn = document.getElementById('btnSaveStudent');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const name = (document.getElementById('portalStudentName').value || '').trim();
        const cls = (document.getElementById('portalStudentClass').value || '').trim();

        if (!name) {
          alert('Vui lòng nhập họ và tên của bạn.');
          return;
        }

        localStorage.setItem('duyen_student_name', name);
        localStorage.setItem('duyen_student_class', cls);
        renderStudentInfo();
        alert('🎉 Đã lưu thông tin thành công!\nHọ tên của bạn sẽ tự động hiển thị trong cả 12 bài thi.');
      });
    }

    // Bộ lọc bài thi
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter || 'all';
        renderTestsCards(filter);
      });
    });

    // Nút xóa lịch sử làm bài
    const resetBtn = document.getElementById('btnResetProgress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ kết quả làm bài để luyện tập lại từ đầu?')) {
          localStorage.removeItem('duyen_test_progress');
          updateStats();
          renderTestsCards('all');
          alert('Đã đặt lại dữ liệu làm bài thành công!');
        }
      });
    }
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  }

  // Kích hoạt khi tải trang
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortal);
  } else {
    initPortal();
  }
})();
