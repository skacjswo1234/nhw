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
      company: "벤츠트럭(주) - 오토포커스",
      period: "2025.01 - 현재",
      title: "DTK 정비시스템 개발",
      role: "주임 / 개발",
      description: "벤츠트럭 딜러사를 위한 정비/부품 관리 시스템 개발. Docker 기반 배포 환경 구축 및 AWS 클라우드 인프라 관리. 만트럭 시스템 경험을 바탕으로 더욱 안정적이고 효율적인 시스템 구축 진행 중.",
      technologies: ["Java", "Spring", "MyBatis", "SAP 연동", "Docker", "AWS EC2", "MariaDB", "Apache", "Chart.js", "DB 암호화"],
      achievements: [
        "클라우드 기반 배포 환경 구축 완료",
        "Docker 컨테이너화를 통한 배포 프로세스 개선",
        "SAP 연동 안정성 향상 작업 진행 중"
      ]
    },
    {
      id: 2,
      company: "만트럭코리아(주) - 오토포커스",
      period: "2023.02 - 2024.12",
      title: "DMS 정비시스템 개발 및 운영",
      role: "주임 / 개발",
      description: "전국 30개 이상 딜러사가 사용하는 정비/부품 관리 시스템의 핵심 모듈 개발 및 운영. SAP 연동을 통한 실시간 회계 전표 처리, 복잡한 회계 로직 구현 및 데이터 무결성 보장. 딜러사 업무 프로세스 분석 및 시스템 설계.",
      technologies: ["Java", "Spring", "MyBatis", "SAP 연동", "Docker", "AWS EC2", "Oracle", "Apache", "Chart.js", "DB 암호화"],
      achievements: [
        "전국 30개 딜러사 대상 시스템 안정 운영",
        "SAP 연동 오류 건수 월평균 5건 이하 유지",
        "정비 접수부터 완료까지 처리 시간 개선",
        "선수금 조정 및 반제 처리 등 복잡한 회계 로직 구현"
      ]
    },
    {
      id: 3,
      company: "LG전자 - 에이블짐정보",
      period: "2022.06 - 2022.09",
      title: "Seller Lounge 개편 프로젝트",
      role: "사원 / SI 개발",
      description: "LG Smart TV App의 검수 시스템과 관리자 화면 개발. 앱 등록부터 승인까지의 전체 관리 프로세스 구현. 검수 담당자를 위한 직관적인 UI/UX 설계 및 스케줄 관리 기능 개발.",
      technologies: ["JSP", "Java", "Oracle", "OrangeDB", "MySQL", "jQuery", "JavaScript", "JIRA", "DA#", "SVN", "LG Native Cloud"],
      achievements: [
        "Smart TV 앱 승인 프로세스 체계화",
        "앱 관리 화면 구현을 통한 관리자 업무 효율성 개선",
        "검수 스케줄 및 상태별 추적 기능 구현",
        "사용자 친화적인 인터페이스 설계 및 구현"
      ]
    },
    {
      id: 4,
      company: "LG U+ - 에이블짐정보",
      period: "2021.09 - 2022.05",
      title: "정산 고도화 프로젝트",
      role: "사원 / SI 개발",
      description: "통신업계 정산 시스템 고도화 프로젝트 개발. 레거시 시스템의 복잡한 정산 로직 분석 및 개선. 고객 요금 정산 화면 개발 및 파트너사별 수수료 정산 로직 구현. 1원의 오차도 허용되지 않는 금액 산출 정확성 확보.",
      technologies: ["JSP", "Java", "Oracle", "MyBatis", "WebSquare", "Oz Report", "jQuery", "JavaScript", "Git"],
      achievements: [
        "월 정산 처리 안정성 확보",
        "기존 수작업 엑셀 업무의 자동화 구현",
        "정산 오류 추적 가능한 로그 시스템 구축",
        "월별/일별 정산 현황 차트 시각화 구현",
        "복잡한 반올림 로직 구현으로 시스템 간 금액 불일치 방지"
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
                {work.role && <div className="work-role">{work.role}</div>}
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
