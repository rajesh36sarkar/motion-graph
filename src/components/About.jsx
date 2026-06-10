'use client';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-10 bg-dark-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=700&q=80"
                  alt="Wedding photographer capturing couple at sunset"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-500/20 rounded-sm -z-10 hidden md:block" />
              {/* Stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-8 left-8 bg-dark-950 border border-gold-500/30 px-6 py-4 rounded-sm"
              >
                <p className="font-display text-3xl font-bold text-cream">250+</p>
                <p className="text-cream/50 text-sm uppercase tracking-wider">Love Stories</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-4 font-body">
                About Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-8 leading-tight">
                We Don&apos;t Just Take
                <br />
                Photos — We Craft
                <br />
                <span className="text-gradient">Legacies</span>
              </h2>
              <div className="space-y-5 text-cream/60 text-lg font-light leading-relaxed">
                <p>
                  At Motion Graph, we believe your wedding day is more than an
                  event — it&apos;s the beginning of your forever. Our approach
                  blends fine-art aesthetics with documentary authenticity,
                  ensuring every tear, every laugh, and every stolen glance is
                  preserved in its purest form.
                </p>
                <p>
                  With over a decade of experience photographing weddings across
                  the globe, we&apos;ve honed the ability to disappear into the
                  background while capturing the most intimate, unscripted
                  moments that define your love story.
                </p>
                <p>
                  From the golden light of your first look to the euphoria of
                  the dance floor, we&apos;re there — quietly, attentively,
                  artistically.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center gap-6"
              >
                <div className="w-16 h-[1px] bg-gold-500" />
                <p className="font-display text-xl italic text-cream/80">
                  — Every image tells your truth
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}