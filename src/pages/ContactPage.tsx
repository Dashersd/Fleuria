import { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', occasion: '', message: '' });
    }, 4000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info-section">
          <h1>Get in Touch</h1>
          <p>
            Whether you are planning a grand event or looking for the perfect everyday arrangement, our team is here to bring your vision to life.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <h3>Visit Us</h3>
              <p>123 Floral Avenue<br/>New York, NY 10001</p>
            </div>
            <div className="contact-detail-item">
              <h3>Contact</h3>
              <p>hello@fleuria.com<br/>+1 (555) 123-4567</p>
            </div>
            <div className="contact-detail-item">
              <h3>Hours</h3>
              <p>Mon - Fri: 9am - 6pm<br/>Sat: 10am - 4pm</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Request an Arrangement</h2>
          <p>Fill out the form below and our florists will contact you to discuss the details.</p>
          
          {submitted ? (
            <div className="form-success">
              <h3>Thank you for your request!</h3>
              <p>We will be in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-page-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Jane Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="form-group half">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
                  <option value="" disabled>Select an occasion</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Birthday</option>
                  <option value="gift">Everyday Gift</option>
                  <option value="event">Corporate Event</option>
                  <option value="sympathy">Sympathy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                  placeholder="Tell us about your vision, favorite flowers, or specific requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Request</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
