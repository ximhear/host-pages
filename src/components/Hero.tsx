import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">GPMobile</h1>
        <p className="hero-subtitle">모바일 솔루션 & AI 주식 예측의 혁신</p>
        <p className="hero-description">
          2007년부터 축적된 모바일 앱 개발 전문성과<br />
          최첨단 AI 기술을 통한 주식 시장 분석 서비스를 제공합니다
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            서비스 보기
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
