/* RESEARCH 페이지 카드
   kind: '프로그램' | '연구과제'
   status: '진행' | '완료'  (진행 중인 것이 먼저 보임)
   subtitle: 카드의 한 줄 소개 (색 글씨)
   rows: [항목 이름, 내용] — 알약 모양 이름표와 함께 표시
   프로그램은 '일시, 장소, 대상'만 씀 (기간도 '일시', 요일·시간·회차는 쓰지 않음) */
window.MWAM_PROJECTS = [
  {
    kind: '프로그램',
    status: '진행',
    title: '액티브 시니어를 위한 움직임 명상',
    rows: [
      ['일시', '2026.09.17 – 2026.10.28'],
      ['장소', '무주 상상반디숲'],
      ['대상', '무주 시니어층(50~60대)']
    ]
  },
  {
    kind: '프로그램',
    status: '완료',
    title: '몸의 신호를 듣다: 간호관리자의 감성리더십 증진을 위한 소마틱스 워크숍',
    rows: [
      ['일시', '2025.05.16'],
      ['장소', '전주 이공간'],
      ['대상', '간호관리자']
    ]
  },
  {
    kind: '프로그램',
    status: '완료',
    title: '아름다운 세상을 위한 몸의 탐험: 정신건강 소마틱스 프로그램',
    rows: [
      ['일시', '2025']
    ]
  },
  {
    kind: '연구과제',   // RESEARCH 페이지: 영문, 논문 목록과 같은 모양 (year / title / lines)
    status: '완료',
    year: 2025,
    title: 'Development and Evaluation of a Hybrid Somatics-Based Health Promotion Program (SOMA-VIVE Program) for Young Adults with Early Schizophrenia',
    lines: ['National Research Foundation of Korea (NRF) · Domestic', 'Mar 1, 2025 – Feb 28, 2026']
  }
];
