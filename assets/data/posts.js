/* 알림마당 게시물
   category: '공지' | '프로그램' | '특강' | '학술발표' | '수련'  (NEWS 탭과 카드의 작은 표시)
   date: 'YYYY-MM-DD'  (최신 글이 자동으로 위에 옴)
   thumb: 목록 카드에 보일 대표 이미지 (없으면 images 첫 장, 그것도 없으면 로고)
   images: ['assets/images/posts/파일명.jpg']  - 본문 사진. assets/images/posts 폴더에 넣기
   body: 본문(HTML). 문단은 <p>...</p>
   pinned: true 이면 '중요' 표시하고 맨 위에 고정
   status: '모집 중' 또는 '마감' (번호 자리에 표시, 없으면 '') */
window.MWAM_POSTS = [
  {
    id: '2026-10-17-feldenkrais',
    category: '수련',
    date: '2026-10-17',
    title: '펠든크라이스X소마틱스X웰니스 통합워크샵',
    thumb: 'assets/images/posts/2026-10-17-feldenkrais-duo-thumb.jpg',
    images: ['assets/images/posts/2026-10-17-feldenkrais-duo.jpg', 'assets/images/posts/2026-10-17-feldenkrais.jpg', 'assets/images/posts/2026-10-17-feldenkrais-space.jpg'],
    body: '<p>뫔건강연구소 연구진이 펠든크라이스·소마틱스·웰니스 통합 워크숍 「처음 만나는 이완」에 참여했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 10월 17일(토)</li>' +
        '<li>장소: 전주요가문화공간</li>' +
        '<li>참여: 정재원 교수, 김준혁 연구원</li>' +
        '<li>주요 내용: 내 몸의 소리를 듣다 - 나의 리듬 (ATM/FI, Somatics &amp; Rhythm)</li>' +
        '<li>강사: 박소정 (한국펠든크라이스협회 회장), 김민지 GCFP, 최태은 GCFP</li>' +
      '</ul>'
  },
  {
    id: '2026-10-16-korea-japan-seminar',
    category: '수련',
    date: '2026-10-16',
    title: '정신건강복지 한일 협력 20년 「‘당사자연구’ 교류를 중심으로」 세미나 참석',
    thumb: 'assets/images/posts/2026-10-16-korea-japan-seminar-thumb.jpg',
    images: ['assets/images/posts/2026-10-16-korea-japan-seminar-talk.jpg', 'assets/images/posts/2026-10-16-korea-japan-seminar-okuda.jpg', 'assets/images/posts/2026-10-16-korea-japan-seminar-visit.jpg'],
    body:
      '<p>서울대학교 일본연구소의 한일미래구상사업 세미나 「정신건강복지 한일 협력 20년: ‘당사자연구’ 교류를 중심으로」에 참석했습니다. 경험전문가들의 발표와 대화를 통해 당사자연구의 의미를 되새겼으며, 국제공동연구를 함께하고 있는 오쿠다 가오리 교수님과 교류하는 시간도 가졌습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 10월 16일(금)</li>' +
        '<li>장소: 서울대학교 국제대학원 소천국제회의실</li>' +
        '<li>주최: 서울대학교 일본연구소, 청주정신건강센터</li>' +
        '<li>주요 내용: 당사자연구의 한일교류 20년, 경험전문가 발표와 대화</li>' +
        '<li>참석: 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2026-10-15-jeonju-forum',
    category: '특강',
    date: '2026-10-15',
    title: '제2회 전주시복지재단 복지정책포럼 「청년이 특별해지는, 일상마중」 지정토론',
    thumb: 'assets/images/posts/2026-10-15-jeonju-forum-thumb.jpg',
    images: ['assets/images/posts/2026-10-15-jeonju-forum-talk.jpg', 'assets/images/posts/2026-10-15-jeonju-forum-panel.jpg'],
    body:
      '<p>제2회 전주시복지재단 복지정책포럼에서 「위기청년의 마음건강 이해와 안전한 지원연계」를 주제로 지정토론에 참여했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 10월 15일(목) 14:00-16:00</li>' +
        '<li>장소: 전주 중부비전센터 2층 글로리아홀</li>' +
        '<li>주제: 전주시 위기청년 지원체계 구축과 지역협력 방안 모색</li>' +
        '<li>주최: 전주시복지재단 전주사람</li>' +
        '<li>지정토론: 정재원 교수</li>' +
      '</ul>'
  },
  {
    id: '2026-10-10-inje-lecture',
    category: '특강',
    date: '2026-10-10',
    title: '인제대학교 사회복지대학원 특강 「몸을 통해 이해하는 돌봄: 소매틱스와 사회복지 실천」',
    thumb: 'assets/images/posts/2026-10-10-inje-lecture-thumb.jpg',
    images: ['assets/images/posts/2026-10-10-inje-lecture.jpg', 'assets/images/posts/2026-10-10-inje-lecture-poster.jpg'],
    body:
      '<p>인제대학교 사회복지대학원 특강에서 「몸을 통해 이해하는 돌봄: 소매틱스와 사회복지 실천」을 주제로 강의했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 10월 10일(토) 14:00-16:00</li>' +
        '<li>장소: 인제대학교 신어관 226호</li>' +
        '<li>강사: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2026-08-10-japan-ipe',
    category: '프로그램',
    date: '2026-08-10',
    title: 'JBNU 글로벌 PBL 「간호·사회복지, 함께 배우는 IPE 일본 현장학습」',
    thumb: 'assets/images/posts/2026-08-10-japan-ipe-v2-thumb.jpg',
    images: ['assets/images/posts/2026-08-10-japan-ipe.jpg'],
    body:
      '<p>정재원 교수가 책임교수를 맡아 이끈 IPE 기반 Co-production PBL 프로그램을 운영했습니다. 간호학과와 사회복지학과 학생들이 고립·은둔 청년의 회복을 주제로 함께 배우며, 고립·은둔 경험 당사자가 참여한 국내 사전학습에 이어 일본 홋카이도에서 한일 학생 공동 토론 수업과 당사자 중심 회복 현장을 경험했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 8월 10일(월) - 8월 14일(금)</li>' +
        '<li>장소: 일본 홋카이도 (베델의 집, 홋카이도의료대학, 삿포로 청년지원센터)</li>' +
        '<li>주관: 전북대학교 간호대학, 사회복지학과 (글로컬대학30)</li>' +
        '<li>대상: 간호학과·사회복지학과 학생 20명</li>' +
        '<li>책임교수: 정재원 교수</li>' +
        '<li>운영 참여: 김준혁 연구원</li>' +
      '</ul>' +
      '<p><a href="https://top.jbnu.ac.kr/bbs/glocal/5294/399323/artclView.do" target="_blank" rel="noopener">전북대학교 기사 보기</a></p>'
  },
  {
    id: '2026-07-18-sigma-poster',
    category: '학술발표',
    date: '2026-07-18',
    title: 'Sigma 37th International Nursing Research Congress 포스터 발표',
    thumb: 'assets/images/posts/2026-07-18-sigma-poster-thumb.jpg',
    images: ['assets/images/posts/2026-07-18-sigma-poster.jpg'],
    body:
      '<p>캐나다 토론토에서 열린 Sigma 37th International Nursing Research Congress에서 조현병 청년과 간호대학생의 수평적 만남 경험을 다룬 질적 연구를 포스터로 발표했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 7월 18일(토)</li>' +
        '<li>장소: Sheraton Centre Toronto Hotel, 캐나다 토론토</li>' +
        '<li>주최: Sigma Theta Tau International Honor Society of Nursing</li>' +
        '<li>발표: Qualitative Study of Horizontal Encounter Experiences of Schizophrenia Youth and Nursing Students</li>' +
        '<li>발표자: 김준혁 연구원, 정재원 교수</li>' +
      '</ul>'
  },
  {
    id: '2026-07-17-camh',
    category: '수련',
    date: '2026-07-17',
    title: '캐나다 CAMH 방문 「Collaborative Learning College」 연구팀과의 만남',
    thumb: 'assets/images/posts/2026-07-17-camh-thumb.jpg',
    images: ['assets/images/posts/2026-07-17-camh-group.jpg', 'assets/images/posts/2026-07-17-camh-talk.jpg', 'assets/images/posts/2026-07-17-camh-meeting.jpg', 'assets/images/posts/2026-07-17-camh-online.jpg'],
    body:
      '<p>캐나다 토론토의 CAMH(Centre for Addiction and Mental Health)를 방문해 리커버리 칼리지인 Collaborative Learning College(CLC) 연구팀과 만났습니다. CLC 연구를 함께 이끄는 Sophie Soklaridis 박사, Holly Harris 연구코디네이터와 당사자와 함께 만드는 정신건강 교육(co-production)의 운영 경험을 나누고, 연구소의 연구 관심사를 소개했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 7월 17일(금)</li>' +
        '<li>장소: CAMH, 캐나다 토론토</li>' +
        '<li>주요 내용: CLC의 개발·운영 경험 공유, co-production 기반 간호교육 논의</li>' +
        '<li>참여: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>' +
      '<p><a href="https://clc.camh.ca" target="_blank" rel="noopener">Collaborative Learning College 홈페이지</a></p>'
  },
  {
    id: '2026-07-17-ccqhr',
    category: '수련',
    date: '2026-07-17',
    title: '토론토대학교 「Centre for Critical Qualitative Health Research」 방문',
    thumb: 'assets/images/posts/2026-07-17-ccqhr-thumb.jpg',
    images: ['assets/images/posts/2026-07-17-ccqhr.jpg'],
    body:
      '<p>토론토대학교 Dalla Lana School of Public Health의 Centre for Critical Qualitative Health Research(CCQHR)를 방문했습니다. Sarah Elton 교수, Shan Mohammed 교수와 함께 센터를 둘러보고, 비판적 질적 건강연구와 정신건강간호 질적연구에 대해 의견을 나누었습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 7월 17일(금)</li>' +
        '<li>장소: 토론토대학교 Dalla Lana School of Public Health, 캐나다 토론토</li>' +
        '<li>주요 내용: 센터 소개와 투어, 비판적 질적 건강연구 논의</li>' +
        '<li>참여: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2026-02-26-eafons',
    category: '학술발표',
    date: '2026-02-26',
    title: '29th EAFONS 2026 포스터 발표',
    thumb: 'assets/images/posts/2026-02-26-eafons-thumb-v2.jpg',
    images: ['assets/images/posts/2026-02-26-eafons.jpg'],
    body:
      '<p>싱가포르국립대학교에서 열린 제29회 동아시아간호학자포럼(EAFONS)에서 만성 조현병 당사자의 소마틱스 기반 중재 참여 경험을 다룬 질적 연구를 포스터로 발표했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 2월 26일(목) - 28일(토)</li>' +
        '<li>장소: National University of Singapore, 싱가포르</li>' +
        '<li>주제: Innovate, Integrate, Inspire: Advancing Nursing Excellence in the Digital Era</li>' +
        '<li>발표: Experiences of Participating in Somatics-Based Intervention among People with Chronic Schizophrenia: A Qualitative Content Analysis</li>' +
        '<li>발표자: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2026-09-17-muju-somatics',
    category: '프로그램',
    date: '2026-09-17',
    title: '무주 인문도시지원사업 「액티브 시니어를 위한 움직임 명상」 운영',
    thumb: 'assets/images/posts/2026-09-17-muju-somatics-photo-thumb.jpg',
    images: ['assets/images/posts/2026-09-17-muju-somatics-photo.jpg', 'assets/images/posts/2026-09-17-muju-somatics-poster.jpg'],
    body:
      '<p>전북대학교 인문학연구소와 무주군이 함께 주관하는 무주 인문도시지원사업으로, 소매틱스(Somatics) 기반 움직임 명상 프로그램 「액티브 시니어를 위한 움직임 명상」을 운영합니다. ' +
      '신체 움직임을 통해 몸과 마음의 건강을 증진하고 삶의 통합적 성찰을 돕는 것을 목적으로 합니다.</p>' +
      '<ul>' +
        '<li>강사: 정재원 교수, 김준혁 연구원</li>' +
        '<li>일시: 2026년 9월 17일 - 10월 28일</li>' +
        '<li>장소: 무주 상상반디숲</li>' +
        '<li>대상: 무주 시니어층(50~60대)</li>' +
      '</ul>'
  },
  {
    id: '2025-12-05-bongsarang',
    category: '프로그램',
    date: '2025-12-05',
    title: '「봉사랑, 청춘을 잇다」 성과발표회',
    thumb: 'assets/images/posts/2025-12-05-bongsarang-thumb-v2.jpg',
    images: ['assets/images/posts/2025-12-05-bongsarang-group-v2.jpg', 'assets/images/posts/2025-12-05-bongsarang-talk.jpg'],
    body:
      '<p>정재원 교수가 지도한 전북대학교 간호대학 동아리 봉사랑과 정신재활시설 아름다운세상의 청년 당사자들이 5월부터 10월까지 함께한 「봉사랑, 청춘을 잇다」 프로그램의 성과발표회를 열었습니다. 캠퍼스 투어, 플로깅, 취미 활동 등 10회의 만남을 통해 간호대학생과 청년 당사자가 수평적인 관계 속에서 서로의 삶을 지지하며 함께 성장했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 12월 5일(금) 16:00</li>' +
        '<li>장소: 전북대학교 간호대학 101호</li>' +
        '<li>주관: 전북특별자치도, 아름다운세상, 전북대학교 간호대학</li>' +
        '<li>프로그램: 2025년 5월 - 10월, 총 10회 (2025년 전북특별자치도 청년공익활동 지원사업)</li>' +
        '<li>지도교수: 정재원 교수</li>' +
      '</ul>' +
      '<p><a href="http://www.mindpost.or.kr/bbs/board.php?bo_table=news&amp;wr_id=9333" target="_blank" rel="noopener">마인드포스트 기사 보기</a></p>'
  },
  {
    id: '2025-11-21-kpmhn-poster',
    category: '학술발표',
    date: '2025-11-21',
    title: '2025 한국정신간호학회 동계학술대회 우수포스터상 수상',
    thumb: 'assets/images/posts/2025-11-21-kpmhn-poster-thumb-v2.jpg',
    images: ['assets/images/posts/2025-11-21-kpmhn-poster.jpg'],
    body:
      '<p>김준혁 연구원(지도교수 정재원)이 2025 한국정신간호학회 동계학술대회에서 우수포스터상을 수상했습니다. 글로벌 PBL 프로그램으로 일본 베델의 집을 방문한 간호대학생의 회복지향 학습 경험을 질적 연구로 탐구해, 국제 현장체험이 회복지향 간호 역량을 키우는 학습 모델이 될 수 있음을 보여주었다는 평가를 받았습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 11월 21일(금)</li>' +
        '<li>장소: 고려대학교 백주년기념관</li>' +
        '<li>주제: 생성형AI를 활용한 정신건강 간호교육, 연구, 실무</li>' +
        '<li>발표: “교과서 속 전인 간호가 현실에서 구현되다”: 일본 베델의 집에서의 한국 간호대학생의 회복지향 학습 경험</li>' +
        '<li>발표자: 김준혁 연구원, 신소영, 안수연, 정재원 교수</li>' +
        '<li>수상: 우수포스터상</li>' +
      '</ul>' +
      '<p><a href="http://ju.ac.kr/b195835" target="_blank" rel="noopener">전북대학교 기사 보기</a></p>'
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
