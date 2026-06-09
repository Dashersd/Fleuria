import { motion, type Variants } from 'framer-motion';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Eleanor Vance",
    text: "Fleuria provided the most breathtaking roses for our anniversary. The quality and presentation were unmatched.",
    role: "Happy Customer"
  },
  {
    id: 2,
    name: "Michael Sterling",
    text: "The signature mixed bouquet was a masterpiece. Their attention to detail and customer service is truly premium.",
    role: "Event Planner"
  },
  {
    id: 3,
    name: "Sophia Rossi",
    text: "Absolutely stunning arrangements. The lilies lasted for weeks and filled my home with the most beautiful fragrance.",
    role: "Interior Designer"
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-header">
        <h2 className="section-title">Client Love</h2>
        <p className="section-subtitle">Stories from our cherished customers</p>
      </div>

      <motion.div 
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonialsData.map((testimonial) => (
          <motion.div 
            key={testimonial.id} 
            className="testimonial-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <span className="testimonial-role">{testimonial.role}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
