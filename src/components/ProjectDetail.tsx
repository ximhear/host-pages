import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, categories } from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  const category = categories.find(c => c.id === project.category)

  return (
    <div className="project-detail-page">
      <div className="detail-hero">
        <div className="detail-hero-bg">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`shape shape-${i + 1}`} />
            ))}
          </div>
        </div>
        <div className="detail-hero-content">
          <Link to="/projects" className="back-link">
            &larr; 프로젝트 목록으로
          </Link>
          <div className="detail-meta">
            <span className="detail-category">
              {category?.icon} {category?.name}
            </span>
            <span className="detail-year">{project.year}</span>
            {project.badge && (
              <span className={`detail-badge ${project.badge === 'NEW' ? 'new' : ''}`}>
                {project.badge}
              </span>
            )}
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.shortDescription}</p>
        </div>
        <div className="detail-thumbnail">{project.thumbnail}</div>
      </div>

      <div className="detail-container">
        <div className="detail-grid">
          <div className="detail-main">
            <section className="detail-section">
              <h2>프로젝트 개요</h2>
              <p className="detail-description">{project.fullDescription}</p>
            </section>

            <section className="detail-section">
              <h2>주요 기능</h2>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="detail-sidebar">
            <div className="info-card">
              <h3>프로젝트 정보</h3>
              <div className="info-item">
                <span className="info-label">고객사</span>
                <span className="info-value">{project.client}</span>
              </div>
              <div className="info-item">
                <span className="info-label">기간</span>
                <span className="info-value">{project.year}</span>
              </div>
              <div className="info-item">
                <span className="info-label">분야</span>
                <span className="info-value">{category?.name}</span>
              </div>
            </div>

            <div className="tech-card">
              <h3>사용 기술</h3>
              <div className="tech-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <section className="related-section">
            <h2>관련 프로젝트</h2>
            <div className="related-grid">
              {relatedProjects.map(related => (
                <Link
                  to={`/projects/${related.id}`}
                  key={related.id}
                  className="related-card"
                >
                  <div className="related-thumbnail">{related.thumbnail}</div>
                  <div className="related-content">
                    <h4>{related.title}</h4>
                    <p>{related.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="cta-section">
          <h2>비슷한 프로젝트가 필요하신가요?</h2>
          <p>GPMobile과 함께 성공적인 프로젝트를 진행해보세요.</p>
          <div className="cta-buttons">
            <Link to="/" className="cta-btn primary">문의하기</Link>
            <Link to="/projects" className="cta-btn secondary">더 많은 프로젝트 보기</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
