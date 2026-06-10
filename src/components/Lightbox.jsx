'use client';
import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function Lightbox({ images, currentIndex, onClose, onIndexChange }) {
  const goToPrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const goToNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goToPrev, goToNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[90] bg-dark-950/98 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-dark-900/80 border border-white/10 flex items-center justify-center text-cream hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
          aria-label="Close lightbox"
        >
          <HiX size={24} />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 z-10 text-cream/60 text-sm font-body tracking-wider">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
          className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-dark-900/80 border border-white/10 flex items-center justify-center text-cream hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
          aria-label="Previous image"
        >
          <HiChevronLeft size={28} />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.alt || ''}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
          />
        </motion.div>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-dark-900/80 border border-white/10 flex items-center justify-center text-cream hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
          aria-label="Next image"
        >
          <HiChevronRight size={28} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}