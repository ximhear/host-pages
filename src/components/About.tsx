import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">회사소개</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="about-main">
              <h3>혁신적인 기술로 미래를 선도합니다</h3>
              <p>
                GPMobile은 2007년 설립 이래 모바일 애플리케이션 개발 분야에서
                탁월한 전문성을 쌓아왔습니다. 삼성전자, 안랩, 인프라웨어 등
                대한민국을 대표하는 기업들과 함께 성장해왔으며,
                글로벌 시장에서도 그 역량을 인정받고 있습니다.
              </p>
              <p>
                최근에는 축적된 기술력을 바탕으로 인공지능과 빅데이터 분석을
                활용한 주식 정보 분석 및 예측 서비스를 새롭게 시작하여,
                금융 기술(FinTech) 분야로 사업 영역을 확장하고 있습니다.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">17+</div>
                <div className="stat-label">년 이상의 경험</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">글로벌 프로젝트</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">주요 파트너사</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
