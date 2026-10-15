import generated from './projects.json';

import itMain from '../proto/it/main.png';
import itDetail1 from '../proto/it/d1.png';
import itDetail2 from '../proto/it/d2.png';
import itDetail3 from '../proto/it/d3.png';
import itDetail4 from '../proto/it/d4.png';
import itDetail5 from '../proto/it/d5.png';

import budongMain from '../proto/budong/main.png';
import budongDetail1 from '../proto/budong/d1.png';
import budongDetail2 from '../proto/budong/d2.png';
import budongDetail3 from '../proto/budong/d3.png';
import budongDetail4 from '../proto/budong/d4.png';
import budongDetail5 from '../proto/budong/d5.png';
import budongDetail6 from '../proto/budong/d6.png';
import budongDetail7 from '../proto/budong/d7.png';
import budongDetail8 from '../proto/budong/d8.png';
import budongP from '../proto/budong/budong_p.png';

import acrillMain from '../proto/acrill/main.png';
import acrillDetail1 from '../proto/acrill/d1.png';
import acrillDetail2 from '../proto/acrill/d2.png';
import acrillDetail3 from '../proto/acrill/d3.png';
import acrillDetail4 from '../proto/acrill/d4.png';
import acrillDetail5 from '../proto/acrill/d5.png';
import acrillDetail6 from '../proto/acrill/d6.png';
import acrillDetail7 from '../proto/acrill/d7.png';
import acrillDetail8 from '../proto/acrill/d8.png';
import acrillP from '../proto/acrill/acrill_p.png';

import haraMain from '../proto/hara/main.png';
import haraDetail1 from '../proto/hara/d1.png';
import haraDetail2 from '../proto/hara/d2.png';
import haraDetail3 from '../proto/hara/d3.png';
import haraDetail4 from '../proto/hara/d4.png';
import haraDetail5 from '../proto/hara/d5.png';
import haraDetail6 from '../proto/hara/d6.png';
import haraDetail7 from '../proto/hara/d7.png';
import haraP from '../proto/hara/hara_p.png';

import cancerMain from '../proto/cancer/main.png';
import cancerDetail1 from '../proto/cancer/d1.png';
import cancerDetail2 from '../proto/cancer/d2.png';
import cancerDetail3 from '../proto/cancer/d3.png';
import cancerDetail4 from '../proto/cancer/d4.png';
import cancerDetail5 from '../proto/cancer/d5.png';
import cancerP from '../proto/cancer/cancer_p.png';

import mideaMain from '../proto/midea/main.png';
import mideaDetail1 from '../proto/midea/d1.png';
import mideaDetail2 from '../proto/midea/d2.png';
import mideaDetail3 from '../proto/midea/d3.png';
import mideaDetail4 from '../proto/midea/d4.png';
import mideaDetail5 from '../proto/midea/d5.png';
import mideaDetail6 from '../proto/midea/d6.png';
import mideaDetail7 from '../proto/midea/d7.png';
import mideaP from '../proto/midea/sin_p.png';

