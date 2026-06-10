'use client';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    quote:
      'Motion Graph captured our day with such grace and artistry. Looking at our photos feels like reliving the most beautiful dream. Every emotion, every detail — preserved perfectly.',
    name: 'Sophia & James',
    location: 'Tuscany, Italy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    quote:
      'We were blown away by the cinematic film they created. It wasn\'t just a wedding video — it was a piece of art. Our families wept happy tears watching it.',
    name: 'Emma & Lucas',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    quote:
      'From the first consultation to the final album delivery, the experience was nothing short of extraordinary. They made us feel so comfortable and the results speak for themselves.',
    name: 'Olivia & Noah',
    location: 'Napa Valley, California',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-dark-900 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/2 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-4 font-body">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Words of <span className="text-gradient">Love</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="bg-dark-950 border border-white/5 p-8 md:p-10 rounded-sm h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-gold-500 text-lg" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="text-cream/60 font-light leading-relaxed mb-8 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-gold-500/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-cream font-semibold">{t.name}</p>
                    <p className="text-cream/40 text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}