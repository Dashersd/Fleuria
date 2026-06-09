import { motion, type Variants } from 'framer-motion';
import './LoadingScreen.css';

const flowerPath = "M50 90 C 35 90, 15 70, 15 45 C 15 25, 30 10, 50 20 C 70 10, 85 25, 85 45 C 85 70, 65 90, 50 90 Z M 50 90 C 45 75, 30 60, 30 45 C 30 35, 40 25, 50 35 C 60 25, 70 35, 70 45 C 70 60, 55 75, 50 90 Z M 50 90 V 110 M 50 70 V 35";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2, bounce: 0 },
      opacity: { duration: 0.1 }
    }
  }
};

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="loading-content">
        <motion.svg
          width="100"
          height="120"
          viewBox="0 0 100 120"
          initial="hidden"
          animate="visible"
          className="loading-svg"
        >
          <motion.path
            d={flowerPath}
            variants={draw}
            strokeWidth="2"
            stroke="var(--color-gold)"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        <motion.h1 
          className="loading-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Fleuria
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
