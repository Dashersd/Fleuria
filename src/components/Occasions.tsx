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
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: [0.32, 0.72, 0, 1] } }
};

const Occasions = () => {
  return (
    <section id="occasions" className="occasions macro-padding">
      <div className="section-header">
        <span className="eyebrow-tag">Life's Milestones</span>
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
            className={`occasion-item item-${occ.id} double-bezel`}
            variants={itemVariants}
          >
            <div className="double-bezel-inner relative group">
              <img src={occ.image} alt={occ.title} className="occasion-image" loading="lazy" />
              <div className="occasion-overlay">
                <h3 className="occasion-title">{occ.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Occasions;
