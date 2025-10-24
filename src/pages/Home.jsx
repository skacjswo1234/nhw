import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

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
              <div className="nav-item" onClick={() => scrollToSection('portfolio')}>
                <span className="nav-icon">🚀</span>
                <span className="nav-text">포트폴리오</span>
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
                    <span className="output">d-----        2024-01-15  10:30 AM                <span className="dir">works</span></span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">d-----        2024-01-15  10:30 AM                <span className="dir">portfolio</span></span>
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

    </div>
  );
};

export default Home;
