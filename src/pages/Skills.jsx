import React from 'react';
import './Skills.css';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Vue.js', level: 70 },
        { name: 'Next.js', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'Django', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'Vite', level: 85 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-category">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <span className="btn close"></span>
                    <span className="btn minimize"></span>
                    <span className="btn maximize"></span>
                  </div>
                  <div className="terminal-title">{category.title.toLowerCase()}.js</div>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="prompt">$</span>
                    <span className="command">ls -la {category.title.toLowerCase()}/</span>
                  </div>
                  <div className="terminal-output">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

export default Skills;
