// 사용법: node scripts/build-project-data.mjs
// capture-projects.mjs 결과(projects-meta.json)와 아래 카탈로그를 합쳐 src/data/projects.json 을 만든다.
import fs from 'node:fs';
import path from 'node:path';

const META_FILE = path.resolve('scripts/projects-meta.json');
const OUT_FILE = path.resolve('src/data/projects.json');

export const CATEGORIES = [
  { id: 'finance', label: '금융 · 대출 · 결제', icon: '💰', color: '#ffc94d', desc: '대출 중개, PG 결제, 정책자금 상담 등 신뢰가 핵심인 금융 랜딩페이지' },
  { id: 'insurance', label: '보험', icon: '🛡️', color: '#5ab0ff', desc: '보험금 찾기, 보험 비교, 설계사 리쿠르팅 등 보험 상담 유입 페이지' },
  { id: 'auto', label: '자동차 · 운전', icon: '🚗', color: '#ff7a59', desc: '장기렌트·리스 견적, 운전연수, 세차 창업까지 모빌리티 분야' },
  { id: 'law', label: '법률 · 행정 · 컨설팅', icon: '⚖️', color: '#b48cff', desc: '법무법인, 행정사, 기업 컨설팅 등 전문 서비스 상담 페이지' },
  { id: 'realestate', label: '부동산 · 분양', icon: '🏢', color: '#4de1c1', desc: '아파트 분양, 전세 임대, 분양 광고 대행 등 부동산 마케팅' },
  { id: 'living', label: '청소 · 생활 서비스', icon: '🧹', color: '#7ee36b', desc: '입주청소, 배관, 철거, 렌탈, 통신 등 생활 밀착형 서비스' },
  { id: 'beauty', label: '뷰티 · 의료 · 헬스케어', icon: '💄', color: '#ff7eb6', desc: '성형외과, 코스메틱 제조, 건강 상담, 주간보호센터 등' },
  { id: 'edu', label: '교육 · 강의', icon: '🎓', color: '#ffa94d', desc: '어학원, 유학, 학습 프로그램, 강좌 모집 페이지' },
  { id: 'brand', label: '브랜드 · 커머스 · B2B', icon: '🛍️', color: '#ff5f6d', desc: '브랜드 소개, 쇼핑몰, 물류, 제조·유통 기업 홈페이지' },
  { id: 'life', label: '라이프 · 엔터테인먼트', icon: '✨', color: '#c084fc', desc: '운세, 심리테스트, 여행, 부업 등 재미와 정보를 주는 서비스' },
  { id: 'system', label: '업무 시스템 · AI · 자동화', icon: '🤖', color: '#00ff88', desc: 'CRM, 관리자 대시보드, AI 트레이딩·분석 봇 등 개발형 프로젝트' },
];

