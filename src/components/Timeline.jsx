import React from 'react'
import { timelineData } from '../data/timelineData'
import { useCollapsible } from '../hooks/useCollapsible'

const TimelineItem = ({ item }) => {
  const { isExpanded, toggle } = useCollapsible(false)

  return (
    <div className="timeline-item">
      <div className="timeline-item-header">
        <div className="timeline-item-content">
          <h3 className="timeline-item-title">{item.title}</h3>
          <p className="timeline-item-company">{item.company}</p>
          <span className="timeline-item-period">{item.period}</span>
        </div>
        <button 
          className="timeline-expand-button"
          onClick={toggle}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${item.title}`}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      <p className="timeline-item-description">{item.description}</p>
      
      {isExpanded && (
        <div className="timeline-item-details">
          <ul className="timeline-details-list">
            {item.details.map((detail, index) => (
              <li key={index} className="timeline-detail-item">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-container">
        {timelineData.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Timeline