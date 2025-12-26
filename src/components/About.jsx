import React from 'react'

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Vite',
    'Git', 'Responsive Design', 'UI/UX Principles', 'REST APIs'
  ]

  return (
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate frontend developer with a focus on creating clean, 
            efficient, and user-friendly web applications. With a background in 
            design and development, I bridge the gap between aesthetics and 
            functionality.
          </p>
          <p>
            My approach combines modern development practices with attention to 
            detail, ensuring every project not only works flawlessly but also 
            delivers an exceptional user experience.
          </p>
        </div>
        <div className="skills-section">
          <h3 className="skills-title">Skills & Technologies</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About