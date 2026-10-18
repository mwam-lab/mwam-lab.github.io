/* 데이터 파일(assets/data/*.js)을 화면에 그려 주는 함수 모음 */
var Mwam = (function () {
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtDate(d) { return d ? d.replace(/-/g, '.') : ''; }
  function byDateDesc(a, b) { return (b.date || '').localeCompare(a.date || ''); }
  function $(id) { return document.getElementById(id); }
  function param(name) { return new URLSearchParams(location.search).get(name); }

  function posts(cat) {
    return (window.MWAM_POSTS || [])
      .filter(function (p) { return !cat || p.category === cat; })
      .sort(byDateDesc);
  }

  // 게시물 목록 (홈 미리보기, 알림마당)
  function postList(id, opts) {
    opts = opts || {};
    var list = posts(opts.category);
    if (opts.limit) list = list.slice(0, opts.limit);
    var el = $(id);
    if (!list.length) { el.innerHTML = '<p class="empty">등록된 글이 없습니다.</p>'; return; }
    el.innerHTML = '<ul class="list">' + list.map(function (p) {
      var tag = opts.showTag ? '<span class="tag' + (p.category === '소식' ? ' teal' : '') + '">' + esc(p.category) + '</span>' : '';
      var pin = p.pinned ? '<span class="tag">중요</span>' : '';
      return '<li><span>' + pin + tag + '<a href="post.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.title) + '</a></span>' +
        '<span class="date">' + fmtDate(p.date) + '</span></li>';
    }).join('') + '</ul>';
  }

  // 정렬: 중요 글 먼저, 그다음 최신순
  function boardOrder(list) {
    return list.slice().sort(function (a, b) { return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || byDateDesc(a, b); });
  }
  function catLabel(p) { return '<span class="cat">[' + esc(p.category === '공지' ? '공지' : '소식') + ']</span> '; }
  function href(p) { return 'post.html?id=' + encodeURIComponent(p.id); }

  // 알림마당 게시판 (표 형식, 10개씩 쪽 나눔)
  function board(id, cat) {
    var PER = 10;
    var list = boardOrder(posts(cat));
    var pages = Math.max(1, Math.ceil(list.length / PER));
    var page = Math.min(pages, Math.max(1, parseInt(param('page'), 10) || 1));
    var el = $(id);
    var total = list.length;
    var rows = list.slice((page - 1) * PER, page * PER).map(function (p, i) {
      var no = total - ((page - 1) * PER + i);
      var badge = p.status
        ? '<span class="state' + (p.status === '마감' ? ' closed' : '') + '">' + esc(p.status) + '</span>'
        : (p.pinned ? '<span class="state">중요</span>' : no);
      return '<tr><td class="no' + (p.status || p.pinned ? '' : ' plain') + '">' + badge + '</td>' +
        '<td class="subject"><a href="' + href(p) + '">' + catLabel(p) + esc(p.title) + '</a></td>' +
        '<td class="date">' + fmtDate(p.date) + '</td></tr>';
    }).join('');
    var q = function (n) { return 'news.html?' + (cat ? 'cat=' + encodeURIComponent(cat) + '&' : '') + 'page=' + n; };
    var paging = '';
    if (pages > 1) {
      for (var n = 1; n <= pages; n++) {
        paging += n === page ? '<strong aria-current="page">' + n + '</strong>' : '<a href="' + q(n) + '">' + n + '</a>';
      }
      paging = '<nav class="paging" aria-label="쪽 이동">' + paging + '</nav>';
    }
    el.innerHTML = '<p class="count">전체 <b>' + total + '</b>건</p>' +
      '<table class="board-table"><caption class="skip">' + esc(cat || '전체') + ' 게시판</caption>' +
      '<thead><tr><th scope="col" class="no">번호</th><th scope="col">제목</th><th scope="col" class="date">등록일</th></tr></thead>' +
      '<tbody>' + (rows || '<tr><td colspan="3" class="empty">등록된 글이 없습니다.</td></tr>') + '</tbody></table>' + paging;
  }

  // 소식 카드형 목록 (대표 이미지 미리보기, 9개씩 쪽 나눔)
  function cards(id, cat, limit) {
    var PER = limit || 9;
    var list = boardOrder(posts(cat));
    var pages = Math.max(1, Math.ceil(list.length / PER));
    var page = Math.min(pages, Math.max(1, parseInt(param('page'), 10) || 1));
    var el = $(id);
    var items = list.slice((page - 1) * PER, page * PER).map(function (p) {
      var src = p.thumb || (p.images && p.images[0]);
      var thumb = src
        ? '<img src="' + esc(src) + '" alt="" loading="lazy">'
        : '<span class="noimg"><img src="assets/images/logo.png" alt=""></span>';
      return '<li><a class="ncard" href="' + href(p) + '">' +
        '<span class="ntop"><span class="date">' + fmtDate(p.date) + '</span>' +
          (p.status ? '<span class="state">' + esc(p.status) + '</span>' : '') + '</span>' +
        '<strong class="ntitle">' + esc(p.title) + '</strong>' +
        '<span class="nthumb">' + thumb + '</span>' +
      '</a></li>';
    }).join('');
    var q = function (n) { return 'news.html?' + (cat ? 'cat=' + encodeURIComponent(cat) + '&' : '') + 'page=' + n; };
    var paging = '';
    if (pages > 1 && !limit) {
      for (var n = 1; n <= pages; n++) {
        paging += n === page ? '<strong aria-current="page">' + n + '</strong>' : '<a href="' + q(n) + '">' + n + '</a>';
      }
      paging = '<nav class="paging" aria-label="쪽 이동">' + paging + '</nav>';
    }
    el.innerHTML = items ? '<ul class="news-grid">' + items + '</ul>' + paging : '<p class="empty">등록된 글이 없습니다.</p>';
  }

  // 게시물 상세
  function postDetail(id) {
    var el = $(id);
    var all = boardOrder(posts());
    var i = all.findIndex(function (p) { return p.id === param('id'); });
    if (i < 0) { el.innerHTML = '<p class="empty">글을 찾을 수 없습니다. <a href="news.html">알림마당으로 돌아가기</a></p>'; return; }
    var p = all[i];
    document.title = p.title + ' | 뫔건강연구소';
    var imgs = (p.images || []).map(function (src) { return '<img src="' + esc(src) + '" alt="">'; }).join('');
    var files = (p.files || []).map(function (f) {
      return '<li><a href="' + esc(f.href) + '" download>' + esc(f.name) + '</a></li>';
    }).join('');
    var prev = all[i + 1], next = all[i - 1];
    var nav = function (label, q) {
      return '<tr><th scope="row">' + label + '</th><td>' + (q ? '<a href="' + href(q) + '">' + esc(q.title) + '</a>' : '<span class="ph">없음</span>') + '</td></tr>';
    };
    el.innerHTML =
      '<article class="post">' +
        '<header class="post-band"><h2>' + esc(p.title) + '</h2><span class="date">' + fmtDate(p.date) + '</span></header>' +
        '<div class="post-body">' + imgs + (p.body || '') +
          (files ? '<div class="files"><h3>첨부파일</h3><ul>' + files + '</ul></div>' : '') +
        '</div>' +
      '</article>' +
      '<table class="post-nav">' + nav('이전 글', prev) + nav('다음 글', next) + '</table>' +
      '<p class="to-list"><a class="btn-line" href="news.html">목록</a></p>';
  }

  // 연구성과 (type: 논문 | 학술발표 | 특허)
  function outcomes(id, type) {
    var list = (window.MWAM_OUTCOMES || []).filter(function (o) { return o.type === type; })
      .sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    var el = $(id);
    if (!list.length) { el.innerHTML = '<p class="empty">준비 중입니다.</p>'; return; }
    el.innerHTML = list.map(function (o) {
      return '<div class="pub"><span class="year">' + esc(o.year) + '</span><div>' +
        '<div class="title">' + esc(o.title) + '</div>' +
        (o.authors ? '<div class="meta">' + esc(o.authors) + '</div>' : '') +
        (o.venue ? '<div class="meta">' + esc(o.venue) + '</div>' : '') +
        (o.link ? '<a href="' + esc(o.link) + '" target="_blank" rel="noopener">원문 보기</a>' : '') +
      '</div></div>';
    }).join('');
  }

  // 연구과제 (진행 중 먼저)
  function projects(id) {
    var list = (window.MWAM_PROJECTS || []).slice().sort(function (a, b) {
      return (a.status === '진행' ? 0 : 1) - (b.status === '진행' ? 0 : 1);
    });
    var el = $(id);
    if (!list.length) { el.innerHTML = '<p class="empty">준비 중입니다.</p>'; return; }
    el.innerHTML = list.map(function (p) {
      var done = p.status === '완료';
      return '<div class="project' + (done ? ' done' : '') + '">' +
        '<span class="period"><span class="state' + (done ? ' closed' : '') + '">' + (done ? '완료' : '진행 중') + '</span> · ' +
          esc(p.period) + (p.funder ? ' · ' + esc(p.funder) : '') + '</span>' +
        '<h3>' + esc(p.title) + '</h3>' + (p.summary ? '<p>' + esc(p.summary) + '</p>' : '') + '</div>';
    }).join('');
  }

  // 연구진 (group: 연구책임자 | 연구원)
  function people(id, group) {
    var list = (window.MWAM_PEOPLE || []).filter(function (p) { return p.group === group; });
    var el = $(id);
    var small = group !== '연구책임자';
    el.innerHTML = list.map(function (p) {
      var photo = p.photo ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + ' 사진">' : '사진';
      var info = (p.info || []).map(function (kv) { return '<dt>' + esc(kv[0]) + '</dt><dd>' + esc(kv[1]) + '</dd>'; }).join('');
      var hist = (p.history || []).map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('');
      var secs = (p.sections || []).map(function (sec) {
        var inner = sec.text ? '<p>' + esc(sec.text) + '</p>'
          : '<ul>' + (sec.items || []).map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul>';
        if (sec.open === false) {
          return '<details class="psec"><summary>' + esc(sec.title) + ' <span class="cnt">' + (sec.items || []).length + '편</span></summary>' + inner + '</details>';
        }
        return '<div class="psec"><h4>' + esc(sec.title) + '</h4>' + inner + '</div>';
      }).join('');
      return '<div class="person' + (small ? ' small' : '') + '"><div class="photo">' + photo + '</div><div>' +
        (p.role ? '<span class="role">' + esc(p.role) + '</span>' : '') + '<h3>' + esc(p.name) + '</h3>' +
        (info ? '<dl>' + info + '</dl>' : '') + (hist ? '<ul>' + hist + '</ul>' : '') + secs +
      '</div></div>';
    }).join('');
  }

  return { postList: postList, board: board, cards: cards, postDetail: postDetail, outcomes: outcomes, projects: projects, people: people, param: param };
})();
