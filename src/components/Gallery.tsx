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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="gallery">
      <div className="section-header">
        <h2 className="section-title">Floral Gallery</h2>
        <p className="section-subtitle">A visual journey through our finest creations</p>
      </div>

      <motion.div 
        className="gallery-masonry"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryImages.map((src, idx) => (
          <motion.div 
            key={idx} 
            className="gallery-item"
            variants={itemVariants}
            transition={{ duration: 0.3 }}
            onClick={() => setIndex(idx)}
          >
            <img src={src} alt={`Floral arrangement ${idx + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

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
