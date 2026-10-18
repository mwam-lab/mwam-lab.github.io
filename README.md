# 뫔건강연구소 홈페이지

빌드 도구 없는 정적 사이트예요. 폴더를 통째로 GitHub Pages나 Netlify에 올리면 바로 열려요.

## 페이지
| 파일 | 메뉴 |
|---|---|
| index.html | 홈 |
| about.html | 연구소 소개 (소개 · 연구 방향 · 오시는 길) |
| people.html | 연구진 (연구책임자 · 연구원) |
| research.html | 연구 (프로그램 · 진행 중 · 완료) |
| outcomes.html | 연구성과 (논문 · 학술발표 · 특허·저작권) |
| news.html / post.html | 알림마당 (목록 / 글 보기) |
| contact.html | 문의 · 연구 참여 신청 |

## 내용 고치기: `assets/data/` 파일만 수정하면 돼요
- `site.js`: 기관명, 주소, 전화, 이메일, 인스타그램, 지도
- `posts.js`: 공지사항과 연구 소식. 사진은 `assets/images/posts/`에 넣어요
- `outcomes.js`: 논문, 학술발표, 특허
- `projects.js`: 진행 중인 연구와 완료된 연구
- `people.js`: 연구진. 사진은 `assets/images/people/`에 넣어요

메뉴 구성은 `assets/js/layout.js`, 색과 글꼴은 `assets/css/style.css`에서 바꿔요.

## 글꼴 · 색
- 글꼴: 학교안심 알림장 R/B (KERIS). 원본 파일은 `../fonts/원본/`에 있어요
- 색: 로고 색을 따랐어요. 남색 #243548 · 회청 #728DAA · 청록 #729596 · 하늘 #BED3D5 · 크림 #F9F5EC

## 미리보기
폴더에서 `python -m http.server`를 실행한 뒤 http://localhost:8000 을 열어요. 파일을 더블클릭해서 열어도 대부분 동작해요.
