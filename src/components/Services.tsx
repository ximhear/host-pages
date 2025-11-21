import React from 'react'
import './Services.css'

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">사업분야</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>모바일 앱 개발</h3>
            <p className="service-description">
              iOS, Android, 크로스플랫폼 앱 개발 전문
            </p>
            <ul className="service-list">
              <li>iOS (iPhone/iPad) 앱 개발</li>
              <li>Android 네이티브 앱 개발</li>
              <li>React Native / Flutter 개발</li>
              <li>BlackBerry 앱 개발</li>
              <li>Linux Kernel 기반 개발</li>
            </ul>
            <div className="service-badge">17년 경력</div>
          </div>

          <div className="service-card featured">
            <div className="service-icon">📊</div>
            <h3>AI 주식 정보 & 예측</h3>
            <p className="service-description">
              인공지능 기반 주식 시장 분석 및 예측 서비스
            </p>
            <ul className="service-list">
              <li>실시간 주식 시세 정보 제공</li>
              <li>AI 기반 주가 예측 모델</li>
              <li>빅데이터 분석 및 시장 트렌드 분석</li>
              <li>맞춤형 투자 포트폴리오 추천</li>
              <li>리스크 관리 및 알림 서비스</li>
            </ul>
            <div className="service-badge new">NEW</div>
          </div>

          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>시스템 개발</h3>
            <p className="service-description">
              공공 및 민간 부문 맞춤형 시스템 구축
            </p>
            <ul className="service-list">
              <li>공공부문 시스템 개발</li>
              <li>민간기업 솔루션 개발</li>
              <li>웹/모바일 통합 플랫폼</li>
              <li>클라우드 기반 서비스</li>
              <li>시스템 유지보수 및 운영</li>
            </ul>
            <div className="service-badge">검증된 기술</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
