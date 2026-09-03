# HotelsPick Redesign

## Project Overview

최초 와이어프레임의 구조를 브라우저에서 검증하기 위한 HotelsPick 메인 페이지 PC 프로토타입입니다. 콘텐츠는 Mock Data를 사용하며 섹션 순서, 배치 방식과 탐색 구조는 와이어프레임을 기준으로 구성했습니다.

## Goal

- 호텔 검색과 탐색으로 이어지는 사용자 흐름 정리
- 특가 호텔 Carousel과 좌우 이동 버튼 구성
- 여행지 목록과 대형 콘텐츠 영역을 분리한 탐색 구조 구현
- 와이어프레임의 더보기, Partner CTA, 5개 Floating Menu 유지

## Page Structure

- Header / Navigation
- Hero
- Hotel Search
- Special Hotel Deals Carousel
- Popular Destinations: 지역 목록 + 대형 콘텐츠
- 지역 전체보기 / 자세히보기
- Top Rated Hotels / 더보기
- Partner CTA
- Footer

## Development

- HTML5
- CSS3 (Grid / Flexbox / Custom Properties)
- Vanilla JavaScript
- Semantic HTML
- Reusable card rendering with mock data
- Desktop-first 12-column-ready layout

`index.html`을 브라우저에서 열면 별도의 빌드 과정 없이 확인할 수 있습니다. 현재 호텔과 여행지 정보는 프로토타입용 Mock Data이며, `assets/images`의 로컬 이미지는 실제 운영 단계에서 자체 이미지 자산으로 교체할 수 있습니다.