// [폴더명, 카테고리, 표시 이름]
const CATALOG = [
  ['bisang-solution', 'finance', '비상금솔루션'],
  ['demo', 'finance', '대모 (대출의 모든것)'],
  ['easy-loan', 'finance', '이지론'],
  ['goodmorning-financialplus', 'finance', '굿모닝재무플러스'],
  ['juson', 'finance', '주손대부'],
  ['malja', 'finance', '말자대부중개'],
  ['malja-2', 'finance', '말자대부중개 v2'],
  ['right-loan', 'finance', '바른대출'],
  ['smile', 'finance', '스마일론'],
  ['speed', 'finance', '스피드대부'],
  ['sbi-bank', 'finance', 'SBI저축은행 아파트담보대출'],
  ['smart-cash', 'finance', '현금 재테크 세미나'],
  ['eeum', 'finance', '이음페이'],
  ['icon-biz', 'finance', '아이콘비즈'],
  ['icon-biz-a', 'finance', '말리PG'],
  ['icon-paybiz', 'finance', '아이콘비즈 가맹 상담'],
  ['mali-pg', 'finance', '아이콘비즈 PG'],

  ['bodangdang', 'insurance', '보당당'],
  ['bodangdang-sosang', 'insurance', '보당당 소상공인'],
  ['insure-fc', 'insurance', '보험 FC 리쿠르팅'],
  ['supermarket-insurance', 'insurance', '보험슈퍼마켓'],
  ['one-finance', 'insurance', 'MVP사업단'],

  ['auto-rium', 'auto', '오토리움'],
  ['auto-rium-2', 'auto', '오토리움 v2'],
  ['car-new-consulting', 'auto', '차새로컨설팅'],
  ['carplatform', 'auto', '카플랫폼'],
  ['carplatform-2', 'auto', '카플랫폼 v2'],
  ['jautofnc', 'auto', '제이오토'],
  ['rent-car', 'auto', '장기렌트 1분 견적'],
  ['warranty-rent', 'auto', '무보증장기렌트'],
  ['drive-sample', 'auto', '드라이브원 운전연수'],
  ['nemo-drive', 'auto', '네모드라이브'],
  ['one-drive', 'auto', '바로드라이브'],
  ['uwon-drive', 'auto', '유원드라이브'],
  ['brother-steam', 'auto', '브라더스팀'],
  ['brothers-team', 'auto', '브라더스팀 창업'],

  ['law-partner', 'law', '법률사무소 태윤'],
  ['law-partner2', 'law', '법무법인 태윤 v2'],
  ['law-taeyoon', 'law', '법무법인 태윤'],
  ['law-seoho', 'law', '법무법인 서호'],
  ['law-uil', 'law', '법무법인 유일'],
  ['law-yeil-ver2', 'law', '법무법인 예일법조'],
  ['siren24-adv', 'law', '법무법인 파트너'],
  ['gachi', 'law', '가치행정사사무소'],
  ['hoyeon', 'law', '호연행정사사무소'],
  ['biz-log', 'law', 'biz-log 경영상담'],
  ['korea-company-develop', 'law', '한국중소기업지원센터'],
  ['kproment', 'law', 'KProminent 정책자금'],
  ['kproment-company', 'law', 'K.Prominent 지사 모집'],
  ['kprominent-design', 'law', '케이프로미넌트 디자인'],

  ['dalseo-xi', 'realestate', '달서자이 제니크'],
  ['gaok-house', 'realestate', '가옥이네'],
  ['hillstate-sky', 'realestate', '힐스테이트 동인 더 스카이'],
  ['hillstay-sungui', 'realestate', 'Hillstay 방문 예약'],
  ['bun-leader', 'realestate', '분양리더'],
  ['jsycompany', 'realestate', 'JSYCOMPANY'],

  ['clean-father', 'living', '청소하는아빠'],
  ['clean-guard', 'living', '클린방범대'],
  ['clean-otalk', 'living', 'Clean O talk'],
  ['gonggan-reset', 'living', '공간리셋'],
  ['ramsclean', 'living', '람스클린'],
  ['s-clean', 'living', '쓸어담다'],
  ['highEnd', 'living', '하이엔드 배관케어'],
  ['sos', 'living', '배관SOS'],
  ['woori-care', 'living', '우리집배관케어'],
  ['usung-dearisuk', 'living', '유승대리석'],
  ['vision', 'living', '비전산업'],
  ['one-stop', 'living', '원스톱 폐업지원'],
  ['jw-home', 'living', 'JW Home'],
  ['dassonda', 'living', '다쏜다'],
  ['mowon-homepage', 'living', '모원렌탈'],
  ['mowon-rental', 'living', '모원렌탈 프로모션'],
  ['local-mobile', 'living', '시내모바일'],
  ['seoul-m', 'living', '서울모바일'],
  ['ace-green', 'living', '에이스그린'],

  ['beauty-darum', 'beauty', '뷰티다룸'],
  ['on-and-only', 'beauty', '원앤온리 성형외과'],
  ['han-bio', 'beauty', '한바이오 닥터다이어리'],
  ['jipjung-plan', 'beauty', '집중 플랜'],
  ['lamy', 'beauty', 'The Lamy'],
  ['wha-yunsul', 'beauty', "WHA'YUNSUL"],
  ['cheongcho', 'beauty', 'Cheongcho'],
  ['ribon-plus', 'beauty', '리본플러스 주간보호센터'],

  ['korea-study', 'edu', 'K-Study (RU)'],
  ['korea-study-eng', 'edu', 'K-Study (EN)'],
  ['milkt', 'edu', '밀크T 울산센터'],
  ['well-class', 'edu', '웰클레스 영어교습소'],
  ['hawaii-palms', 'edu', '하와이 팜스 어학원'],
  ['senior-en', 'edu', '조선시니어학당'],
  ['thevine-new', 'edu', '더바인 퀀텀 골드 클래스'],
  ['hamsung', 'edu', '함성 유아체육'],

  ['chaesy', 'brand', 'CHAESY'],
  ['bsol-art', 'brand', 'BSOLart'],
  ['sooTrading', 'brand', 'MODAC'],
  ['taejo', 'brand', '태조식품'],
  ['write-paradigm', 'brand', 'The Write Paradigm'],
  ['enter-chem', 'brand', '엔터켐'],
  ['jebi-logis', 'brand', '제비로지스'],
  ['thenaeun-logi', 'brand', '더나은물류'],
  ['js-company', 'brand', '제이에스컴퍼니'],
  ['unc', 'brand', 'U&C'],
  ['one-project', 'brand', 'ONE PROJECT'],
  ['pccm', 'brand', 'PCCM'],
  ['media-market', 'brand', '미디어마켓'],
  ['muraca', 'brand', '무라카'],

  ['saju_en', 'life', 'Korean Saju'],
  ['psychological', 'life', '시그널 오라클'],
  ['mysticportal', 'life', 'MYSTIC PORTAL'],
  ['mind-nook', 'life', '확언 랜딩페이지'],
  ['demo-omliv', 'life', '남성지수 테스트'],
  ['hanoi-kim-teacher', 'life', '하노이김선생'],
  ['rogial', 'life', '로지알'],

  ['brothers-team-crm', 'system', '브라더 CRM'],
  ['bun-mgt', 'system', '분양리더 현장DB 관리'],
  ['bun-clean', 'system', '청소 파트너 DB 관리'],
  ['carplatform-crm', 'system', '카플랫폼 CRM'],
  ['health-callcenter-crm', 'system', '건기식 콜센터 CRM'],
  ['well-class-report', 'system', '영어학원 성적표 관리'],
  ['ujiny-income-statement', 'system', '손익계산서 관리'],
  ['ujiny-keyword-analysis', 'system', '네이버 검색량 분석'],
  ['iqlab', 'system', 'IQLAB 시스템'],
  ['tree', 'system', 'TREE AI 검색식'],
  ['tree2', 'system', 'TREE AI 검색식 v2'],
  ['ai-trading', 'system', 'AI 자동 트레이딩 봇'],
  ['ai-trading-ver2', 'system', 'AI 자동 트레이딩 봇 v2'],
  ['ai-sprot-bot', 'system', 'AI 스포츠 분석기'],
];

