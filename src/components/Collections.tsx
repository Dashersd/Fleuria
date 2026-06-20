import { motion, type Variants } from 'framer-motion';
import './Collections.css';

const collectionsData = [
  {
    id: 1,
    title: 'Roses',
    description: 'Classic, romantic, and timeless symbols of love.',
    image: '/images/classic_roses.png'
  },
  {
    id: 2,
    title: 'Tulips',
    description: 'Vibrant and elegant, perfect for brightening any day.',
    image: '/images/tulip_medley.png'
  },
  {
    id: 3,
    title: 'Lilies',
    description: 'Sophisticated and fragrant blooms for a touch of luxury.',
    image: '/images/new_casablanca_lilies.jpg'
  },
  {
    id: 4,
    title: 'Sunflowers',
    description: 'Radiant and joyful, bringing warmth and happiness.',
    image: '/images/golden_sunflowers.png'
  },
  {
    id: 5,
    title: 'Mixed Bouquets',
    description: 'Artfully arranged assortments for every unique occasion.',
    image: '/images/blush_arrangement.png'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Collections = () => {
  return (
    <section id="collections" className="collections">
      <div className="section-header">
        <h2 className="section-title">Featured Collections</h2>
        <p className="section-subtitle">Discover our most beloved floral arrangements</p>
      </div>
      
      <motion.div 
        className="collections-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {collectionsData.map((item) => (
          <motion.div 
            key={item.id} 
            className="collection-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Collections;
