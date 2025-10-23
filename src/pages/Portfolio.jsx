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
    url: 'https://brandiup.it.kr'
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
    url: 'https://mostpumgyeok.com/'
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
    url: 'https://소로이아크릴.com/'
  }
];

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState(null);
  const openModal = (item) => setActiveItem(item);
  const closeModal = () => setActiveItem(null);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <div className="section-line"></div>
        </div>

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
                <a className="site-link" href={activeItem.url} target="_blank" rel="noreferrer">
                  사이트 방문하기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
