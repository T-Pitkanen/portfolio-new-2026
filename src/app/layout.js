import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import ScrollReveal from './components/scroll-reveal/scroll-reveal';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata = {
  title: 'Tiia Pitkänen — Web Developer & Business IT Student',
  description: 'Portfolio of Tiia Pitkänen, a web developer and business IT student focused on full-stack development and databases.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${instrumentSerif.variable}`} suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
        <ScrollReveal />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
