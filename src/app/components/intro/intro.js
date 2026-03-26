'use client';
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import HeroBg from '../hero-bg/hero-bg';
import styles from './intro.module.css';

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
      className={styles.section}
      id="hero"
    >
      {/* Cursor glow bloom */}
      <div
        ref={glowRef}
        className={styles.glowBloom}
        style={{
          willChange: 'transform',
          transition: 'transform 0.35s ease-out, opacity 0.4s',
          background: 'radial-gradient(circle, rgba(155,110,210,0.30) 0%, rgba(130,85,190,0.10) 50%, transparent 70%)',
        }}
      />
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className={styles.cursorDot}
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
        className={styles.gridLines}
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className={styles.content}>
        {/* Status badge */}
        <div className={`pill ${styles.pillWrapper}`}>
          <span className={`pulse-dot ${styles.statusDot}`} />
          <span className={styles.statusText}>Open to opportunities</span>
        </div>

        {/* Greeting */}
        <p className={styles.greeting}>
          Hey, I&apos;m
        </p>

        {/* Full name */}
        <h1 className={styles.heading}>
          Tiia
          <span className={styles.headingLine2}>
            Pitkänen<span className={`cursor-blink ${styles.cursorAccent}`} />
          </span>
        </h1>

        {/* Role */}
        <p className={styles.role}>
          Web Developer &amp; Business IT Student
        </p>

        {/* Tagline */}
        <p className={styles.tagline}>
          Databases, architecture, and interfaces — built with intention.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#projects" className={styles.ctaPrimary}>
            View my work
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`bounce-y ${styles.scrollIndicator}`}>
        <span className={styles.scrollText}>Scroll</span>
        <ArrowDown size={14} className={styles.scrollIcon} />
      </div>
    </section>
  );
}
