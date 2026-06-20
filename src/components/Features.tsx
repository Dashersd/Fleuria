import { motion, type Variants } from 'framer-motion';
import './Features.css';

const featuresData = [
  {
    id: 1,
    num: '01',
    title: 'Fresh Daily Flowers',
    description: 'We source the freshest blooms every morning to ensure longevity and vibrant beauty.',
  },
  {
    id: 2,
    num: '02',
    title: 'Custom Arrangements',
    description: 'Work with our expert florists to bring your unique vision to life.',
  },
  {
    id: 3,
    num: '03',
    title: 'Elegant Packaging',
    description: 'Every order is wrapped in our signature premium packaging for a luxurious unboxing.',
  },
  {
    id: 4,
    num: '04',
    title: 'Fast Delivery',
    description: 'Reliable, climate-controlled delivery ensuring your flowers arrive in perfect condition.',
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Features = () => {
  return (
    <section className="features">
      <div className="section-header">
        <h2 className="section-title">Why Choose Fleuria</h2>
        <p className="section-subtitle">The details that make our service truly exceptional</p>
      </div>

      <motion.div 
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuresData.map((feature) => (
          <motion.div 
            key={feature.id} 
            className="feature-card"
            variants={itemVariants}
          >
            <div className="feature-num">{feature.num}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
