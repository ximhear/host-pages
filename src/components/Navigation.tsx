import React, { useState } from 'react'
import './Navigation.css'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => scrollToSection('hero')}>
          GPMobile
        </div>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><a onClick={() => scrollToSection('about')}>회사소개</a></li>
          <li><a onClick={() => scrollToSection('services')}>사업분야</a></li>
          <li><a onClick={() => scrollToSection('clients')}>고객사</a></li>
          <li><a onClick={() => scrollToSection('contact')}>연락처</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
