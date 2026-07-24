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
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
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
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
          }
        }}
      >
        <motion.h1 
          className="hero-title"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          Flowers for Every Beautiful Moment
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          Handcrafted floral arrangements designed to celebrate life's most meaningful occasions.
        </motion.p>
        <motion.div 
          className="hero-buttons"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Link to="/collections" className="hero-cta">Explore Collections</Link>
          <a href="#gallery" className="hero-cta-secondary">View Gallery</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
