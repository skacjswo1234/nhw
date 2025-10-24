import React from 'react';
import aboutImg from '../assets/nhw.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          {/* 좌측: 프로필 이미지 */}
          <div className="about-left">
            <div className="profile-card">
              <img 
                src={aboutImg} 
                alt="NAM HYUNWOO 프로필"
              />
            </div>
          </div>
          
          {/* 우측: 자기소개 내용 */}
          <div className="about-right">
            <div className="about-header">
              <h2>About Me</h2>
            </div>
            
            <div className="about-info">
              <h3>남현우</h3>
              <p className="about-title">풀스택 개발자</p>
              <p className="about-subtitle">경험과 데이터로 움직이는 개발자</p>
            </div>

            <div className="about-description">
              <p>
                <strong>전국 30개 이상 딜러사가 사용하는 정비/부품 관리 시스템</strong>을 개발 및 운영하며,
                Java/Spring 기반의 복잡한 비즈니스 로직 구현과 SAP 연동을 통한 실시간 회계 전표 처리를 담당했습니다.
              </p>
              
              <p>
                <strong>Docker 기반 배포 환경 구축 및 AWS 클라우드 인프라 관리</strong> 경험을 바탕으로,
                벤츠트럭과 만트럭 정비시스템의 안정적인 운영을 책임지고 있으며,
                SAP 연동 오류를 월평균 5건 이하로 유지하는 안정성을 달성했습니다.
              </p>
              
              <p>
                LG전자 Smart TV 앱 검수 시스템과 LG U+ 통신업계 정산 시스템 개발을 통해
                <strong>1원의 오차도 허용되지 않는 금융 로직</strong>과 대규모 데이터 처리 경험을 쌓았으며,
                기획부터 배포까지 전 과정을 주도적으로 수행합니다.
              </p>
            </div>

            <div className="about-skills">
              <div className="skill-tag">Java</div>
              <div className="skill-tag">Spring Boot</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">TypeScript</div>
              <div className="skill-tag">Python</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">MySQL</div>
              <div className="skill-tag">PostgreSQL</div>
              <div className="skill-tag">HTML5</div>
              <div className="skill-tag">CSS3</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">AWS</div>
              <div className="skill-tag">Cursor AI</div>
              <div className="skill-tag">Claude Code</div>
              <div className="skill-tag">Cloudflare</div>
              <div className="skill-tag">Supabase</div>
            </div>
            
            {/* Skills Marquee Section */}
            <div className="skills-marquee">
              <div className="marquee-track">
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="AWS" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/cursor.svg" alt="Cursor AI" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/anthropic.svg" alt="Claude Code" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/000000/cloudflare.png" alt="Cloudflare" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/000000/supabase.png" alt="Supabase" />
                </div>
                {/* 중복으로 무한 스크롤 효과 */}
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="AWS" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/cursor.svg" alt="Cursor AI" />
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/anthropic.svg" alt="Claude Code" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/000000/cloudflare.png" alt="Cloudflare" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/000000/supabase.png" alt="Supabase" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;