import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import './Portfolio.css';
import { categories, projects } from '../data/projects';

const PREVIEW_COUNT = 6;
const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));
const countBy = projects.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), {});

const matchesQuery = (p, q) => {
  if (!q) return true;
  const hay = [p.title, p.tagline, p.description, categoryMap[p.category]?.label, ...(p.tech || [])]
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
};

const ProjectCard = ({ project, index, onOpen }) => {
  const cat = categoryMap[project.category];
  return (
    <button
      type="button"
      className="pf-card"
      style={{ '--cat': cat.color, '--i': index }}
      onClick={() => onOpen(project)}
    >
      <div className="pf-card-visual">
        <div className="pf-browser">
          <div className="pf-browser-bar">
            <span /><span /><span />
            <em>{project.id}</em>
          </div>
          <div className="pf-browser-screen">
            <img src={project.images[0]} alt={project.title} loading="lazy" decoding="async" />
          </div>
        </div>
        {project.mobile && (
          <div className="pf-card-phone">
            <img src={project.mobile} alt="" loading="lazy" decoding="async" />
          </div>
        )}
        <div className="pf-card-hover">
          <span>자세히 보기</span>
          <small>스크린샷 {project.images.length + (project.mobile ? 1 : 0)}장</small>
        </div>
        {project.featured && <span className="pf-badge-featured">★ 대표 프로젝트</span>}
      </div>
      <div className="pf-card-body">
        <span className="pf-cat-chip">{cat.icon} {cat.label}</span>
        <h4>{project.title}</h4>
        <p>{project.tagline || project.description}</p>
      </div>
    </button>
  );
};

