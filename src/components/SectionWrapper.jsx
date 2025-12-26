import React from 'react'
import PropTypes from 'prop-types'

const SectionWrapper = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SectionWrapper