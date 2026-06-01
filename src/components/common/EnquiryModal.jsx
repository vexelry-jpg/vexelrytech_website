import { useState, useEffect } from 'react';
import '../../styles/EnquiryModal.css';

// REPLACE THIS WITH YOUR ACTUAL WEB3FORMS ACCESS KEY
const WEB3FORMS_ACCESS_KEY = 'a4496457-dd0a-4b76-a898-cb3a7c7fc2ec';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form status when modal closes
      if (status === 'success') {
        setTimeout(() => {
          setStatus('idle');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            service: '',
            projectDetails: ''
          });
        }, 300);
      }
    }
  }, [isOpen, status]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('First name and email are required.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Project Enquiry from Vexelry Website',
          from_name: `${formData.firstName} ${formData.lastName}`.trim(),
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send request. Please check your internet connection and try again.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        
        <div className="modal-header">
          <span className="modal-header-badge">Get in Touch</span>
          <h2>Start Your Project</h2>
          <p>Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        {status === 'success' ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Request Sent Successfully!</h3>
            <p>Thank you for reaching out. We look forward to working with you.</p>
            <button className="btn btn--primary" onClick={onClose}>
              Close Window
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                  placeholder="John"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <div className="select-wrapper">
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="projectDetails">Project Details</label>
              <textarea 
                id="projectDetails" 
                name="projectDetails" 
                value={formData.projectDetails} 
                onChange={handleChange} 
                rows="4" 
                placeholder="Tell us a little bit about your project requirements..."
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="form-error">
                {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              className={`btn btn--primary modal-submit ${status === 'submitting' ? 'loading' : ''}`}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>
            
            <div className="modal-divider">
              <span>OR</span>
            </div>

            <div className="modal-call-option">
              <a href="tel:+919342347936" className="modal-call-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call us at +91 93423 47936
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
