import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const handleNavClick = (id: string) => {
    if (isHomePage) {
      scrollToSection(id)
    } else {
      window.location.href = `/#${id}`
    }
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={() => setIsOpen(false)}>
          GPMobile
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><a onClick={() => handleNavClick('about')}>회사소개</a></li>
          <li><a onClick={() => handleNavClick('services')}>사업분야</a></li>
          <li>
            <Link to="/projects" className="nav-projects-link" onClick={() => setIsOpen(false)}>
              프로젝트
            </Link>
          </li>
          <li><a onClick={() => handleNavClick('clients')}>고객사</a></li>
          <li><a onClick={() => handleNavClick('contact')}>연락처</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
