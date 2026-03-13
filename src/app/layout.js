import { Raleway, Space_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import ScrollAnimator from './components/scroll-animator/scroll-animator';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: [ '400', '500', '600', '700', '800'], variable: '--font-display' });

export const metadata = {
	title: 'Portfolio - Tiia Pitkänen',
	description: 'Portfolio - Tiia Pitkänen',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${raleway.className} ${spaceMono.variable} ${playfairDisplay.variable}`}>
				<Navigation />
				<ScrollAnimator />
				{children}
				<SpeedInsights />
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
