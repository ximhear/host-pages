import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      {/* Floating particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* AI Circuit elements */}
      <div className="circuit-bg">
        <div className="circuit-line circuit-line-1"></div>
        <div className="circuit-line circuit-line-2"></div>
        <div className="circuit-line circuit-line-3"></div>
        <div className="circuit-dot circuit-dot-1"></div>
        <div className="circuit-dot circuit-dot-2"></div>
        <div className="circuit-dot circuit-dot-3"></div>
      </div>

      <div className="hero-content">
        <div className="ai-badge">
          <span className="ai-icon">🤖</span>
          <span>AI-Powered Technology</span>
        </div>

        <h1 className="hero-title">
          <span className="title-main">GPMobile</span>
          <span className="title-accent">AI Innovation</span>
        </h1>

        <p className="hero-subtitle">모바일 솔루션 & AI 주식 예측의 혁신</p>

        <p className="hero-description">
          2007년부터 축적된 모바일 앱 개발 전문성과<br />
          <span className="highlight-text">최첨단 AI 기술</span>을 통한 주식 시장 분석 서비스를 제공합니다
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">17+</div>
            <div className="stat-label">Years</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">AI</div>
            <div className="stat-label">Powered</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Analysis</div>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            <span>서비스 보기</span>
            <span className="btn-icon">→</span>
          </button>
          <button className="btn-secondary" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            문의하기
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