const ProjectModal = ({ project, position, total, onClose, onPrev, onNext }) => {
  const cat = categoryMap[project.category];
  const [view, setView] = useState('pc');
  const [index, setIndex] = useState(0);
  const images = project.images;

  useEffect(() => {
    setView('pc');
    setIndex(0);
  }, [project]);

  const step = useCallback((dir) => setIndex((i) => (i + dir + images.length) % images.length), [images.length]);

  useEffect(() => {
    const browsingImages = view === 'pc' && images.length > 1;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') {
        if (browsingImages) step(1);
        else onNext();
      } else if (e.key === 'ArrowLeft') {
        if (browsingImages) step(-1);
        else onPrev();
      }
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNext, onPrev, step, view, images.length]);

  return createPortal(
    <div className="pf-modal" role="dialog" aria-modal="true" aria-label={project.title} style={{ '--cat': cat.color }}>
      <div className="pf-modal-backdrop" onClick={onClose} />
      <div className="pf-modal-panel">
        <button className="pf-modal-close" onClick={onClose} aria-label="닫기">✕</button>

        <div className="pf-viewer">
          <div className="pf-viewer-top">
            <div className="pf-toggle">
              <button className={view === 'pc' ? 'on' : ''} onClick={() => setView('pc')}>🖥 PC 화면</button>
              {project.mobile && (
                <button className={view === 'mobile' ? 'on' : ''} onClick={() => setView('mobile')}>📱 모바일</button>
              )}
            </div>
            {view === 'pc' && <span className="pf-counter">{index + 1} / {images.length}</span>}
          </div>

          {view === 'pc' ? (
            <>
              <div className="pf-stage">
                <div className="pf-browser pf-browser-lg">
                  <div className="pf-browser-bar">
                    <span /><span /><span />
                    <em>{project.url ? project.url.replace(/^https?:\/\//, '') : `${project.id} · 화면 ${index + 1}`}</em>
                  </div>
                  <div className="pf-browser-screen">
                    <img key={images[index]} src={images[index]} alt={`${project.title} 화면 ${index + 1}`} />
                  </div>
                </div>
                {images.length > 1 && (
                  <>
                    <button className="pf-nav pf-nav-prev" onClick={() => step(-1)} aria-label="이전 화면">‹</button>
                    <button className="pf-nav pf-nav-next" onClick={() => step(1)} aria-label="다음 화면">›</button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="pf-thumbs">
                  {images.map((src, i) => (
                    <button key={src} className={i === index ? 'on' : ''} onClick={() => setIndex(i)} aria-label={`화면 ${i + 1}`}>
                      <img src={src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="pf-stage pf-stage-mobile">
              <div className="pf-phone">
                <div className="pf-phone-notch" />
                <img src={project.mobile} alt={`${project.title} 모바일 화면`} />
              </div>
              <div className="pf-phone-side">
                <img src={images[0]} alt="" />
                <p>PC와 모바일 모두<br />최적화된 반응형 화면</p>
              </div>
            </div>
          )}
        </div>

        <aside className="pf-info">
          <span className="pf-cat-chip">{cat.icon} {cat.label}</span>
          <h3>{project.title}</h3>
          {project.tagline && <p className="pf-info-tagline">{project.tagline}</p>}
          {project.description && <p className="pf-info-desc">{project.description}</p>}

          <div className="pf-info-block">
            <h5>이런 걸 만들었어요</h5>
            <ul className="pf-feature-list">
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>

          {project.sections?.length > 0 && (
            <div className="pf-info-block">
              <h5>페이지 구성</h5>
              <ol className="pf-section-list">
                {project.sections.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          )}

          <div className="pf-info-block">
            <h5>사용 기술</h5>
            <div className="pf-tech">
              {project.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>

          {(project.url || project.notionUrl) && (
            <div className="pf-links">
              {project.url && <a className="pf-link-site" href={project.url} target="_blank" rel="noreferrer">사이트 방문하기 →</a>}
              {project.notionUrl && <a className="pf-link-notion" href={project.notionUrl} target="_blank" rel="noreferrer">📝 노션에서 보기</a>}
            </div>
          )}

          <div className="pf-modal-pager">
            <button onClick={onPrev}>← 이전 프로젝트</button>
            <span>{position} / {total}</span>
            <button onClick={onNext}>다음 프로젝트 →</button>
          </div>
        </aside>
      </div>
    </div>,
    document.body,
  );
};

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({});
  const [openId, setOpenId] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(70);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return undefined;
    const update = () => setHeaderHeight(header.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () => projects.filter((p) => (activeCat === 'all' || p.category === activeCat) && matchesQuery(p, q)),
    [activeCat, q],
  );

  const groups = useMemo(
    () => categories
      .map((c) => ({ ...c, items: visible.filter((p) => p.category === c.id) }))
      .filter((g) => g.items.length),
    [visible],
  );

  const openIndex = visible.findIndex((p) => p.id === openId);
  const openProject = openIndex >= 0 ? visible[openIndex] : null;
  const close = useCallback(() => setOpenId(null), []);
  const goPrev = useCallback(() => setOpenId(visible[(openIndex - 1 + visible.length) % visible.length].id), [visible, openIndex]);
  const goNext = useCallback(() => setOpenId(visible[(openIndex + 1) % visible.length].id), [visible, openIndex]);
  const open = useCallback((p) => setOpenId(p.id), []);

  const selectCategory = (id) => {
    setActiveCat(id);
    document.getElementById('pf-nav-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeInfo = categoryMap[activeCat];
  const groupedView = activeCat === 'all' && !q;

  return (
    <section className="pf" id="portfolio" style={{ '--pf-sticky-top': `${headerHeight}px` }}>
      <div className="pf-bg" aria-hidden="true">
        <span className="pf-orb pf-orb-1" />
        <span className="pf-orb pf-orb-2" />
        <span className="pf-orb pf-orb-3" />
        <div className="pf-grid-pattern" />
      </div>

      <div className="pf-container">
        <header className="pf-head">
          <span className="pf-eyebrow">PERSONAL PROJECTS</span>
          <h2 className="pf-title">개인프로젝트 활동</h2>
          <p className="pf-sub">기획부터 디자인, 퍼블리싱, 개발까지 직접 만든 프로젝트들을 업종별로 모았습니다.</p>
          <div className="pf-stats">
            <div><strong>{projects.length}</strong><span>프로젝트</span></div>
            <div><strong>{Object.keys(countBy).length}</strong><span>업종</span></div>
            <div><strong>100%</strong><span>반응형</span></div>
          </div>
        </header>

        <div id="pf-nav-anchor" />
        <div className="pf-toolbar">
          <nav className="pf-tabs" aria-label="업종 카테고리">
            <button className={activeCat === 'all' ? 'on' : ''} style={{ '--cat': '#00ff88' }} onClick={() => selectCategory('all')}>
              🌐 전체 <b>{projects.length}</b>
            </button>
            {categories.filter((c) => countBy[c.id]).map((c) => (
              <button key={c.id} className={activeCat === c.id ? 'on' : ''} style={{ '--cat': c.color }} onClick={() => selectCategory(c.id)}>
                {c.icon} {c.label} <b>{countBy[c.id] || 0}</b>
              </button>
            ))}
          </nav>
          <label className="pf-search">
            <span aria-hidden="true">🔍</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="프로젝트 · 업종 · 기술 검색" />
            {query && <button onClick={() => setQuery('')} aria-label="검색어 지우기">✕</button>}
          </label>
        </div>

        {activeInfo && !q && (
          <div className="pf-cat-hero" style={{ '--cat': activeInfo.color }} key={activeInfo.id}>
            <span className="pf-cat-hero-icon">{activeInfo.icon}</span>
            <div>
              <h3>{activeInfo.label}</h3>
              <p>{activeInfo.desc}</p>
            </div>
            <strong>{visible.length}<small>개 프로젝트</small></strong>
          </div>
        )}

        {visible.length === 0 && <p className="pf-empty">"{query}"에 해당하는 프로젝트가 없습니다.</p>}

        {groupedView ? (
          groups.map((g) => {
            const isOpen = expanded[g.id];
            const items = isOpen ? g.items : g.items.slice(0, PREVIEW_COUNT);
            return (
              <div className="pf-group" key={g.id} style={{ '--cat': g.color }}>
                <div className="pf-group-head">
                  <span className="pf-group-icon">{g.icon}</span>
                  <div>
                    <h3>{g.label} <em>{g.items.length}</em></h3>
                    <p>{g.desc}</p>
                  </div>
                  <button className="pf-group-more" onClick={() => selectCategory(g.id)}>업종 전체보기 →</button>
                </div>
                <div className="pf-grid">
                  {items.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={open} />)}
                </div>
                {g.items.length > PREVIEW_COUNT && (
                  <button className="pf-expand" onClick={() => setExpanded((s) => ({ ...s, [g.id]: !isOpen }))}>
                    {isOpen ? '접기 ▲' : `${g.items.length - PREVIEW_COUNT}개 더보기 ▼`}
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <div className="pf-grid" key={activeCat + q}>
            {visible.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={open} />)}
          </div>
        )}
      </div>

      {openProject && (
        <ProjectModal
          project={openProject}
          position={openIndex + 1}
          total={visible.length}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
};

export default Portfolio;
