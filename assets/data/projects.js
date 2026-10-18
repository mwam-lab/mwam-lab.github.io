/* RESEARCH 페이지 카드
   kind: '프로그램' | '연구과제'
   status: '진행' | '완료'  (진행 중인 것이 먼저 보임)
   subtitle: 카드의 한 줄 소개 (색 글씨)
   연구과제(RESEARCH)는 영문, 논문 목록 모양: year / title / lines(지원기관 · 사업 · 역할, 기간). 금액은 쓰지 않음
   프로그램도 같은 모양: year / title / lines(장소 · 대상, 일시). 요일·시간·회차는 쓰지 않음
   post: 소식 글 id를 적으면 그 프로그램을 눌러 사진(소식 글)을 볼 수 있음 */
window.MWAM_PROJECTS = [
  {
    kind: '프로그램',
    status: '진행',
    year: 2026,
    title: '액티브 시니어를 위한 움직임 명상',
    lines: ['무주 상상반디숲 · 무주 시니어층(50~60대)', '2026.09.17 - 2026.10.28'],
    post: '2026-09-17-muju-somatics'
  },
  {
    kind: '프로그램',
    status: '완료',
    year: 2026,
    title: '몸을 통해 이해하는 돌봄: 소매틱스와 사회복지 실천',
    lines: ['인제대학교 사회복지대학원 · 사회복지대학원생', '2026.10.10'],
    post: '2026-10-10-inje-lecture'
  },
  {
    kind: '프로그램',
    status: '완료',
    year: 2025,
    title: '초·중·고 사회정서역량 강화를 통한 자기돌봄 및 스트레스 관리 소마틱스 프로그램',
    lines: ['전북대학교병원 마음건강증진거점센터 · 전북지역 초·중·고등학생', '2025.05.13 - 2025.08.20']
  },
  {
    kind: '프로그램',
    status: '완료',
    year: 2025,
    title: '몸의 신호를 듣다: 간호관리자의 감성리더십 증진을 위한 소마틱스 워크숍',
    lines: ['전주 이공간 · 간호관리자', '2025.05.16'],
    post: '2025-05-16-nurse-managers'
  },
  {
    kind: '프로그램',
    status: '완료',
    year: 2025,
    title: '아름다운세상을 위한 몸의 탐험: 정신건강 소마틱스 프로그램',
    lines: ['인산의료재단 정신재활시설 아름다운세상 · 정신재활시설 이용자', '2025.05.15 - 2025.08.31'],
    post: '2025-05-15-beautiful-world'
  },
  {
    kind: '연구과제',
    status: '진행',
    year: 2026,
    title: 'Exploring the Long-Term Life Experiences of Parents Bereaved by the Sewol Ferry Disaster Using PEARL (Photo Experiencing and Reflective Listening): A Qualitative Study',
    lines: ['4·16 Foundation · Life Safety Academic Research Grant · Principal Investigator (Junhyeok Kim)', 'Jul 2026 - Jul 2027']
  },
  {
    kind: '연구과제',
    status: '진행',
    year: 2025,
    title: 'From Isolation to Connection: An International Collaborative Study on the Lives and Social Inclusion of Socially Withdrawn and Isolated Young Adults',
    lines: ['Jeonbuk National University · National University Development Project, International Collaborative Research Program · Principal Investigator', 'Nov 2025 - Feb 2027']
  },
  {
    kind: '연구과제',
    status: '진행',
    year: 2025,
    title: 'Development and Evaluation of a Hybrid Somatics-Based Health Promotion Program (SOMA-VIVE Program) for Young Adults with Early Schizophrenia',
    lines: ['National Research Foundation of Korea (NRF) · Outstanding Early Career Research Program · Principal Investigator', 'Mar 2025 - Feb 2029']
  },
  {
    kind: '연구과제',
    status: '완료',
    year: 2024,
    title: 'Educational Needs for Nursing Competency in Substance Use Disorder Care: A Mixed-Methods Study',
    lines: ['Korean Academy of Psychiatric and Mental Health Nursing', 'Dec 2024 - Dec 2025']
  },
  {
    kind: '연구과제',
    status: '완료',
    year: 2024,
    title: 'Life and Caregiving Experiences of Young Carers in Korea: A Grounded Theory Study',
    lines: ['Korean Society of Nursing Science', 'Sep 2024 - Aug 2025']
  },
  {
    kind: '연구과제',
    status: '완료',
    year: 2022,
    title: 'Life Trajectories of Bereaved Families after the Sewol Ferry Disaster: A Qualitative Meta-Synthesis',
    lines: ['4.16 Foundation · Academic Grant', 'Jul 2022 - Jul 2023']
  },
  {
    kind: '연구과제',
    status: '완료',
    year: 2021,
    title: 'Development of a Service-User-Involved Mental Health Nursing Education Program',
    lines: ['National Research Foundation of Korea (NRF) · Early Career Research Program · Principal Investigator', 'Mar 2021 - Aug 2024']
  },
  {
    kind: '연구과제',
    status: '완료',
    year: 2021,
    title: 'Lives of People with Schizophrenia During Disasters: A Qualitative Study (COVID-19 Focus)',
    lines: ['National Research Foundation of Korea (NRF) · Early Career Research Program (Humanities & Social Sciences) · Principal Investigator', 'May 2021 - Apr 2023']
  },
  {
    kind: '연구과제',
    status: '완료',
    year: 2019,
    title: 'Capacity for Truth-Seeking Activities among Sewol Ferry Disaster Victim Activists',
    lines: ['4.16 Foundation · Co-Investigator', 'Aug 2019 - Dec 2019']
  }
];
