import { motion, type Variants } from 'framer-motion';
import './Collections.css';

const collectionsData = [
  {
    id: 1,
    title: 'Roses',
    description: 'Classic, romantic, and timeless symbols of love.',
    image: '/images/classic_roses.png',
    spanClass: 'bento-large'
  },
  {
    id: 2,
    title: 'Tulips',
    description: 'Vibrant and elegant, perfect for brightening any day.',
    image: '/images/tulip_medley.png',
    spanClass: 'bento-tall'
  },
  {
    id: 3,
    title: 'Lilies',
    description: 'Sophisticated and fragrant blooms for a touch of luxury.',
    image: '/images/new_casablanca_lilies.jpg',
    spanClass: 'bento-small'
  },
  {
    id: 4,
    title: 'Sunflowers',
    description: 'Radiant and joyful, bringing warmth and happiness.',
    image: '/images/golden_sunflowers.png',
    spanClass: 'bento-small'
  },
  {
    id: 5,
    title: 'Mixed Bouquets',
    description: 'Artfully arranged assortments for every unique occasion.',
    image: '/images/blush_arrangement.png',
    spanClass: 'bento-wide'
  }
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
  hidden: { opacity: 0, y: 50, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

const Collections = () => {
  return (
    <section id="collections" className="collections macro-padding">
      <div className="section-header">
        <span className="eyebrow-tag">Curated Selection</span>
        <h2 className="section-title">Featured Collections</h2>
        <p className="section-subtitle">Discover our most beloved floral arrangements</p>
      </div>
      
      <motion.div 
        className="collections-bento"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {collectionsData.map((item) => (
          <motion.div 
            key={item.id} 
            className={`collection-card double-bezel group ${item.spanClass}`}
            variants={itemVariants}
          >
            <div className="double-bezel-inner relative">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" loading="lazy" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Collections;
