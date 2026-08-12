import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const petals = [
  { id: 0, left: '5%', animationDelay: '0s', animationDuration: '15s' },
  { id: 1, left: '15%', animationDelay: '2s', animationDuration: '12s' },
  { id: 2, left: '25%', animationDelay: '4s', animationDuration: '18s' },
  { id: 3, left: '35%', animationDelay: '1s', animationDuration: '14s' },
  { id: 4, left: '45%', animationDelay: '3s', animationDuration: '16s' },
  { id: 5, left: '55%', animationDelay: '0.5s', animationDuration: '11s' },
  { id: 6, left: '65%', animationDelay: '5s', animationDuration: '19s' },
  { id: 7, left: '75%', animationDelay: '2.5s', animationDuration: '13s' },
  { id: 8, left: '85%', animationDelay: '1.5s', animationDuration: '17s' },
  { id: 9, left: '95%', animationDelay: '3.5s', animationDuration: '15s' },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-background"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <img 
          src="/images/hero_floral_bg.png" 
          alt="Luxury Floral Arrangement" 
          className="hero-image"
          fetchPriority="high"
        />
        <div className="hero-overlay"></div>
      </motion.div>
      
      {/* Floating Petals */}
      <div className="petals-container">
        {petals.map((petal) => (
          <div 
            key={petal.id} 
            className="petal" 
            style={{ 
              left: petal.left,
              animationDelay: petal.animationDelay,
              animationDuration: petal.animationDuration
            }}
          ></div>
        ))}
      </div>

      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
          }
        }}
      >
        <motion.span
          className="eyebrow-tag"
          variants={{
            hidden: { y: 20, opacity: 0, filter: 'blur(5px)' },
            visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease: [0.32, 0.72, 0, 1] } }
          }}
        >
          Fleuria Exclusives
        </motion.span>

        <motion.h1 
          className="hero-title"
          variants={{
            hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
            visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.32, 0.72, 0, 1] } }
          }}
        >
          Flowers for Every <br />Beautiful Moment
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.32, 0.72, 0, 1] } }
          }}
        >
          Handcrafted floral arrangements designed to celebrate life's most meaningful occasions.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.32, 0.72, 0, 1] } }
          }}
        >
          <Link to="/collections" className="hero-cta group">
            <span>Explore Collections</span>
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </Link>
          <a href="#gallery" className="hero-cta-secondary">View Gallery</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