// meta description 이 없거나 부족한 프로젝트 보완
const OVERRIDES = {
  'bisang-solution': { tagline: '상품권 매입 · 비상금 상담', description: '취급 상품권 안내와 실시간 후기, 약관 페이지까지 갖춘 비상금 상담 랜딩페이지입니다.' },
  demo: { description: '자산 가치를 극대화하는 금융 솔루션을 소개하고, 진행 절차와 FAQ로 신뢰를 쌓은 뒤 상담으로 연결하는 대출 상담 페이지입니다.' },
  malja: { description: '직장인 · 군인 등 상황별 맞춤 대출 상품을 안내하고, 복잡한 절차 없이 바로 상담을 신청할 수 있게 만든 대부중개 페이지입니다.' },
  'insure-fc': { description: '내 보험료를 아끼면서 수익까지 만드는 방법을 제안하는 보험 FC 리쿠르팅 페이지. 추천 대상과 FAQ로 지원 전환을 유도합니다.' },
  'one-finance': { description: '지인 영업 없이 온라인으로 일하는 보험 설계사 모집 페이지. 고민 공감 → 혜택 → 성과 비교 흐름으로 지원을 이끌어냅니다.' },
  'drive-sample': { description: '“오늘부터 운전이 쉬워진다” 콘셉트의 방문 운전연수 페이지. 합리적인 수업 구성과 실제 후기로 신뢰를 전달합니다.' },
  'law-seoho': { tagline: '이혼 전문 변호사 상담', description: '“잘 끝내야 다시 시작할 수 있습니다.” 메시지로 공감을 이끄는 이혼 전문 법률 상담 페이지. 실시간 상담 문의를 받을 수 있습니다.' },
  'siren24-adv': { tagline: '법무법인 상품 홍보페이지', description: '법무법인 파트너의 법률 상품을 소개하는 홍보 랜딩페이지입니다.' },
  'gaok-house': { tagline: '전국 분양정보 플랫폼', description: '전국 최신 분양정보와 인기 현장, 실시간 접수 현황, 관심고객 등록까지 제공하는 분양 정보 플랫폼입니다.' },
  'clean-otalk': { tagline: '청소 실시간 작업현장 · 온라인 문의', description: '실시간 작업현장 사진으로 신뢰를 보여주고, 온라인 문의 폼으로 바로 접수받는 청소 서비스 페이지입니다.' },
  'usung-dearisuk': { description: '오랜 경험과 노하우로 완성하는 대리석 시공 업체 홈페이지. 시공 분야와 사례, 시공 전후 비교로 품질을 보여줍니다.' },
  dassonda: { tagline: '인터넷 · TV · 정수기 최저가 비교 상담', description: '전 통신사와 정수기 6개 브랜드를 비교해 가장 저렴한 조건을 안내하는 상담 페이지. 실시간 신청 현황과 후기로 전환을 높였습니다.' },
  'seoul-m': { tagline: '휴대폰 개통 · 간편인증 상담', description: '간편인증으로 빠르게 진행하는 휴대폰 개통 상담 페이지입니다.' },
  'hawaii-palms': { tagline: '하와이 어학연수 · 영어교육', description: '“책을 넘어선 영어교육, 하와이에서 시작됩니다.” 하와이 현지 어학원의 프로그램과 생활을 소개하는 페이지입니다.' },
  'senior-en': { tagline: '40~70대 시니어 영어교실', description: '40~70대 시니어를 위한 여행 · 사교 영어 강좌 안내 페이지. 나홀로 세계여행을 목표로 하는 커리큘럼을 소개합니다.' },
  'write-paradigm': { tagline: 'TOEFL · 유학 입시 Essay 전문', description: 'TOEFL 고득점부터 유학 입시 에세이까지, 소수 정예 프로그램과 대표 강사를 소개하는 영어 교육 브랜드 사이트입니다.' },
  'jebi-logis': { description: '퀵서비스부터 1톤~대형 화물운송, 기업 정기 운송까지 제공하는 통합 물류 기업 홈페이지입니다.' },
  'thenaeun-logi': { tagline: '물류 창업 · 은퇴 후 제2의 수익', description: '“평균 수명 83세 시대” 메시지로 시작하는 물류 사업 파트너 모집 페이지입니다.' },
  unc: { tagline: '법률 마케팅 · 광고 대행', description: '“광고는 많습니다. 매출은 다릅니다.” 법률 서비스 업종을 위한 마케팅 · 광고 솔루션을 소개하는 기업형 랜딩페이지입니다.' },
  muraca: { tagline: '천원빵 납품 · 무인매장 창업', description: '천원빵 운영 사장님, 샵인샵 무인매장, 예비 창업자 등 대상별로 납품 · 창업 혜택을 안내하는 B2B 페이지입니다.' },
  'brothers-team-crm': { tagline: '스팀세차 가맹 상담 고객관리', description: '브라더스팀 가맹 · 고객 문의를 한곳에서 관리하는 CRM. 로그인 후 고객 목록 · 상담 이력 · 상태를 관리합니다.' },
  'carplatform-crm': { tagline: '차량 견적 고객관리 CRM', description: '카플랫폼 견적 신청 고객을 검색조건별로 조회하고, 고객 상세 · 오늘의 알림 리스트로 후속 연락을 관리하는 CRM입니다.' },
  'health-callcenter-crm': { tagline: '콜센터 상담원 · 관리자용 CRM', description: '상담원은 고객을 찾고 통화 내용을 남기며 재연락 일정을 관리하고, 관리자는 전체 고객 배분과 설정을 관리하는 콜센터 고객관리 프로그램입니다.' },
  'well-class-report': { tagline: '학생 성적표 관리 · 성적 그래프', description: '영어학원 학생별 성적을 입력하고 Chart.js 그래프로 성적 변화를 보여주는 성적표 관리 웹 애플리케이션입니다.' },
  'ujiny-income-statement': { tagline: '매출 · 광고비 손익 자동화', description: '아임웹 매출과 광고 매체 비용을 모아 구글 시트에 일별 손익을 자동 기록하고, 4시간마다 Cron으로 갱신하는 손익계산서 자동화 시스템입니다.' },
  'ujiny-keyword-analysis': { tagline: '경쟁사 네이버 검색량 모니터링', description: '네이버 데이터랩 검색 트렌드를 매일 자동 수집해 경쟁사 키워드 검색량 추이를 보여주는 관리자 대시보드입니다.' },
  'bun-mgt': { tagline: '분양 현장 문의 DB 관리', description: '여러 분양 현장 랜딩페이지에서 들어온 문의를 한곳에 모아 관리하는 관리자 시스템입니다.' },
  'bun-clean': { tagline: '청소 파트너 문의 DB 관리', description: '청소 파트너 랜딩페이지들의 문의를 통합 관리하는 관리자 시스템. 관리자 화면과 여러 랜딩페이지를 하나의 프로젝트로 운영합니다.' },
  iqlab: { tagline: '무료 신청 · 문의 접수 시스템', description: 'IQLAB 서비스 소개와 무료 신청, 문의 폼 접수를 처리하는 시스템 페이지입니다.' },
};

