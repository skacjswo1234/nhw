import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React와 Node.js를 활용한 풀스택 전자상거래 플랫폼. 실시간 결제 시스템과 관리자 대시보드 포함.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '팀 협업을 위한 실시간 태스크 관리 애플리케이션. WebSocket을 통한 실시간 업데이트 지원.',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      status: 'In Progress',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보와 예보를 제공하는 대시보드. 다양한 API 통합 및 데이터 시각화.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: '개인 포트폴리오 웹사이트. 모던한 디자인과 반응형 레이아웃으로 구현.',
      technologies: ['React', 'Vite', 'CSS3', 'Framer Motion'],
      status: 'Completed',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="projects-content">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <span className="btn close"></span>
                    <span className="btn minimize"></span>
                    <span className="btn maximize"></span>
                  </div>
                  <div className="terminal-title">project-{project.id}.js</div>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="prompt">$</span>
                    <span className="command">cat project-{project.id}.json</span>
                  </div>
                  <div className="terminal-output">
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-tech">
                        <span className="tech-label">Technologies:</span>
                        <div className="tech-tags">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="project-status">
                        <span className="status-label">Status:</span>
                        <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <div className="project-links">
                        <a href={project.github} className="project-link">
                          <span className="link-icon">📁</span>
                          GitHub
                        </a>
                        <a href={project.demo} className="project-link">
                          <span className="link-icon">🚀</span>
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