const featured = [
  {
    id: 'brandiup',
    category: 'brand',
    title: '브랜디업 (IT 프로젝트)',
    tagline: '웹 개발 · 반응형 · UI/UX',
    description: '웹 제작 에이전시 브랜드 사이트. 서비스 소개부터 포트폴리오, 문의 접수까지 한 흐름으로 설계했습니다.',
    features: ['PC · 모바일 완전 반응형 퍼블리싱', '서비스 · 포트폴리오 소개 구성', '문의 접수 폼 연동', '기획 문서 노션 정리'],
    tech: ['HTML/CSS', 'JavaScript'],
    images: [itMain, itDetail1, itDetail2, itDetail3, itDetail4, itDetail5],
    url: 'https://brandiup.it.kr',
    notionUrl: 'https://www.notion.so/WebCraft-Pro-1c691b9aaa654c8d9722013f8fe7b8ca?source=copy_link',
  },
  {
    id: 'mostpumgyeok',
    category: 'realestate',
    title: '모스트품격부동산',
    tagline: '부동산 · 매물 관리 · 데이터 시각화',
    description: '공인중개사 사무소의 매물 소개와 상담 예약을 위한 부동산 플랫폼. 매물 관리와 데이터 시각화 화면을 함께 구축했습니다.',
    features: ['매물 목록 · 상세 페이지', '매물 관리 기능', '데이터 시각화', '상담 예약 동선 설계'],
    tech: ['HTML/CSS', 'JavaScript'],
    images: [budongMain, budongDetail1, budongDetail2, budongDetail3, budongDetail4, budongDetail5, budongDetail6, budongDetail7, budongDetail8, budongP],
    url: 'https://mostpumgyeok.com/',
    notionUrl: 'https://www.notion.so/ada42bbf76064322894101257390851a?source=copy_link',
  },
  {
    id: 'soroi-acrylic',
    category: 'brand',
    title: '소로이 아크릴 쇼핑몰',
    tagline: '쇼핑몰 · 제품 관리 · 주문 시스템',
    description: '아크릴 제작 업체의 온라인 쇼핑몰. 제품 등록부터 주문 접수까지 운영에 필요한 기능을 구현했습니다.',
    features: ['제품 카탈로그 · 상세 페이지', '제품 관리 기능', '주문 접수 시스템', 'PC · 모바일 반응형'],
    tech: ['HTML/CSS', 'JavaScript'],
    images: [acrillMain, acrillDetail1, acrillDetail2, acrillDetail3, acrillDetail4, acrillDetail5, acrillDetail6, acrillDetail7, acrillDetail8, acrillP],
    url: 'https://소로이아크릴.com/',
    notionUrl: 'https://www.notion.so/0859e9122e1c447a9b14797c65e3c343?source=copy_link',
  },
  {
    id: 'hara',
    category: 'living',
    title: '헌옷하라',
    tagline: '의류 재활용 · 기부 플랫폼 · 환경 보호',
    description: '헌옷 무료 방문 수거 서비스 홈페이지. 수거 신청부터 기부 안내까지 쉽게 이용할 수 있도록 구성했습니다.',
    features: ['방문 수거 신청 폼', '수거 품목 · 이용 방법 안내', 'PC · 모바일 반응형', '전환율 중심 CTA 배치'],
    tech: ['HTML/CSS', 'JavaScript'],
    images: [haraMain, haraDetail1, haraDetail2, haraDetail3, haraDetail4, haraDetail5, haraDetail6, haraDetail7, haraP],
    url: 'https://hara38.com',
    notionUrl: 'https://www.notion.so/bb4b580712164905b55acf0402d49ab2?source=copy_link',
  },
  {
    id: 'cancer',
    category: 'insurance',
    title: '보험여기어때',
    tagline: '보험 비교 · 맞춤 추천 · 간편 상담',
    description: '암보험 비교 · 추천 랜딩페이지. 복잡한 보장 내용을 쉽게 비교하고 간편하게 상담을 신청할 수 있게 만들었습니다.',
    features: ['보험 비교 · 맞춤 추천 화면', '간편 상담 신청 폼', 'PC · 모바일 반응형', '전환율 중심 CTA 배치'],
    tech: ['HTML/CSS', 'JavaScript'],
    images: [cancerMain, cancerDetail1, cancerDetail2, cancerDetail3, cancerDetail4, cancerDetail5, cancerP],
    url: 'https://보험여기어때.com',
    notionUrl: 'https://www.notion.so/2798a0e5c30f4ca0a379774103adb717?source=copy_link',
  },
  {
    id: 'sin-midea',
    category: 'brand',
    title: '신세계미디어',
    tagline: '미디어 · 콘텐츠 · 디지털 마케팅',
    description: '매장 맞춤 마케팅 솔루션 회사 홈페이지. 서비스 소개와 사례, 상담 문의까지 브랜드 신뢰도를 높이는 구성으로 제작했습니다.',
    features: ['마케팅 솔루션 소개', '사례 · 콘텐츠 섹션', '상담 문의 폼', 'PC · 모바일 반응형'],
    tech: ['HTML/CSS', 'JavaScript'],
    images: [mideaMain, mideaDetail1, mideaDetail2, mideaDetail3, mideaDetail4, mideaDetail5, mideaDetail6, mideaDetail7, mideaP],
    url: 'https://shinsegaemedia1.com',
    notionUrl: 'https://www.notion.so/cb9f3f62aeb14838b7abf28da167acf6?source=copy_link',
  },
].map((p) => ({ ...p, featured: true, mobile: null, sections: [] }));

const withBase = (src) => (src ? `${import.meta.env.BASE_URL}${src}` : src);

const captured = generated.projects.map((p) => ({
  ...p,
  images: p.images.map(withBase),
  mobile: withBase(p.mobile),
}));

export const categories = generated.categories;
export const projects = [...featured, ...captured];
