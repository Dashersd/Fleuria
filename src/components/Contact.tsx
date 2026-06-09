import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Request an Arrangement</h2>
          <p className="contact-desc">
            Let us craft the perfect arrangement for your occasion. Fill out the form, and our floral designers will get in touch with you to finalize the details.
          </p>
          <div className="info-item">
            <strong>Visit Us</strong>
            <p>123 Blossom Avenue, Paris, France</p>
          </div>
          <div className="info-item">
            <strong>Email</strong>
            <p>hello@fleuria.com</p>
          </div>
          <div className="info-item">
            <strong>Phone</strong>
            <p>+33 1 23 45 67 89</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Jane Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="jane@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion / Theme</label>
            <select id="occasion" required>
              <option value="" disabled selected>Select an occasion</option>
              <option value="wedding">Wedding</option>
              <option value="anniversary">Anniversary</option>
              <option value="sympathy">Sympathy</option>
              <option value="gift">Gift</option>
              <option value="custom">Custom Arrangement</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="details">Additional Details (Budget, Delivery Date, Specific Flowers)</label>
            <textarea id="details" rows={5} placeholder="Tell us more about what you're looking for..." required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Request</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
