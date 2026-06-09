import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { flowers } from '../data/flowers';
import './CollectionsPage.css';

const categories = ['All Flowers', 'Roses', 'Tulips', 'Lilies', 'Sunflowers', 'Mixed Bouquets'];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

const CollectionsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Flowers');

  const filteredFlowers = activeCategory === 'All Flowers' 
    ? flowers 
    : flowers.filter(f => f.category === activeCategory);

  return (
    <div className="collections-page">
      <motion.header 
        className="collections-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Our Collections</h1>
        <p>Explore our exquisite range of luxury floral arrangements.</p>
      </motion.header>

      <motion.div 
        className="category-filters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className="collections-grid-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {filteredFlowers.map((flower) => (
            <motion.div
              key={flower.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.12)" }}
            >
              <Link to={`/flower/${flower.id}`} className="flower-card">
                <div className="flower-image-wrapper">
                  <img src={flower.heroImage} alt={flower.name} loading="lazy" />
                </div>
                <div className="flower-info">
                  <h2>{flower.name}</h2>
                  <p>{flower.shortDescription}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CollectionsPage;
