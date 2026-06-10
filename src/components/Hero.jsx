'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on mobile (some browsers need user gesture)
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked, mute and try again
        video.muted = true;
        video.play();
      });
    }
  }, []);

  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/preloader-wide.jpg"   // fallback image while video loads
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradients (same as before) */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950" />
        <div className="absolute inset-0 bg-dark-950/20" />
      </div>

      {/* Content – unchanged except max-w-full already present */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto max-w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-body font-light"
        >
          Wedding Photography & Films
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.05] mb-8 text-balance"
        >
          Capturing
          <br />
          <span className="text-gradient">Timeless</span> Love
          <br />
          Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          We craft cinematic narratives that immortalize your most cherished
          moments — where every frame tells a story of romance, elegance, and
          pure emotion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              scrollToGallery();
            }}
            className="group relative px-8 py-4 bg-cream text-dark-950 font-body uppercase tracking-widest text-sm font-semibold overflow-hidden transition-all duration-500 hover:bg-gold-400"
          >
            <span className="relative z-10">View Our Work</span>
            <span className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border border-cream/30 text-cream font-body uppercase tracking-widest text-sm font-semibold hover:border-gold-500 hover:text-gold-400 transition-all duration-500"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { delay: 2, duration: 2, repeat: Infinity },
        }}
        onClick={scrollToGallery}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-cream/50 hover:text-gold-400 transition-colors duration-300"
        aria-label="Scroll to gallery"
      >
        <HiArrowDown size={28} />
      </motion.button>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
      />
    </section>
  );
}