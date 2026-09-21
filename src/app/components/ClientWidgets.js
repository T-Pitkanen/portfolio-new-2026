'use client';

import dynamic from 'next/dynamic';
import ScrollReveal from './scroll-reveal/ScrollReveal';

// Lazy load non-critical client widgets for better LCP.
// ScrollReveal is imported directly: it gates content visibility, so it must run at hydration.
const Cursor = dynamic(() => import('./cursor/Cursor'), { ssr: false });
const StatusBar = dynamic(() => import('./statusbar/StatusBar'), { ssr: false });

export default function ClientWidgets() {
  return (
    <>
      <StatusBar />
      <Cursor />
      <ScrollReveal />
    </>
  );
}
