/* 알림마당 게시물
   category: '공지' 또는 '소식'
   date: 'YYYY-MM-DD'  (최신 글이 자동으로 위에 옴)
   images: ['assets/images/posts/파일명.jpg']  — 사진은 assets/images/posts 폴더에 넣기
   body: 본문(HTML). 문단은 <p>...</p>
   pinned: true 이면 '중요' 표시하고 맨 위에 고정
   status: '모집 중' 또는 '마감' (번호 자리에 표시, 없으면 '') */
window.MWAM_POSTS = [
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
  },
  {
    id: 'sample-news',
    category: '소식',
    date: '2026-10-17',
    title: '[예시] 움직임 명상 엑스배너 제작',
    images: [],
    body: '<p>[소식 내용을 여기에 적습니다.]</p>'
  }
];
