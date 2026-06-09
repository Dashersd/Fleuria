import { motion, type Variants } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  '/images/classic_roses.png',
  '/images/tulip_medley.png',
  '/images/casablanca_lilies.png',
  '/images/golden_sunflowers.png',
  '/images/anniversary_florals.png',
  '/images/sympathy_florals.png'
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
            whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <img src={src} alt={`Floral arrangement ${idx + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
