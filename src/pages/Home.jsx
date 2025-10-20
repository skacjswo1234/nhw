import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import aboutImg from '../assets/aboutImg2.png';

const Home = () => {
  const heroRef = useRef(null);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState('');

  const commands = [
    { cmd: 'whoami', output: 'Nam Hyunwoo - Full Stack Developer' },
    { cmd: 'pwd', output: '/home/namhyunwoo/portfolio' },
    { cmd: 'ls -la', output: 'about/  skills/  projects/  contact/  README.md' },
    { cmd: 'cat README.md', output: 'Welcome to my portfolio terminal!' },
    { cmd: 'npm start', output: 'Starting development server...' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const typeCommand = () => {
      if (currentCommand < commands.length) {
        setIsTyping(true);
        const command = commands[currentCommand];
        let output = '';
        let i = 0;

        const typeInterval = setInterval(() => {
          if (i < command.output.length) {
            output += command.output[i];
            setTerminalOutput(prev => 
              prev + (i === 0 ? `$ ${command.cmd}\n> ${output}` : output[output.length - 1])
            );
            i++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
            setTerminalOutput(prev => prev + '\n\n');
            setTimeout(() => {
              setCurrentCommand(prev => prev + 1);
            }, 1000);
          }
        }, 50);
      }
    };

    if (!isTyping) {
      typeCommand();
    }
  }, [currentCommand, isTyping]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" id="home" ref={heroRef}>
        <div className="hero-content">
          {/* 좌측: 애니메이션 네비게이션 */}
          <div className="hero-left">
            <div className="greeting">
              <h1>NAM HYUNWOO</h1>
              <p className="subtitle">Full Stack Developer</p>
              <p className="description">백엔드와 프론트엔드를 모두 다루는 웹 개발자입니다</p>
            </div>
            
            <div className="navigation-menu">
              <div className="nav-item" onClick={() => scrollToSection('about')}>
                <span className="nav-icon">👨‍💻</span>
                <span className="nav-text">About Me</span>
                <span className="nav-arrow">→</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('works')}>
                <span className="nav-icon">💼</span>
                <span className="nav-text">Works</span>
                <span className="nav-arrow">→</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('skills')}>
                <span className="nav-icon">⚡</span>
                <span className="nav-text">Skills</span>
                <span className="nav-arrow">→</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('projects')}>
                <span className="nav-icon">🚀</span>
                <span className="nav-text">Projects</span>
                <span className="nav-arrow">→</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('contact')}>
                <span className="nav-icon">📧</span>
                <span className="nav-text">Contact</span>
                <span className="nav-arrow">→</span>
              </div>
            </div>
          </div>

          {/* 우측: 특수 효과 커맨드 화면 */}
          <div className="hero-right">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <div className="control-btn close"></div>
                  <div className="control-btn minimize"></div>
                  <div className="control-btn maximize"></div>
                </div>
                <div className="terminal-title">Windows PowerShell</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-output">
                  <div className="terminal-line">
                    <span className="prompt">PS</span>
                    <span className="path">C:\Users\namhyunwoo\portfolio</span>
                    <span className="command">Get-ChildItem</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">디렉터리: C:\Users\namhyunwoo\portfolio</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">모드                 마지막 쓰기 시간         길이 이름</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">----                 -------------         ------ ----</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">d-----        2024-01-15  10:30 AM                <span className="dir">about</span></span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">d-----        2024-01-15  10:30 AM                <span className="dir">skills</span></span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">d-----        2024-01-15  10:30 AM                <span className="dir">projects</span></span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">d-----        2024-01-15  10:30 AM                <span className="dir">contact</span></span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">-a----        2024-01-15  10:30 AM           1234 <span className="file">README.md</span></span>
                  </div>
                  <br />
                  <div className="terminal-line">
                    <span className="prompt">PS</span>
                    <span className="path">C:\Users\namhyunwoo\portfolio</span>
                    <span className="command">Get-Content README.md</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output"># NAM HYUNWOO - 풀스택 개발자</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">포트폴리오에 오신 것을 환영합니다! 저는 열정적인 개발자입니다</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">Java, Spring, React, 그리고 최신 웹 기술을 전문으로 합니다.</span>
                  </div>
                  <br />
                  <div className="terminal-line">
                    <span className="prompt">PS</span>
                    <span className="path">C:\Users\namhyunwoo\portfolio</span>
                    <span className="command">npm start</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">개발 서버를 시작하는 중...</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">로컬:   http://localhost:3000/</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">네트워크: http://192.168.1.100:3000/</span>
                  </div>
                  <br />
                  <div className="terminal-line">
                    <span className="prompt">PS</span>
                    <span className="path">C:\Users\namhyunwoo\portfolio</span>
                    <span className="cursor">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section" id="about">
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
                  Java / Spring Boot / React 등으로 <strong>B2C·B2B 및 자사 내부 시스템을 다년간 운영</strong>했고, 
                  REST API 설계 · 구현부터 유지보수까지 경험했습니다.
                </p>
                
                <p>
                  Python(FastAPI) · Node.js를 활용해 사용자 중심 앱을 구축하고, 
                  AWS · Redis · Docker 기반 <strong>CI/CD 파이프라인 설계 및 배포 자동화까지 담당</strong>했습니다.
                </p>
                
                <p>
                  기획 단계부터 데이터 모델링, API 설계, 운영 및 모니터링까지 
                  <strong>엔드투엔드로 프로젝트를 총괄</strong>하며, 
                  디자이너 없이도 와이어프레임 · 반응형 · 접근성을 고려해 UI/UX를 빠르게 설계·구현합니다.
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
    </div>
  );
};

export default Home;
