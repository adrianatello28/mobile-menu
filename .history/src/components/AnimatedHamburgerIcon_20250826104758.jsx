import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedHamburgerIcon.css';

const lineVariants = {
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

const topVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 7 },
};

const middleVariants = {
  closed: { opacity: 1, x: 0 },
  open: { opacity: 0, x: -20 },
};

const bottomVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -7 },
};

const AnimatedHamburgerIcon = ({ isOpen, toggle, color = '#000000' }) => {
  return (
    <button onClick={toggle} className="hamburger-button">
      <motion.div
        className="hamburger-line"
        style={{ backgroundColor: color }}
        variants={{ ...topVariants, transition: lineVariants.transition }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.div
        className="hamburger-line"
        style={{ backgroundColor: color }}
        variants={{ ...middleVariants, transition: lineVariants.transition }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.div
        className="hamburger-line"
        style={{ backgroundColor: color }}
        variants={{ ...bottomVariants, transition: lineVariants.transition }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      />
    </button>
  );
};

export default AnimatedHamburgerIcon;
