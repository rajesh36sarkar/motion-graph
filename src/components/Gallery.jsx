'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlus } from 'react-icons/hi';
import portfolioItems from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';

const categories = ['All', 'Ceremony', 'Bridal', 'Couple', 'Reception', 'Details', 'Venue'];

export default function Gallery({ onImageClick }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleImageClick = (index) => {
    const imageList = filtered.map((item) => ({
      src: item.src,
      alt: item.alt,
    }));
    onImageClick(imageList, index);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 lg:px-10 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-4 font-body">
              Our Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Curated <span className="text-gradient">Galleries</span>
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto text-lg font-light">
              Each wedding is a unique canvas. Explore our collection of love
              stories captured across the world.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300 rounded-full ${
                  activeCategory === cat
                    ? 'bg-gold-600 text-dark-950 font-semibold'
                    : 'text-cream/50 border border-cream/10 hover:border-gold-500/40 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ↓↓↓ Wrapper with overflow-hidden ↓↓↓ */}
        <div className="overflow-hidden">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="break-inside-avoid mb-4 lg:mb-5 relative group cursor-pointer overflow-hidden rounded-sm"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleImageClick(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(index);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent flex items-center justify-center transition-opacity duration-500 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <HiPlus className="text-cream text-4xl mx-auto mb-2" />
                    <span className="text-cream text-sm uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-cream/40 text-lg">No images in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}