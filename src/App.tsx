import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/react'

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Analytics />
    </div>
  )
}

export default App
