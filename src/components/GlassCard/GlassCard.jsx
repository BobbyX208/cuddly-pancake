import React from 'react';
import PropTypes from 'prop-types';
import './GlassCard.css';

const GlassCard = ({ 
  children, 
  className = '', 
  padding = '1.5rem',
  borderRadius = '1rem',
  onClick,
  hoverEffect = true,
  variant = 'default'
}) => {
  const cardClasses = [
    'glass-card',
    `glass-card--${variant}`,
    hoverEffect ? 'glass-card--hover' : '',
    className
  ].filter(Boolean).join(' ');

  const cardStyle = {
    '--card-padding': padding,
    '--card-border-radius': borderRadius,
  };

  return (
    <div 
      className={cardClasses}
      style={cardStyle}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="glass-card__inner">
        {children}
      </div>
    </div>
  );
};

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  hoverEffect: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'light', 'dark', 'colorful']),
};

export default GlassCard;