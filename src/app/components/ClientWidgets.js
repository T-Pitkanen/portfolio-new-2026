'use client';

import dynamic from 'next/dynamic';

// Lazy load non-critical client widgets for better LCP
const Cursor = dynamic(() => import('./cursor/Cursor'), { ssr: false });
const ScrollReveal = dynamic(() => import('./scroll-reveal/ScrollReveal'), { ssr: false });
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
