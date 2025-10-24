import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/skacjswo1234',
      icon: '🐙'
    },
    {
      name: 'Email',
      url: 'mailto:9078807@naver.com',
      icon: '📧'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn close"></span>
                  <span className="btn minimize"></span>
                  <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">footer.log</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">cat footer.log</span>
                </div>
                <div className="terminal-output">
                  <p className="footer-text">
                    Built with <span className="highlight">React</span> and <span className="highlight">Vite</span>
                    <br />
                    Designed with <span className="highlight">💚</span> by NAM HYUNWOO
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p className="copyright">
            © {currentYear} NAM HYUNWOO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
