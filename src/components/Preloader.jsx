'use client';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950"
      aria-label="Loading"
      role="status"
    >
      {/* Background Image – responsive */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile: <= 767px width */}
          <source
            srcSet="/preloader-md.jpg"
            media="(max-width: 767px)"
          />
          {/* Desktop/Tablet */}
          <img
            src="/preloader-wide.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
            }}
          />
        </picture>
        <div className="absolute inset-0 bg-dark-950/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/mg-logo.png"
            alt="Motion Graph"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            <span className="text-[#C4C4C4]">MOTION</span>{' '}
            <span className="text-[#D40D0E]">GRAPH</span>
          </h1>
          <p className="text-cream/50 text-sm uppercase tracking-[0.3em] mt-3 font-body">
            Wedding Photography & Films
          </p>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="h-full bg-gradient-to-r from-gold-500 via-[#D40D0E] to-gold-500"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-cream/30 text-xs uppercase tracking-[0.3em] mt-4 font-body"
        >
          Loading your story...
        </motion.p>
      </div>
    </motion.div>
  );
}