'use client';
import { HiArrowUp } from 'react-icons/hi';
import { FaInstagram, FaPinterest, FaVimeo } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/5 py-16 px-6 lg:px-10" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-white/5">
          {/* Brand + Logo */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3 mb-4">
              <img
                src="/mg-logo.png"
                alt=""
                className="h-10 md:h-12 w-auto"
              />
              <span className="font-display text-xl md:text-2xl font-bold tracking-wide">
                <span className="text-[#C4C4C4]">MOTION</span>{' '}
                <span className="text-[#D40D0E]">GRAPH</span>
              </span>
            </a>
            <p className="text-cream/40 font-light leading-relaxed max-w-xs">
              Timeless wedding photography and cinematic films for couples who
              believe in the art of storytelling.
            </p>
            <p className="text-cream/30 text-sm mt-3">
              📍 Garia, Kolkata – 700084
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream uppercase tracking-widest text-sm mb-6 font-semibold">
              Navigate
            </h4>
            <ul className="space-y-3">
              {['Home', 'Gallery', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${link.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-cream/40 hover:text-gold-400 transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-cream uppercase tracking-widest text-sm mb-6 font-semibold">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: FaInstagram, label: 'Instagram', href: '#' },
                { icon: FaPinterest, label: 'Pinterest', href: '#' },
                { icon: FaVimeo, label: 'Vimeo', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/40 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-cream/40 text-sm">
              ✉️{' '}
              <a
                href="mailto:help@motiongraph.com"
                className="hover:text-gold-400 transition-colors"
              >
                help@motiongraph.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-cream/30 text-sm font-light">
            &copy; {new Date().getFullYear()} Motion Graph. All rights reserved.
          </p>
          {/* Developer credit */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/40 text-sm font-light hover:text-gold-400 transition-colors duration-300"
          >
            Developed by Rajesh Sarkar
          </a>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/40 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <HiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}