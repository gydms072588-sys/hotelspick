# 상단 여행 일러스트 배너

2026-10-13: 기존 상단 사진 슬라이드 3개를 참고 이미지 분위기의 여행 일러스트 배너로 교체했습니다.

| 슬라이드 | 제목 | PC 이미지 | 모바일 이미지 |
| --- | --- | --- | --- |
| 1 | 싱그러운 담양여행 | `assets/images/hero-illustrated-01.webp` | `assets/images/hero-illustrated-01-mobile.webp` |
| 2 | 봄향기 가득 제주여행 | `assets/images/hero-illustrated-02.webp` | `assets/images/hero-illustrated-02-mobile.webp` |
| 3 | 설렘 가득 몰디브여행 | `assets/images/hero-illustrated-03.webp` | `assets/images/hero-illustrated-03-mobile.webp` |

## 제작

내장 ImageGen으로 새로 생성했습니다. 참고 이미지는 분위기와 구성의 참고 자료로만 사용했습니다. 외부 스톡 이미지 파일을 배너에 사용하지 않았습니다.

공통 프롬프트: 가로 3:1 여행 광고 배너, 수채화 종이 질감과 페이퍼 컷 일러스트, 밝은 파란 하늘, 중앙의 큰 정확한 한글 여행 제목, 아래 영문 지역명, 가장자리의 풍경과 식물.

- 담양: 초록 대나무 숲·메타세쿼이아·패러글라이더, 짙은 초록 제목.
- 제주: 푸른 바다·모래 해변·돌하르방·감귤·유채꽃, 노란색과 흰색 제목.
- 몰디브: 청록 라군·수상 리조트·야자수·열대꽃, 아이보리와 청록 제목.
- 모바일: 각 가로형 배너를 참조하여 같은 문구와 일러스트를 2:3 세로 구도로 재구성. 제목이 잘리지 않도록 가운데 배치하고 검색창이 겹치는 하단에는 풍경 배치.

정확한 프롬프트와 생성 원본 위치: [banner-generation.json](banner-generation.json).

## 적용 범위

상단 `heroSlides`의 이미지 데이터와 이미지 요소만 변경했습니다. `picture`로 800px 이하에서 세로형 이미지를 선택하고 `object-fit: cover`로 기존 배너를 채웁니다. 검색창·헤더·카드·하단 섹션의 디자인과 슬라이드 전환 구현은 유지했습니다. 기존 사진 파일도 보존했습니다.

PC·모바일 각 3개 슬라이드의 이미지 디코딩, `cover` 적용, 슬라이드 선택 및 PC 좌우 버튼 동작을 브라우저에서 확인했습니다. 확인 화면은 `banner-pc-1.png` ~ `banner-pc-3.png`, `banner-mobile-1.png` ~ `banner-mobile-3.png`입니다.
