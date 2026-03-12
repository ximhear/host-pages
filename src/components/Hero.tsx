import React from 'react'
import './Hero.css'
import heroIllustration from '../assets/hero-illustration.png'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            Since 2007 · Mobile & AI Solutions
          </div>

          <h1 className="hero-title">
            <span className="title-main">GPMobile</span>
            <span className="title-sub">비즈니스의 내일을 만드는 기술</span>
          </h1>

          <p className="hero-description">
            기술로 산업의 경계를 넓혀갑니다
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">{new Date().getFullYear() - 2007}+</div>
              <div className="stat-label">년 경험</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">프로젝트</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">개국 진출</div>
            </div>
          </div>

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

        <div className="hero-visual">
          <img src={heroIllustration} alt="GPMobile Technology" className="hero-illustration" />
        </div>
      </div>
    </section>
  )
}

export default Hero
