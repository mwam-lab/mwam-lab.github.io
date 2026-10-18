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

  // 게시물 상세
  function postDetail(id) {
    var el = $(id);
    var all = posts();
    var i = all.findIndex(function (p) { return p.id === param('id'); });
    if (i < 0) { el.innerHTML = '<div class="post"><p class="empty">글을 찾을 수 없습니다. <a href="news.html">알림마당으로 돌아가기</a></p></div>'; return; }
    var p = all[i];
    document.title = p.title + ' | 뫔 건강연구소';
    var imgs = (p.images || []).map(function (src) { return '<img src="' + esc(src) + '" alt="">'; }).join('');
    var files = (p.files || []).map(function (f) {
      return '<li><a href="' + esc(f.href) + '" download>' + esc(f.name) + '</a></li>';
    }).join('');
    el.innerHTML =
      '<article class="post"><div class="post-head">' +
        '<span class="tag' + (p.category === '소식' ? ' teal' : '') + '">' + esc(p.category) + '</span>' +
        '<h1>' + esc(p.title) + '</h1><span class="date">' + fmtDate(p.date) + '</span>' +
      '</div><div class="post-body">' + imgs + (p.body || '') +
        (files ? '<h3>첨부파일</h3><ul>' + files + '</ul>' : '') +
      '</div></article>' +
      '<div class="post-nav"><a href="news.html?cat=' + encodeURIComponent(p.category) + '">← 목록으로</a></div>';
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

  // 연구과제 (status: 진행 | 완료)
  function projects(id, status) {
    var list = (window.MWAM_PROJECTS || []).filter(function (p) { return p.status === status; });
    var el = $(id);
    if (!list.length) { el.innerHTML = '<p class="empty">준비 중입니다.</p>'; return; }
    el.innerHTML = list.map(function (p) {
      return '<div class="project' + (status === '완료' ? ' done' : '') + '">' +
        '<span class="period">' + esc(p.period) + (p.funder ? ' · ' + esc(p.funder) : '') + '</span>' +
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
      return '<div class="person' + (small ? ' small' : '') + '"><div class="photo">' + photo + '</div><div>' +
        '<span class="role">' + esc(p.role) + '</span><h3>' + esc(p.name) + '</h3>' +
        (info ? '<dl>' + info + '</dl>' : '') + (hist ? '<ul>' + hist + '</ul>' : '') +
      '</div></div>';
    }).join('');
  }

  return { postList: postList, postDetail: postDetail, outcomes: outcomes, projects: projects, people: people, param: param };
})();
