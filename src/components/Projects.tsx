import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'
import './Projects.css'

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-content">
          <Link to="/" className="back-link">
            &larr; 홈으로 돌아가기
          </Link>
          <h1 className="projects-title">프로젝트 & 성과</h1>
          <p className="projects-subtitle">
            17년간 쌓아온 GPMobile의 기술력과 성과를 확인하세요
          </p>
        </div>
      </div>

      <div className="projects-container">
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">{projects.length}+</span>
            <span className="stat-label">완료된 프로젝트</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">17년</span>
            <span className="stat-label">업계 경력</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5개국</span>
            <span className="stat-label">글로벌 진출</span>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`project-card ${project.badge === 'NEW' ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-thumbnail">{project.thumbnail}</div>
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-client">
                  <span className="client-label">고객사:</span>
                  <span className="client-name">{project.client}</span>
                </div>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                {project.badge && (
                  <div className={`project-badge ${project.badge === 'NEW' ? 'new' : ''}`}>
                    {project.badge}
                  </div>
                )}
              </div>
              <div className="project-hover-overlay">
                <span className="view-detail">자세히 보기 &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
