import React, { useEffect, useRef, useState } from 'react';
import GlassCard from './GlassCard/GlassCard';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Roles to cycle through
  const roles = [
    'Frontend Developer',
    'UI/UX Designer',
    'React Specialist',
    'Creative Coder',
    'Problem Solver'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentRoleText = roles[roleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentRole(currentRoleText.substring(0, currentRole.length + 1));
        
        if (currentRole === currentRoleText) {
          // Pause at the end of typing
          setTypingSpeed(1000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(150);
        }
      } else {
        // Deleting backward
        setCurrentRole(currentRoleText.substring(0, currentRole.length - 1));
        
        if (currentRole === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        } else {
          setTypingSpeed(80);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, roles, typingSpeed]);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const heroElement = heroRef.current;
      const rect = heroElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the hero section (0 to 1)
      const progress = 1 - Math.max(0, rect.top) / windowHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll
  const heroOpacity = 1 - scrollProgress * 0.7;
  const heroScale = 1 - scrollProgress * 0.1;
  const cardOpacity = Math.max(0.7, 1 - scrollProgress * 0.5);
  const cardBlur = Math.max(10, 20 - scrollProgress * 10);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={heroRef}
      className="hero-section"
      style={{
        opacity: heroOpacity,
        transform: `scale(${heroScale})`,
      }}
    >
      <div className="hero-background" />
      
      <div className="hero-content">
        <GlassCard
          className="hero-glass-card"
          padding="3rem 2.5rem"
          borderRadius="2rem"
          variant="light"
          hoverEffect={true}
          style={{
            '--glass-blur': `${cardBlur}px`,
            opacity: cardOpacity,
          }}
        >
          <div className="hero-text">
            <h1 className="hero-name">
              Alex<span className="name-highlight">Morgan</span>
            </h1>
            
            <div className="hero-role-container">
              <p className="hero-role">
                <span className="role-prefix">I'm a </span>
                <span className="typing-text">
                  {currentRole}
                  <span className="typing-cursor">|</span>
                </span>
              </p>
              <div className="role-indicator">
                {roles.map((_, index) => (
                  <div 
                    key={index}
                    className={`indicator-dot ${index === roleIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-mission">
            <p className="mission-text">
              Creating beautiful, functional web experiences that make a difference.
            </p>
          </div>
        </GlassCard>

        <button 
          className="scroll-indicator"
          onClick={handleScrollDown}
          aria-label="Scroll to next section"
        >
          <div className="scroll-arrow" />
          <span className="scroll-text">Explore My Work</span>
        </button>

        <div className="scroll-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hero-decoration">
        <div className="decor-circle decor-1" />
        <div className="decor-circle decor-2" />
        <div className="decor-circle decor-3" />
      </div>
    </section>
  );
};

export default Hero; 