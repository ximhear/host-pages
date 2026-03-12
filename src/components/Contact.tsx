import React from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">연락처</h2>
          <div className="contact-content">
            <div className="contact-card">
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon-svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                  </div>
                  <div className="info-details">
                    <h4>회사명</h4>
                    <p>(주)지피모바일</p>
                    <p className="info-sub">GPMobile Co., Ltd.</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="info-details">
                    <h4>주소</h4>
                    <p>서울시 금천구 가산디지털1로 2</p>
                    <p className="info-sub">우림라이온스 2차 1218호</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className="info-details">
                    <h4>전화</h4>
                    <p>070-8611-7210</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
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
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2025 GPMobile Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Contact
