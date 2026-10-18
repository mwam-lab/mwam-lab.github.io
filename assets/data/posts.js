/* 알림마당 게시물
   category: (예전 구분, 지금은 화면에 쓰지 않음)
   date: 'YYYY-MM-DD'  (최신 글이 자동으로 위에 옴)
   thumb: 목록 카드에 보일 대표 이미지 (없으면 images 첫 장, 그것도 없으면 로고)
   images: ['assets/images/posts/파일명.jpg']  — 본문 사진. assets/images/posts 폴더에 넣기
   body: 본문(HTML). 문단은 <p>...</p>
   pinned: true 이면 '중요' 표시하고 맨 위에 고정
   status: '모집 중' 또는 '마감' (번호 자리에 표시, 없으면 '') */
window.MWAM_POSTS = [
  {
    id: '2026-10-17-feldenkrais',
    category: '소식',
    date: '2026-10-17',
    title: '펠든크라이스 워크샵 참여',
    thumb: 'assets/images/posts/2026-10-17-feldenkrais-thumb.jpg',
    images: ['assets/images/posts/2026-10-17-feldenkrais.jpg'],
    body: '<p>뫔건강연구소 연구진이 펠든크라이스 워크샵에 참여했습니다.</p>'
  },
  {
    id: '2026-09-17-muju-somatics',
    category: '소식',
    date: '2026-09-17',
    title: '무주 인문도시지원사업 「액티브 시니어를 위한 움직임 명상」 운영',
    thumb: 'assets/images/posts/2026-09-17-muju-somatics-thumb.jpg',
    images: ['assets/images/posts/2026-09-17-muju-somatics-poster.jpg'],
    body:
      '<p>전북대학교 인문학연구소와 무주군이 함께 주관하는 무주 인문도시지원사업으로, 소매틱스(Somatics) 기반 움직임 명상 프로그램 「액티브 시니어를 위한 움직임 명상」을 운영합니다. ' +
      '신체 움직임을 통해 몸과 마음의 건강을 증진하고 삶의 통합적 성찰을 돕는 것을 목적으로 합니다.</p>' +
      '<ul>' +
        '<li>강사: 정재원 교수</li>' +
        '<li>기간: 2026년 9월 17일 ~ 11월 12일, 매주 목요일 19시 (총 8회)</li>' +
        '<li>장소: 무주 상상반디숲</li>' +
        '<li>대상: 무주 시니어층(50~60대)</li>' +
      '</ul>' +
      '<h3>주요 주제</h3>' +
      '<ul>' +
        '<li>알아차림 — 싱잉볼, 걷기 명상, 차 명상</li>' +
        '<li>고유수용감각과 균형</li>' +
        '<li>관계 속의 몸 — 손 맞추기, 자비명상</li>' +
        '<li>내수용감각과 페이싱</li>' +
        '<li>반응 유보와 선택</li>' +
        '<li>동적 균형과 통합</li>' +
      '</ul>' +
      '<p>매 회기는 체크인, 준비운동, 소매틱 활동, 성찰, 집에서 해 보는 연습 안내로 이루어지며, 모든 동작은 의자나 벽을 잡고 할 수 있도록 구성했습니다.</p>'
  },
  {
    id: 'sample-recruit',
    category: '공지',
    pinned: true,
    status: '모집 중',
    date: '2026-10-18',
    title: '[예시] 움직임 명상 프로그램 연구 참여자 모집',
    images: [],
    body:
      '<p>[모집 중인 연구 이름] 연구에 참여하실 분을 모십니다.</p>' +
      '<ul><li>대상: [참여 대상]</li><li>기간: [참여 기간]</li><li>내용: [참여 시 하는 활동]</li><li>사례: [사례 내용]</li></ul>' +
      '<p>참여 문의: [연락처]</p>'
  }
];
