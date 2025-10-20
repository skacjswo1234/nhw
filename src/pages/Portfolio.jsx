import React, { useState } from 'react';
import './Portfolio.css';

// Import images from proto/it and proto/budong folders
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
import budongP from '../proto/budong/budong_p.png';

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
    notion: 'https://www.notion.so/'
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
    ],
    notion: 'https://www.notion.so/'
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
                <a className="notion-link" href={activeItem.notion} target="_blank" rel="noreferrer">
                  Notion으로 보기 →
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
