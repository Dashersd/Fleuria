import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Gallery.css';

const galleryImages = [
  '/images/wildflower_bouquet.jpg',
  '/images/enchanted_reception.jpg',
  '/images/classic_roses.png',
  '/images/tulip_medley.png',
  '/images/golden_sunflowers.png',
  '/images/anniversary_florals.png'
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 100, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.32, 0.72, 0, 1] } }
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const handleImageClick = (idx: number) => {
    setIndex(idx);
  };

  return (
    <section id="gallery" className="gallery macro-padding">
      <div className="gallery-container">
        {/* Left Side: Typography */}
        <motion.div 
          className="gallery-typography"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="eyebrow-tag">Exquisite Details</span>
          <h2 className="gallery-title">A Visual Journey Through Our Creations</h2>
          <p className="gallery-subtitle">
            Every arrangement is a masterpiece crafted with precision and passion. Explore our gallery to witness the artistry of Fleuria.
          </p>
        </motion.div>

        {/* Right Side: Interactive Image Pills */}
        <motion.div 
          className="gallery-interactive"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((src, idx) => (
            <motion.div 
              key={idx} 
              className="gallery-image-wrapper double-bezel"
              variants={itemVariants}
            >
              <div 
                className="double-bezel-inner"
                onClick={() => handleImageClick(idx)}
              >
                <img src={src} alt={`Floral arrangement ${idx + 1}`} loading="lazy" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryImages.map(src => ({ src }))}
      />
    </section>
  );
};

export default Gallery;
