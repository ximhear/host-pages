import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import { Analytics } from '@vercel/analytics/react'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  )
}

export default App
