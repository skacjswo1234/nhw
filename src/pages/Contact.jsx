import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'namhyunwoo@example.com',
      link: 'mailto:namhyunwoo@example.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+82 10-1234-5678',
      link: 'tel:+821012345678'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Seoul, South Korea',
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/namhyunwoo',
      link: 'https://linkedin.com/in/namhyunwoo'
    }
  ];

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn close"></span>
                  <span className="btn minimize"></span>
                  <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">contact.txt</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">cat contact.txt</span>
                </div>
                <div className="terminal-output">
                  <div className="contact-highlight">
                    <p className="contact-intro">
                      <span className="highlight-text">💼 채용 담당자님, 안녕하세요!</span>
                    </p>
                    <p className="contact-description">
                      프론트엔드 개발자 남현우입니다.<br/>
                      <strong>React, JavaScript, TypeScript</strong> 전문 개발자로<br/>
                      <span className="accent-text">즉시 투입 가능</span>하며,<br/>
                      <span className="accent-text">원격/온사이트</span> 모두 가능합니다.
                    </p>
                  </div>
                  
                  <div className="contact-items">
                    {contactInfo.map((item, index) => (
                      <a key={index} href={item.link} className="contact-item">
                        <span className="contact-icon">{item.icon}</span>
                        <div className="contact-details">
                          <span className="contact-label">{item.label}</span>
                          <span className="contact-value">{item.value}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  <div className="contact-cta">
                    <p className="cta-text">
                      <span className="cta-icon">🚀</span>
                      <strong>지금 바로 연락주세요!</strong><br/>
                      <span className="cta-sub">면접 일정 조율 가능</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn close"></span>
                  <span className="btn minimize"></span>
                  <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">send_message.js</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">node send_message.js</span>
                </div>
                <form onSubmit={handleSubmit} className="contact-form-content">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    <span className="btn-icon">🚀</span>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
