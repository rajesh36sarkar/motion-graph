'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-950/90 backdrop-blur-xl border-b border-white/5 py-2'
            : 'bg-transparent py-4'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo + Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="relative z-50 flex items-center gap-3 flex-shrink-0"
            aria-label="Motion Graph Home"
          >
            <img
              src="/mg-logo.png"
              alt=""
              className="h-10 md:h-12 w-auto"
            />
            <span className="font-display text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
              <span className="text-[#C4C4C4]">MOTION</span>{' '}
              <span className="text-[#D40D0E]">GRAPH</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-sm uppercase tracking-widest text-cream/70 hover:text-cream transition-colors duration-300 py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 md:hidden text-cream p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay – OUTSIDE the header to avoid stacking conflicts */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex items-center justify-center md:hidden"
            onClick={closeMenu}  /* close when tapping outside links */
          >
            <nav
              className="flex flex-col items-center gap-10"
              onClick={(e) => e.stopPropagation()} /* prevent closing when clicking inside */
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-display text-cream/90 hover:text-gold-400 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}