const TECH_OVERRIDES = {
  'ujiny-income-statement': ['Cloudflare Workers', 'Hono', 'D1', 'Cron', 'Google Sheets API'],
  'ujiny-keyword-analysis': ['Cloudflare Workers', 'D1', 'Cron', 'Naver DataLab API'],
  'well-class-report': ['Cloudflare Pages Functions', 'D1', 'Chart.js'],
  'bun-mgt': ['Cloudflare Pages Functions', 'D1'],
  'bun-clean': ['Cloudflare Pages Functions', 'D1'],
  'ai-trading': ['Chart.js', '실시간 시세 API'],
  'ai-trading-ver2': ['Chart.js', '실시간 시세 API'],
  'ai-sprot-bot': ['Telegram Bot', 'Python'],
};

const TECH_FEATURES = {
  'Kakao Map': '카카오맵 위치 안내 연동',
  Swiper: '메인 비주얼 · 후기 슬라이더',
  GSAP: 'GSAP 인터랙션 애니메이션',
  AOS: '스크롤 등장 애니메이션',
  Supabase: 'Supabase DB 연동',
  Firebase: 'Firebase 데이터 연동',
  'Chart.js': '차트 기반 데이터 시각화',
  'GA/GTM': 'GA · GTM 유입 분석 세팅',
  'Meta Pixel': '메타 픽셀 광고 전환 추적',
  'Naver Analytics': '네이버 애널리틱스 연동',
  '알림 연동': '신청 접수 실시간 알림 전송',
};

