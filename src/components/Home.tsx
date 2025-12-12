import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
    </>
  )
}

export default Home
