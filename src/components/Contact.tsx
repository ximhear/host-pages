import React from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">🏢</div>
                <div className="info-details">
                  <h4>회사명</h4>
                  <p>(주)지피모바일</p>
                  <p className="info-sub">GPMobile Co., Ltd.</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>주소</h4>
                  <p>서울시 금천구 가산디지털1로 2</p>
                  <p className="info-sub">우림라이온스 2차 1218호</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>전화</h4>
                  <p>070-8611-7210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🌐</div>
                <div className="info-details">
                  <h4>웹사이트</h4>
                  <p>www.gpmobile.co.kr</p>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h3>프로젝트 문의</h3>
              <p>
                모바일 앱 개발이나 AI 주식 예측 서비스에 대해<br />
                궁금하신 점이 있으시면 언제든 연락주세요.
              </p>
              <button className="contact-button" onClick={() => {
                window.location.href = 'tel:070-8611-7210'
              }}>
                전화 문의하기
              </button>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2025 GPMobile Co., Ltd. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
