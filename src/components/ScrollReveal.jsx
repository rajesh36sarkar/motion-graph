'use client';
import { motion } from 'framer-motion';

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={direction}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}