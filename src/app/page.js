'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import Lightbox from '@/components/Lightbox';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (images, index) => {
    setGalleryImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {loading && <Preloader />}
      <div
        className={`min-h-screen bg-dark-950 transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <Gallery onImageClick={openLightbox} />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  );
}