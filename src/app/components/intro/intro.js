'use client';
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import HeroBg from '../hero-bg/hero-bg';

export default function Hero() {
  const sectionRef = useRef(null);
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!section || !dot || !glow) return;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const t = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      dot.style.transform = t;
      glow.style.transform = t;
    };

    const onEnter = () => {
      dot.style.opacity = '1';
      glow.style.opacity = '1';
    };

    const onLeave = () => {
      dot.style.opacity = '0';
      glow.style.opacity = '0';
    };

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseenter', onEnter);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseenter', onEnter);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden"
      id="hero"
    >
      {/* Cursor glow bloom */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-36 h-36 rounded-full pointer-events-none z-20 opacity-0"
        style={{
          willChange: 'transform',
          transition: 'transform 0.35s ease-out, opacity 0.4s',
          background: 'radial-gradient(circle, rgba(155,110,210,0.30) 0%, rgba(130,85,190,0.10) 50%, transparent 70%)',
        }}
      />
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-30 opacity-0"
        style={{
          willChange: 'transform',
          transition: 'opacity 0.3s',
          background: 'rgba(200,170,240,0.95)',
          boxShadow: '0 0 6px 2px rgba(160,110,230,0.7), 0 0 18px 5px rgba(130,80,200,0.3)',
        }}
      />

      {/* Animated shader background */}
      <HeroBg />

      {/* Subtle geometric grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Status badge */}
        <div className="pill mb-10 mx-auto w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
          <span className="text-white/60 text-xs tracking-wide">Open to opportunities</span>
        </div>

        {/* Greeting */}
        <p className="text-sm text-white/40 mb-3 font-medium tracking-widest uppercase">
          Hey, I&apos;m
        </p>

        {/* Full name */}
        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-[-4px] leading-[0.9] mb-6 text-white">
          Tiia
          <span className="block text-white/80">
            Pitkänen<span className="cursor-blink bg-accent" />
          </span>
        </h1>

        {/* Role */}
        <p className="text-base md:text-lg text-white/45 font-medium mb-10 tracking-wide">
          Web Developer &amp; Business IT Student
        </p>

        {/* Tagline */}
        <p className="text-sm md:text-base text-white/35 max-w-xs mx-auto mb-12 leading-relaxed">
          Databases, architecture, and interfaces — built with intention.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/92 active:scale-95 transition-all"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-white/12 text-white/65 font-semibold text-sm hover:border-white/28 hover:text-white active:scale-95 transition-all"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2 bounce-y">
        <span className="text-[10px] text-white/25 tracking-[4px] uppercase">Scroll</span>
        <ArrowDown size={14} className="text-white/25" />
      </div>
    </section>
  );
}
