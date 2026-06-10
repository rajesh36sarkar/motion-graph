'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phone = '+919732271700';
  const message = encodeURIComponent(
    'Hi Motion Graph! I’d love to know more about your wedding photography services.'
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: [1, 1.1, 1] }}
      transition={{
        opacity: { delay: 2 },
        scale: { repeat: Infinity, duration: 2, repeatDelay: 1 },
      }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition-colors duration-300"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}