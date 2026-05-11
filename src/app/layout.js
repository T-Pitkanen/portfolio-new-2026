import { JetBrains_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import ClientWidgets from './components/ClientWidgets';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  style: ['normal', 'italic'],
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
});

export const viewport = 'width=device-width, initial-scale=1';

export const metadata = {
  metadataBase: new URL('https://tiiapitkanen.com'),
  title: 'Tiia Pitkänen',
  description: 'Portfolio of Tiia Pitkänen, a Business IT student at VAMK. Showcasing projects, coursework, and skills in Business IT.',
  openGraph: {
    title: 'Tiia Pitkänen',
    description: 'Portfolio of Tiia Pitkänen, a Business IT student at VAMK. Showcasing projects, coursework, and skills in Business IT.',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Tiia Pitkänen Portfolio',
      },
    ],
    url: '/',
    type: 'website',
    locale: 'en_FI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiia Pitkänen',
    description: 'Portfolio of Tiia Pitkänen, a Business IT student at VAMK.',
    images: ['/logo/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${fraunces.variable}`}
        suppressHydrationWarning
      >
        {/* Page frame */}
        <div className="frame" aria-hidden="true" />

        {/* Corner ticks */}
        <div className="tick tick-tr" aria-hidden="true">v.2026.04<br />portfolio/tiia</div>


        <a href="#main" className="skip-link">Skip to content</a>
        <ClientWidgets />
        <Navigation />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
