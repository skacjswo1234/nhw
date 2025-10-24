import React, { useState } from 'react';
import './Portfolio.css';

// Import images from proto folders
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

const sampleItems = [
  {
    id: 1,
    title: 'IT 프로젝트',
    subtitle: '웹 개발 · 반응형 · UI/UX',
    mainImage: itMain,
    detailImages: [
      itDetail1,
      itDetail2,
      itDetail3,
      itDetail4,
      itDetail5,
    ],
    url: 'https://brandiup.it.kr',
    notionUrl: 'https://www.notion.so/WebCraft-Pro-1c691b9aaa654c8d9722013f8fe7b8ca?source=copy_link'
  },
  {
    id: 2,
    title: '부동산 플랫폼',
    subtitle: '부동산 · 매물 관리 · 데이터 시각화',
    mainImage: budongMain,
    detailImages: [
      budongDetail1,
      budongDetail2,
      budongDetail3,
      budongDetail4,
      budongDetail5,
      budongDetail6,
      budongDetail7,
      budongDetail8,
      budongP,
    ],
    url: 'https://mostpumgyeok.com/',
    notionUrl: 'https://www.notion.so/ada42bbf76064322894101257390851a?source=copy_link'
  },
  {
    id: 3,
    title: '아크릴 쇼핑몰',
    subtitle: '쇼핑몰 · 제품 관리 · 주문 시스템',
    mainImage: acrillMain,
    detailImages: [
      acrillDetail1,
      acrillDetail2,
      acrillDetail3,
      acrillDetail4,
      acrillDetail5,
      acrillDetail6,
      acrillDetail7,
      acrillDetail8,
      acrillP,
    ],
    url: 'https://소로이아크릴.com/',
    notionUrl: 'https://www.notion.so/0859e9122e1c447a9b14797c65e3c343?source=copy_link'
  },
  {
    id: 4,
    title: '헌옷하라',
    subtitle: '의류 재활용 · 기부 플랫폼 · 환경 보호',
    mainImage: haraMain,
    detailImages: [
      haraDetail1,
      haraDetail2,
      haraDetail3,
      haraDetail4,
      haraDetail5,
      haraDetail6,
      haraDetail7,
      haraP,
    ],
    url: 'https://hara38.com',
    notionUrl: 'https://www.notion.so/bb4b580712164905b55acf0402d49ab2?source=copy_link'
  },
  {
    id: 5,
    title: '보험여기어때',
    subtitle: '보험 비교 · 맞춤 추천 · 간편 상담',
    mainImage: cancerMain,
    detailImages: [
      cancerDetail1,
      cancerDetail2,
      cancerDetail3,
      cancerDetail4,
      cancerDetail5,
      cancerP,
    ],
    url: 'https://보험여기어때.com',
    notionUrl: 'https://www.notion.so/2798a0e5c30f4ca0a379774103adb717?source=copy_link'
  },
  {
    id: 6,
    title: '신세계미디어',
    subtitle: '미디어 · 콘텐츠 · 디지털 마케팅',
    mainImage: mideaMain,
    detailImages: [
      mideaDetail1,
      mideaDetail2,
      mideaDetail3,
      mideaDetail4,
      mideaDetail5,
      mideaDetail6,
      mideaDetail7,
      mideaP,
    ],
    url: 'https://shinsegaemedia1.com',
    notionUrl: 'https://www.notion.so/cb9f3f62aeb14838b7abf28da167acf6?source=copy_link'
  }
];

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState(null);
  const openModal = (item) => setActiveItem(item);
  const closeModal = () => setActiveItem(null);

  return (
    <section className="portfolio" id="portfolio">
     
      <div className="container">
       
          <h2 className="section-title">개인프로젝트 활동</h2>
          <div className="section-line"></div>
      

        <div className="portfolio-grid">
          {sampleItems.map((item) => (
            <div key={item.id} className="portfolio-card" onClick={() => openModal(item)}>
              <div className="portfolio-thumb">
                <img src={item.mainImage} alt={item.title} />
              </div>
              <div className="portfolio-meta">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="portfolio-modal" role="dialog" aria-modal="true">
          <div className="modal-backdrop" onClick={closeModal} />
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="close">✕</button>
            <div className="modal-body">
              <div className="modal-gallery">
                {activeItem.detailImages.map((src, idx) => (
                  <div className="gallery-item" key={idx}>
                    <img src={src} alt={`${activeItem.title} 상세 ${idx + 1}`} />
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <div className="modal-links">
                  <a className="site-link" href={activeItem.url} target="_blank" rel="noreferrer">
                    사이트 방문하기 →
                  </a>
                  {activeItem.notionUrl && (
                    <a className="notion-link" href={activeItem.notionUrl} target="_blank" rel="noreferrer">
                      📝 노션에서 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
