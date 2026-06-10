import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Motion Graph | Premium Wedding Photography & Cinematography',
  description:
    'Capturing timeless love stories through an artistic lens. Motion Graph specializes in luxury wedding photography and cinematic films that preserve your most precious moments forever.',
  keywords: [
    'wedding photography',
    'wedding cinematography',
    'luxury wedding photographer',
    'wedding films',
    'bridal photography',
    'wedding portfolio',
    'Motion Graph',
  ],
  authors: [{ name: 'Motion Graph' }],
  creator: 'Motion Graph',
  publisher: 'Motion Graph',
  metadataBase: new URL('https://motion-graph.netlify.app'),
  openGraph: {
    title: 'Motion Graph | Premium Wedding Photography',
    description:
      'Capturing timeless love stories through an artistic lens. Luxury wedding photography and cinematic films.',
    url: 'https://motion-graph.netlify.app',
    siteName: 'Motion Graph',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Motion Graph - Wedding Photography Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motion Graph | Premium Wedding Photography',
    description: 'Capturing timeless love stories through an artistic lens.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://motion-graph.netlify.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Motion Graph',
              description:
                'Premium wedding photography and cinematography services capturing timeless love stories.',
              url: 'https://motion-graph.netlify.app',
              areaServed: 'Worldwide',
              serviceType: 'Wedding Photography',
              knowsAbout: [
                'Wedding Photography',
                'Wedding Cinematography',
                'Bridal Portraits',
                'Engagement Photography',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}