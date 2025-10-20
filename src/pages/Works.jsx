import React, { useEffect, useRef } from 'react';
import './Works.css';

const Works = () => {
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

  const works = [
    {
      id: 1,
      company: "회사명",
      period: "2023.01 - 2024.01",
      title: "프로젝트 제목",
      description: "프로젝트 설명이 여기에 들어갑니다. 주요 업무와 성과를 간략하게 설명합니다.",
      technologies: ["React", "Node.js", "AWS", "Docker"],
      achievements: [
        "주요 성과 1",
        "주요 성과 2", 
        "주요 성과 3"
      ]
    },
    {
      id: 2,
      company: "회사명",
      period: "2022.01 - 2023.01",
      title: "프로젝트 제목",
      description: "프로젝트 설명이 여기에 들어갑니다. 주요 업무와 성과를 간략하게 설명합니다.",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis"],
      achievements: [
        "주요 성과 1",
        "주요 성과 2",
        "주요 성과 3"
      ]
    },
    {
      id: 3,
      company: "회사명",
      period: "2021.01 - 2022.01",
      title: "프로젝트 제목",
      description: "프로젝트 설명이 여기에 들어갑니다. 주요 업무와 성과를 간략하게 설명합니다.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      achievements: [
        "주요 성과 1",
        "주요 성과 2",
        "주요 성과 3"
      ]
    }
  ];

  return (
    <section className="works" id="works" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Works</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="works-content">
          {works.map((work, index) => (
            <div key={work.id} className="work-item">
              <div className="work-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="work-content">
                <div className="work-header">
                  <div className="work-company">{work.company}</div>
                  <div className="work-period">{work.period}</div>
                </div>
                <h3 className="work-title">{work.title}</h3>
                <p className="work-description">{work.description}</p>
                
                <div className="work-technologies">
                  {work.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="work-achievements">
                  <h4>주요 성과</h4>
                  <ul>
                    {work.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
