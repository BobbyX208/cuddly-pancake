import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would connect this to a backend service
    console.log('Form submitted:', formData)
    setStatus('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
    
    // Clear status message after 3 seconds
    setTimeout(() => setStatus(''), 3000)
  }

  const contactInfo = [
    { type: 'Email', value: 'hello@example.com', link: 'mailto:hello@example.com' },
    { type: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: 'https://linkedin.com' },
    { type: 'GitHub', value: 'github.com/yourusername', link: 'https://github.com' }
  ]

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-info-title">Contact Information</h3>
          <p className="contact-info-description">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-detail">
                <strong>{info.type}: </strong>
                <a 
                  href={info.link} 
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              />
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
            
            {status && (
              <div className="form-status">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact