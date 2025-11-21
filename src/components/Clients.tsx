import React from 'react'
import './Clients.css'

const Clients: React.FC = () => {
  const clients = [
    { name: '삼성전자', description: 'Samsung Electronics' },
    { name: '안랩', description: 'AhnLab' },
    { name: '인프라웨어', description: 'Infraware' },
    { name: 'SK커머스', description: 'SK Commerce' }
  ]

  const projects = [
    { country: '🇬🇧', name: '영국', description: 'UK Project' },
    { country: '🇻🇪', name: '베네수엘라', description: 'Venezuela Project' },
    { country: '🇲🇦', name: '모로코', description: 'Morocco Project' },
    { country: '🇨🇳', name: '중국', description: 'China Project' },
    { country: '🇺🇸', name: '미국', description: 'USA Project' }
  ]

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2 className="section-title">주요 고객사 & 프로젝트</h2>

        <div className="clients-section">
          <h3 className="subsection-title">파트너사</h3>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-name">{client.name}</div>
                <div className="client-description">{client.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h3 className="subsection-title">글로벌 프로젝트 경험</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-flag">{project.country}</div>
                <div className="project-name">{project.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
