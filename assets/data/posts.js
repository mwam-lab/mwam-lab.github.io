/* 알림마당 게시물
   category: '공지' | '프로그램' | '특강' | '학술발표' | '수련'  (NEWS 탭과 카드의 작은 표시)
   title: **글자**로 감싸면 그 부분만 굵게 보임 (예: '... **우수포스터상** 수상')
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
    images: ['assets/images/posts/2026-10-10-inje-lecture.jpg', 'assets/images/posts/2026-10-10-inje-lecture-talk2-v2.jpg', 'assets/images/posts/2026-10-10-inje-lecture-talk.jpg', 'assets/images/posts/2026-10-10-inje-lecture-poster.jpg'],
    body:
      '<p>인제대학교 사회복지대학원 특강에서 「몸을 통해 이해하는 돌봄: 소매틱스와 사회복지 실천」을 주제로 강의했습니다. 강의에 이어 의자에 앉아서 하는 움직임 명상을 함께 실습하며 사회복지 현장에서 클라이언트와 적용할 수 있는 방법을 나누었습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 10월 10일(토) 14:00-16:00</li>' +
        '<li>장소: 인제대학교 신어관 226호</li>' +
        '<li>강사: 정재원 교수, 김준혁 연구원</li>' +
        '<li>실습: 앉아서 하는 움직임 명상 (약 30분)</li>' +
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
    id: '2026-04-23-kpmhn-spring',
    category: '특강',
    date: '2026-04-23',
    title: '2026 한국정신간호학회 춘계학술대회 강연 「정신간호 중재 연구의 새로운 지평: 제공자 중심에서 당사자 참여로」',
    thumb: 'assets/images/posts/2026-04-23-kpmhn-spring-thumb.jpg',
    images: ['assets/images/posts/2026-04-23-kpmhn-spring-talk.jpg', 'assets/images/posts/2026-04-23-kpmhn-spring-group.jpg'],
    body:
      '<p>정재원 교수가 2026 한국정신간호학회 춘계학술대회에서 「정신간호 중재 연구의 새로운 지평: 제공자 중심에서 당사자 참여로」를 주제로 강연했습니다. 정신간호 중재 연구가 제공자 중심에서 당사자가 함께 참여하는 방향으로 나아가야 할 필요성과 방법을 나누었습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 4월 23일(목)</li>' +
        '<li>장소: 온라인 개최 (Zoom 웨비나)</li>' +
        '<li>주최: 한국정신간호학회</li>' +
        '<li>주제: 전환의 시대: 정신간호 중재연구의 도약과 실천</li>' +
        '<li>강연: 정재원 교수</li>' +
      '</ul>'
  },
  {
    id: '2026-03-11-snu-scholar',
    category: '수련',
    date: '2026-03-11',
    title: '서울대학교 간호대학 외국인 저명학자 초청 워크숍 참석',
    thumb: 'assets/images/posts/2026-03-11-snu-scholar-thumb.jpg',
    images: ['assets/images/posts/2026-03-11-snu-scholar-main.jpg', 'assets/images/posts/2026-03-11-snu-scholar-group.jpg'],
    body:
      '<p>서울대학교 간호과학연구소와 한국정신간호학회가 함께 연 외국인 저명학자 초청 워크숍에 참석했습니다. 다트머스 대학의 Glyn Elwyn 교수에게서 공유의사결정(Shared Decision Making, SDM)의 Three-talk Model과 측정 도구, 실무에서의 SDM과 간호사의 역할을 배웠습니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 3월 11일(수) 13:30-17:00</li>' +
        '<li>장소: 서울대학교 간호대학 (대면·Zoom 병행)</li>' +
        '<li>주최: 서울대학교 간호과학연구소, 한국정신간호학회</li>' +
        '<li>연자: Glyn Elwyn 교수 (The Dartmouth Institute for Health Policy and Clinical Practice)</li>' +
        '<li>참석: 정재원 교수, 김준혁 연구원</li>' +
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
    id: '2026-01-09-okuda-mou',
    category: '공지',
    date: '2026-01-09',
    title: '홋카이도의료대학 오쿠다 가오리 교수와 국제공동연구 MOU 체결',
    thumb: 'assets/images/posts/2026-01-09-okuda-mou-thumb-v2.jpg',
    images: ['assets/images/posts/2026-01-09-okuda-mou-sign-v2.jpg', 'assets/images/posts/2026-01-09-okuda-mou-hold.jpg', 'assets/images/posts/2026-01-09-okuda-mou-selfie.jpg', 'assets/images/posts/2026-01-09-okuda-mou-wide.jpg'],
    body:
      '<p>정재원 교수 연구실이 일본 홋카이도의료대학 오쿠다 가오리 교수 연구실과 국제공동연구를 위한 연구실 간 MOU를 체결했습니다. 두 연구실은 고립·은둔 청년의 삶과 사회적 포용을 주제로 한 국제공동연구를 함께 수행하며, 한일 양국의 경험과 실천을 나누어 갈 예정입니다.</p>' +
      '<ul>' +
        '<li>일시: 2026년 1월 9일(금)</li>' +
        '<li>장소: 일본 삿포로</li>' +
        '<li>협약: 전북대학교 간호대학 정재원 교수 연구실, 홋카이도의료대학 간호복지학부 오쿠다 가오리 교수 연구실</li>' +
        '<li>연구: From Isolation to Connection (전북대학교 국립대학육성사업 국제공동협력연구)</li>' +
        '<li>참여: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2025-12-16-scholarship',
    category: '공지',
    date: '2025-12-16',
    title: '김준혁 연구원, 국가우수장학생(이공계) 선발',
    thumb: 'assets/images/posts/2025-12-16-scholarship-thumb.jpg',
    images: ['assets/images/posts/2025-12-16-scholarship-main.jpg', 'assets/images/posts/2025-12-16-scholarship-cert.jpg'],
    body:
      '<p>김준혁 연구원(지도교수 정재원)이 이공계 분야의 뛰어난 학업능력과 연구 역량을 인정받아 2025년 <strong>국가우수장학생(이공계)</strong>으로 선발되었습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 12월 16일</li>' +
        '<li>장학: 국가우수장학금(이공계) 대학원</li>' +
        '<li>수여: 과학기술정보통신부</li>' +
        '<li>지도교수: 정재원 교수</li>' +
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
    title: '2025 한국정신간호학회 동계학술대회 **우수포스터상** 수상',
    thumb: 'assets/images/posts/2025-11-21-kpmhn-poster-thumb-v2.jpg',
    images: ['assets/images/posts/2025-11-21-kpmhn-poster.jpg', 'assets/images/posts/2025-11-21-kpmhn-award.jpg'],
    body:
      '<p>김준혁 연구원(지도교수 정재원)이 2025 한국정신간호학회 동계학술대회에서 <strong>우수포스터상</strong>을 수상했습니다. 글로벌 PBL 프로그램으로 일본 베델의 집을 방문한 간호대학생의 회복지향 학습 경험을 질적 연구로 탐구해, 국제 현장체험이 회복지향 간호 역량을 키우는 학습 모델이 될 수 있음을 보여주었다는 평가를 받았습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 11월 21일(금)</li>' +
        '<li>장소: 고려대학교 백주년기념관</li>' +
        '<li>주제: 생성형AI를 활용한 정신건강 간호교육, 연구, 실무</li>' +
        '<li>발표: “교과서 속 전인 간호가 현실에서 구현되다”: 일본 베델의 집에서의 한국 간호대학생의 회복지향 학습 경험</li>' +
        '<li>발표자: 김준혁 연구원, 신소영, 안수연, 정재원 교수</li>' +
        '<li>수상: <strong>우수포스터상</strong></li>' +
      '</ul>' +
      '<p><a href="http://ju.ac.kr/b195835" target="_blank" rel="noopener">전북대학교 기사 보기</a></p>'
  },
  {
    id: '2025-06-23-bethel-pbl',
    category: '프로그램',
    date: '2025-06-23',
    title: 'JBNU 글로벌 PBL 「정신건강 회복 중심 지역사회 모델 탐방」 일본 베델의 집 연수',
    thumb: 'assets/images/posts/2025-06-23-bethel-pbl-thumb.jpg',
    images: ['assets/images/posts/2025-06-23-bethel-pbl-1.jpg', 'assets/images/posts/2025-06-23-bethel-pbl-2.jpg', 'assets/images/posts/2025-06-23-bethel-pbl-3.jpg', 'assets/images/posts/2025-06-23-bethel-pbl-4.jpg', 'assets/images/posts/2025-06-23-bethel-pbl-5.jpg', 'assets/images/posts/2025-06-23-bethel-pbl-6.jpg', 'assets/images/posts/2025-06-23-bethel-pbl-7.jpg'],
    body:
      '<p>정재원 교수가 책임교수를 맡아 이끈 글로벌 PBL 프로그램으로 간호대학 학생들이 일본 홋카이도의 베델의 집과 홋카이도의료대학을 방문했습니다. 당사자 연구 현장과 그룹홈, 작업장, 클리닉을 직접 체험하고, 홋카이도의료대학 학생들과 히키코모리를 주제로 한 공동 PBL 세션에 참여하며 회복 중심 간호의 의미를 성찰했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 6월 23일(월) - 6월 27일(금)</li>' +
        '<li>장소: 일본 홋카이도 (베델의 집, 홋카이도의료대학)</li>' +
        '<li>주관: 전북대학교 간호대학 (글로컬대학30)</li>' +
        '<li>대상: 간호대학 학생 8명</li>' +
        '<li>책임교수: 정재원 교수</li>' +
        '<li>참여: 김준혁 연구원</li>' +
      '</ul>' +
      '<p><a href="http://www.mindpost.or.kr/bbs/board.php?bo_table=news&amp;wr_id=8982" target="_blank" rel="noopener">마인드포스트 기사 보기</a></p>'
  },
  {
    id: '2025-05-29-khu-lecture',
    category: '특강',
    date: '2025-05-29',
    title: '경희대학교 간호대학 대학원 특강',
    thumb: 'assets/images/posts/2025-05-29-khu-lecture-thumb.jpg',
    images: ['assets/images/posts/2025-05-29-khu-lecture.jpg'],
    body:
      '<p>정재원 교수가 경희대학교 간호대학 대학원 중급간호연구 수업에서 「연구논문을 잘 작성하는 법」을 주제로 특강했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 5월 29일(목)</li>' +
        '<li>장소: 경희대학교 간호대학</li>' +
        '<li>대상: 대학원 중급간호연구 수강생</li>' +
        '<li>강사: 정재원 교수</li>' +
      '</ul>'
  },
  {
    id: '2025-05-29-khu-conference',
    category: '수련',
    date: '2025-05-29',
    title: '2025 동서간호학연구소 춘계학술대회 「Mindfulness·compassion을 통한 돌봄」 참석',
    thumb: 'assets/images/posts/2025-05-29-khu-conference-thumb-v2.jpg',
    images: ['assets/images/posts/2025-05-29-khu-conference-2.jpg', 'assets/images/posts/2025-05-29-khu-conference.jpg'],
    body:
      '<p>경희대학교 동서간호학연구소 춘계학술대회에 참석해 마음챙김과 자비를 바탕으로 한 돌봄에 대해 배웠습니다. MBSR(마음챙김 기반 스트레스 감소)을 중심으로 한 강연을 들으며 연구소의 움직임 명상 프로그램에 적용할 방향을 살펴보았습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 5월 29일(목) 13:00-17:00</li>' +
        '<li>장소: 경희대학교</li>' +
        '<li>주최: 경희대학교 동서간호학연구소</li>' +
        '<li>주제: Mindfulness·compassion을 통한 돌봄</li>' +
        '<li>참석: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2025-05-16-nurse-managers',
    category: '프로그램',
    date: '2025-05-16',
    title: '「몸의 신호를 듣다: 간호관리자의 감성리더십 증진을 위한 소마틱스」 워크숍',
    thumb: 'assets/images/posts/2025-05-16-nurse-managers-thumb.jpg',
    images: ['assets/images/posts/2025-05-16-nurse-managers.jpg'],
    body:
      '<p>간호관리자를 대상으로 몸의 감각을 알아차리며 감성리더십을 키우는 소마틱스 워크숍을 운영했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 5월 16일(금)</li>' +
        '<li>장소: 전주 이공간</li>' +
        '<li>대상: 간호관리자</li>' +
        '<li>진행: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2025-05-15-beautiful-world',
    category: '프로그램',
    date: '2025-05-15',
    title: '「아름다운세상을 위한 몸의 탐험」 정신건강 소마틱스 프로그램',
    thumb: 'assets/images/posts/2025-05-15-beautiful-world-thumb.jpg',
    images: ['assets/images/posts/2025-05-15-beautiful-world-slide.jpg', 'assets/images/posts/2025-05-15-beautiful-world-1-m.jpg', 'assets/images/posts/2025-05-15-beautiful-world-2-m.jpg', 'assets/images/posts/2025-05-15-beautiful-world-3-m.jpg', 'assets/images/posts/2025-05-15-beautiful-world-4-m.jpg'],
    body:
      '<p>정신재활시설 아름다운세상 이용자와 함께 몸의 감각을 깨우고 움직임을 탐험하는 정신건강 소마틱스 프로그램을 운영했습니다.</p>' +
      '<ul>' +
        '<li>기간: 2025년 5월 15일 - 8월 31일</li>' +
        '<li>장소: 인산의료재단 정신재활시설 아름다운세상</li>' +
        '<li>대상: 정신재활시설 이용자</li>' +
        '<li>진행: 정재원 교수, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2025-05-17-somatics-feldenkrais',
    category: '수련',
    date: '2025-05-17',
    title: '소마앤바디 소마틱스 펠든크라이스 워크숍 참여',
    body:
      '<p>정재원 교수, 서교일 연구원, 김준혁 연구원이 서울 신촌 힘의집에서 열린 소마앤바디 제168회 소마틱스 펠든크라이스 워크숍에 참여했습니다. 펠든크라이스 메소드를 바탕으로 작은 움직임을 섬세하게 알아차리는 방법을 익혔습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 5월 17일(토) - 18일(일), 13:00-18:00</li>' +
        '<li>장소: 서울 신촌 힘의집</li>' +
        '<li>주관: 소마앤바디</li>' +
        '<li>참여: 정재원 교수, 서교일 연구원, 김준혁 연구원</li>' +
      '</ul>'
  },
  {
    id: '2025-04-26-simm',
    category: '수련',
    date: '2025-04-26',
    title: '바마움 S.I.M.M. 프랙티셔너 자격과정 5기 수료',
    thumb: 'assets/images/posts/2025-04-26-simm-thumb.jpg',
    images: ['assets/images/posts/2025-04-26-simm-group.jpg', 'assets/images/posts/2025-04-26-simm-class.jpg', 'assets/images/posts/2025-04-26-simm-lecture.jpg', 'assets/images/posts/2025-04-26-simm-practice.jpg', 'assets/images/posts/2025-04-26-simm-outdoor.jpg'],
    body:
      '<p>서교일 연구원과 김준혁 연구원이 바마움의 S.I.M.M.(Somatic Integrated Movement Meditation) 프랙티셔너 자격과정 5기를 수료했습니다. S.I.M.M.은 정신의학, 신경과학, 소마틱스를 결합한 움직임 명상으로, 임상과 일상에서 움직임 기반 명상을 이끌 수 있는 전문가를 양성하는 과정입니다. 정신건강과 움직임에 관한 이론을 배우고, 서서, 앉아서, 누워서 하는 움직임 명상과 페르시안밀을 활용한 펜듈럼 명상을 실습했습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 4월 26일(토) - 27일(일)</li>' +
        '<li>장소: 서울 신촌 힘의집(이론), 서울성모병원 옴니버스파크(실기)</li>' +
        '<li>주관: 바마움(바른 마음을 위한 움직임)</li>' +
        '<li>참여: 서교일 연구원, 김준혁 연구원</li>' +
      '</ul>' +
      '<p><a href="http://bamaum.com" target="_blank" rel="noopener">바마움 홈페이지</a></p>'
  },
  {
    id: '2025-03-23-ancient-training',
    category: '수련',
    date: '2025-03-23',
    title: '소마앤바디 고대운동 워크숍(Ancient Training Workshop) 수료',
    thumb: 'assets/images/posts/2025-03-23-ancient-training-thumb.jpg',
    images: ['assets/images/posts/2025-03-23-ancient-training-cert.jpg', 'assets/images/posts/2025-03-23-ancient-training-lecture.jpg', 'assets/images/posts/2025-03-23-ancient-training-group.jpg'],
    body:
      '<p>정재원 교수, 서교일 연구원, 김준혁 연구원이 서울 신촌 힘의집에서 열린 소마앤바디 제166회 고대운동 워크숍을 수료했습니다. 페르시안 밀, 인디언 클럽, 메이스벨, 클럽벨 등 고대 전통 도구를 다루며 리듬과 호흡 속에서 몸을 알아차리는 움직임을 익혔습니다.</p>' +
      '<ul>' +
        '<li>일시: 2025년 3월 15일, 16일, 22일, 23일 (4일 과정)</li>' +
        '<li>장소: 서울 신촌 힘의집</li>' +
        '<li>주관: 소마앤바디</li>' +
        '<li>내용: Persian Meels, Indian Clubs, Macebell, Clubbell</li>' +
        '<li>참여: 정재원 교수, 서교일 연구원, 김준혁 연구원</li>' +
      '</ul>'
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
