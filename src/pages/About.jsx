import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn close"></span>
                  <span className="btn minimize"></span>
                  <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">about.txt</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">cat about.txt</span>
                </div>
                <div className="terminal-output">
                  <p>
                    안녕하세요! 저는 <span className="highlight">남현우</span>입니다.
                  </p>
                  <p>
                    웹 개발에 열정을 가지고 있으며, 사용자 중심의 
                    <span className="highlight"> 혁신적인 솔루션</span>을 만드는 것을 목표로 합니다.
                  </p>
                  <p>
                    <span className="highlight">React, Node.js, Python</span> 등의 
                    최신 기술 스택을 활용하여 풀스택 웹 애플리케이션을 개발합니다.
                  </p>
                  <p>
                    코드의 <span className="highlight">가독성과 유지보수성</span>을 중시하며,
                    팀워크를 통한 협업을 중요하게 생각합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Learning Mode</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
