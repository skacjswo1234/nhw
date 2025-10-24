import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // 현재 활성 섹션 감지
      const sections = ['home', 'works', 'portfolio'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Works' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* 터미널 스타일 상단바 */}
        <div className="terminal-bar">
          <div className="terminal-controls">
            <div className="control-btn close"></div>
            <div className="control-btn minimize"></div>
            <div className="control-btn maximize"></div>
          </div>
          <div className="terminal-title">NAM HYUNWOO - Portfolio Terminal</div>
        </div>
        
        {/* 네비게이션 */}
        <nav className="nav">
          <div className="nav-left">
            <button 
              className="logo" 
              onClick={() => scrollToSection('home')}
            >
              <span className="logo-text">NAM HYUNWOO</span>
              <span className="logo-cursor">_</span>
            </button>
          </div>
          
          <div className="nav-right">
            <div className="nav-menu">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* 모바일 메뉴 버튼 */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
        
        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mobile-nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
