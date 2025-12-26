import React from 'react'
import { featuredWorkData } from '../data/featuredWorkData'

const FeaturedWork = () => {
  return (
    <div className="featured-work">
      <div className="work-grid">
        {featuredWorkData.map((project) => (
          <div key={project.id} className="work-card">
            <div className="work-card-header">
              <h3 className="work-card-title">{project.title}</h3>
            </div>
            <div className="work-card-body">
              <p className="work-card-description">{project.description}</p>
              <div className="work-card-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="work-card-footer">
              <a 
                href={project.link} 
                className="work-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href={project.github} 
                className="work-card-link secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedWork