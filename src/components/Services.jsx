'use client';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  HiCamera,
  HiVideoCamera,
  HiPhotograph,
  HiHeart,
  HiGlobe,
  HiBookOpen,
} from 'react-icons/hi';

const iconMap = {
  HiCamera: HiCamera,
  HiVideoCamera: HiVideoCamera,
  HiPhotograph: HiPhotograph,
  HiHeart: HiHeart,
  HiGlobe: HiGlobe,
  HiBookOpen: HiBookOpen,
};

const services = [
  {
    icon: 'HiCamera',
    title: 'Wedding Photography',
    description:
      'Full-day coverage with a fine-art approach. From bridal prep to the grand exit, every moment is captured with intention and artistry.',
    price: 'Starting at $4,500',
    highlight: 'Most Popular',
  },
  {
    icon: 'HiVideoCamera',
    title: 'Cinematic Films',
    description:
      'Story-driven wedding films that feel like a movie. Includes a highlight reel, full ceremony edit, and raw footage delivery.',
    price: 'Starting at $6,000',
    highlight: '',
  },
  {
    icon: 'HiPhotograph',
    title: 'Engagement Sessions',
    description:
      'A relaxed pre-wedding shoot to celebrate your engagement. Perfect for save-the-dates and getting comfortable in front of the camera.',
    price: 'Starting at $1,200',
    highlight: '',
  },
  {
    icon: 'HiHeart',
    title: 'Elopement Packages',
    description:
      'Intimate elopement coverage for couples who want to keep things small without sacrificing breathtaking imagery.',
    price: 'Starting at $3,000',
    highlight: '',
  },
  {
    icon: 'HiGlobe',
    title: 'Destination Weddings',
    description:
      'We travel worldwide to document your dream wedding. Custom packages include travel coordination and multi-day coverage.',
    price: 'Custom Quote',
    highlight: '',
  },
  {
    icon: 'HiBookOpen',
    title: 'Luxury Albums',
    description:
      'Handcrafted, heirloom-quality wedding albums printed on archival paper. Designed to be passed down through generations.',
    price: 'Starting at $800',
    highlight: '',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-10 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-4 font-body">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Tailored <span className="text-gradient">Services</span>
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto text-lg font-light">
              Every love story deserves a bespoke approach. Choose the
              collection that resonates with your vision.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative bg-dark-900 border border-white/5 p-8 md:p-10 rounded-sm transition-all duration-500 hover:border-gold-500/30 hover:bg-dark-900/80"
                >
                  {service.highlight && (
                    <span className="absolute top-4 right-4 bg-gold-600/20 text-gold-400 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.highlight}
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-500">
                    <Icon className="text-gold-400 text-2xl" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-cream mb-3">
                    {service.title}
                  </h3>
                  <p className="text-cream/50 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
                      {service.price}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}