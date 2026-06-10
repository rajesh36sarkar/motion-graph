'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-10 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <ScrollReveal direction="left">
            <div>
              <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-4 font-body">
                Get In Touch
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Let&apos;s Create
                <br />
                <span className="text-gradient">Something Beautiful</span>
              </h2>
              <p className="text-cream/50 text-lg font-light leading-relaxed mb-10">
                We&apos;d love to hear about your vision. Whether you&apos;re
                planning an intimate elopement or a grand celebration, reach out
                and let&apos;s start the conversation.
              </p>

              <div className="space-y-6">
                {[
                  { icon: HiMail, label: 'Email', value: 'help@motiongraph.com' },
                  { icon: HiPhone, label: 'Phone', value: '+91 9732271700' },
                  { icon: HiLocationMarker, label: 'Studio', value: 'Garia, Kolkata – 700084' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gold-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-cream/40 text-sm uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-cream">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal direction="right">
            <div className="bg-dark-900 border border-white/5 p-8 md:p-10 rounded-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
                    <HiMail className="text-gold-400 text-3xl" />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-2">Message Sent!</h3>
                  <p className="text-cream/50">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-cream/60 text-sm uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-950 border border-white/10 rounded-sm px-4 py-3 text-cream placeholder-cream/25 focus:border-gold-500/50 focus:outline-none transition-colors duration-300"
                      placeholder="John & Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cream/60 text-sm uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-950 border border-white/10 rounded-sm px-4 py-3 text-cream placeholder-cream/25 focus:border-gold-500/50 focus:outline-none transition-colors duration-300"
                      placeholder="hello@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-cream/60 text-sm uppercase tracking-wider mb-2">
                      Tell Us About Your Day
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-950 border border-white/10 rounded-sm px-4 py-3 text-cream placeholder-cream/25 focus:border-gold-500/50 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Share your vision, date, location, and any details you'd like us to know..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full group relative px-8 py-4 bg-cream text-dark-950 font-body uppercase tracking-widest text-sm font-semibold overflow-hidden transition-all duration-500 hover:bg-gold-400 rounded-sm"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}