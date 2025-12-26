import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Your Name</h1>
        <p className="hero-subtitle">Frontend Developer & Creative Designer</p>
        <p className="hero-description">
          Building exceptional digital experiences with React and modern web technologies.
        </p>
        <div className="hero-buttons">
          <button 
            className="hero-button primary"
            onClick={() => scrollToSection('work')}
          >
            View My Work
          </button>
          <button 
            className="hero-button secondary"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  )
}

export default Hero