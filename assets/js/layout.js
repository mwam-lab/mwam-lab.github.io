/* 공통 머리글(메뉴)·바닥글 — 모든 페이지가 이 파일 하나를 공유함.
   메뉴를 바꾸려면 MENU만 고치면 됨. */
(function () {
  var S = window.MWAM_SITE || {};

  var MENU = [
    { id: 'about', label: '연구소 소개', href: 'about.html', sub: [
      ['연구소 소개', 'about.html#intro'],
      ['연구 방향', 'about.html#focus'],
      ['오시는 길', 'about.html#location']
    ]},
    { id: 'people', label: '연구진', href: 'people.html', sub: [
      ['연구책임자', 'people.html#pi'],
      ['연구원', 'people.html#members']
    ]},
    { id: 'research', label: '연구', href: 'research.html', sub: [
      ['움직임 명상 프로그램', 'research.html#program'],
      ['진행 중인 연구', 'research.html#ongoing'],
      ['완료된 연구', 'research.html#completed']
    ]},
    { id: 'outcomes', label: '연구성과', href: 'outcomes.html', sub: [
      ['논문', 'outcomes.html#papers'],
      ['학술발표', 'outcomes.html#presentations'],
      ['특허·저작권', 'outcomes.html#ip']
    ]},
    { id: 'news', label: '알림마당', href: 'news.html', sub: [
      ['공지사항', 'news.html?cat=공지'],
      ['연구 소식', 'news.html?cat=소식']
    ]},
    { id: 'contact', label: '문의', href: 'contact.html' }
  ];

  var page = document.body.getAttribute('data-page');

  var nav = MENU.map(function (m) {
    var cur = m.id === page ? ' aria-current="page"' : '';
    var sub = m.sub ? '<ul class="sub">' + m.sub.map(function (s) {
      return '<li><a href="' + s[1] + '">' + s[0] + '</a></li>';
    }).join('') + '</ul>' : '';
    return '<li><a href="' + m.href + '"' + cur + '>' + m.label + '</a>' + sub + '</li>';
  }).join('');

  var header =
    '<a class="skip" href="#main">본문 바로가기</a>' +
    '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html">' +
        '<img src="assets/images/logo.png" alt="" width="46" height="46">' +
        '<span class="brand-name"><strong>뫔 건강연구소</strong><small>몸과 마음을 함께 돌보는 움직임 명상</small></span>' +
      '</a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="gnb" aria-label="메뉴 열기">' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
      '</button>' +
      '<nav class="gnb" id="gnb" aria-label="주 메뉴"><ul>' + nav + '</ul>' +
        '<a class="btn-join" href="contact.html#join">연구 참여하기</a>' +
      '</nav>' +
    '</div></header>';

  var footer =
    '<footer class="site-footer"><div class="wrap">' +
      '<div><strong>뫔 건강연구소</strong>' +
        '<p>연구 수행 기관 · ' + (S.org || '<span>[소속 기관명]</span>') + '</p>' +
        '<p>주소 · ' + (S.address || '[주소]') + '</p>' +
        '<p>전화 · ' + (S.tel || '[전화번호]') + '</p>' +
        '<p>이메일 · ' + (S.email ? '<a href="mailto:' + S.email + '">' + S.email + '</a>' : '[이메일 주소]') + '</p>' +
      '</div>' +
      '<div class="foot-links">' + MENU.map(function (m) { return '<a href="' + m.href + '">' + m.label + '</a>'; }).join('') +
        (S.instagram ? '<a href="' + S.instagram + '" target="_blank" rel="noopener">인스타그램</a>' : '') +
      '</div>' +
    '</div><div class="copy"><div class="wrap">© ' + new Date().getFullYear() + ' 뫔 건강연구소</div></div></footer>';

  document.getElementById('site-header').outerHTML = header;
  document.getElementById('site-footer').outerHTML = footer;

  var btn = document.querySelector('.menu-toggle');
  var gnb = document.getElementById('gnb');
  btn.addEventListener('click', function () {
    var open = gnb.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });
  gnb.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { gnb.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });
})();
