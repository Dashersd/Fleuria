import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <img 
          src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1600&auto=format&fit=crop" 
          alt="Floral background" 
          className="cta-image"
        />
        <div className="cta-overlay"></div>
      </div>
      <div className="cta-content">
        <h2 className="cta-title">Let us create something beautiful for your special moment.</h2>
        <Link to="/contact" className="cta-button">Request an Arrangement</Link>
      </div>
    </section>
  );
};

export default CTA;
