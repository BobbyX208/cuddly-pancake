import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedWork from './components/FeaturedWork'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import SectionWrapper from './components/SectionWrapper'

function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        <SectionWrapper id="about" title="About">
          <About />
        </SectionWrapper>
        <SectionWrapper id="work" title="Featured Work">
          <FeaturedWork />
        </SectionWrapper>
        <SectionWrapper id="timeline" title="Experience Timeline">
          <Timeline />
        </SectionWrapper>
        <SectionWrapper id="contact" title="Get In Touch">
          <Contact />
        </SectionWrapper>
      </main>
    </div>
  )
}

export default App