const cleanTagline = (title, name) => {
  const parts = title.split(/\s[|·—–-]\s|\s\|\s?/).map((s) => s.trim()).filter(Boolean);
  return parts.find((p) => !p.includes(name) && p.length > 4) || parts[1] || parts[0] || '';
};

function buildFeatures(category, meta) {
  const list = [];
  list.push(category === 'system' ? '로그인 · 권한 기반 관리자 화면 구성' : 'PC · 모바일 완전 반응형 퍼블리싱');
  if (meta.hasForm) list.push(category === 'system' ? '데이터 입력 · 조회 · 관리 기능' : '상담 · 견적 신청 폼과 DB 수집');
  for (const t of meta.tech || []) if (TECH_FEATURES[t]) list.push(TECH_FEATURES[t]);
  if (category !== 'system') list.push('전환율 중심 CTA · 플로팅 상담 버튼 배치');
  return [...new Set(list)].slice(0, 6);
}

function main() {
  const meta = JSON.parse(fs.readFileSync(META_FILE, 'utf8'));
  const projects = [];
  const missing = [];

  for (const [slug, category, name] of CATALOG) {
    const m = meta[slug];
    if (!m || m.skipped || m.error || !m.images?.length) { missing.push(slug); continue; }
    const base = `projects/${slug}/`;
    const override = OVERRIDES[slug] || {};
    const tech = ['HTML/CSS', 'JavaScript', ...(m.tech || []).filter((t) => t !== '알림 연동'), ...(TECH_OVERRIDES[slug] || [])];
    projects.push({
      id: slug,
      category,
      title: name,
      tagline: override.tagline || cleanTagline(m.title || '', name),
      description: override.description || m.description || '',
      sections: (m.headings || []).filter((h) => h !== name && !/로그인|오류|접수되었|감사합니다/.test(h)).slice(0, 8),
      features: buildFeatures(category, m),
      tech: [...new Set(tech)],
      images: m.images.map((f) => base + f),
      mobile: m.mobile ? base + m.mobile : null,
    });
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify({ categories: CATEGORIES, projects }, null, 2));
  console.log(`projects: ${projects.length}`);
  if (missing.length) console.log('캡처 없음:', missing.join(', '));
}

main();
