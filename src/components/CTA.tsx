import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section macro-padding">
      <div 
        className="cta-background" 
        style={{ backgroundImage: 'url(/images/wedding_arch.png)' }}
      >
        <div className="cta-overlay"></div>
      </div>
      <motion.div 
        className="cta-content double-bezel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className="double-bezel-inner cta-inner">
          <span className="eyebrow-tag">Consultations Open</span>
          <h2 className="cta-title">Let us create something beautiful for your special moment.</h2>
          <Link to="/contact" className="hero-cta cta-button-custom group">
            <span>Request an Arrangement</span>
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
