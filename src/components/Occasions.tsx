import { motion, type Variants } from 'framer-motion';
import './Occasions.css';

const occasionsData = [
  {
    id: 1,
    title: 'Weddings',
    image: '/images/wedding_arch.png',
  },
  {
    id: 2,
    title: 'Anniversaries',
    image: '/images/anniversary_florals.png',
  },
  {
    id: 3,
    title: 'Sympathy',
    image: '/images/sympathy_florals.png',
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

const Occasions = () => {
  return (
    <section id="occasions" className="occasions">
      <div className="section-header">
        <h2 className="section-title">For Every Occasion</h2>
        <p className="section-subtitle">Elevate your special moments with bespoke florals</p>
      </div>

      <motion.div 
        className="occasions-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {occasionsData.map((occ) => (
          <motion.div 
            key={occ.id} 
            className="occasion-item"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <img src={occ.image} alt={occ.title} className="occasion-image" />
            <div className="occasion-overlay">
              <h3 className="occasion-title">{occ.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Occasions;
