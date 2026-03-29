'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import HeroBg from '../hero-bg/hero-bg';
import styles from './intro.module.css';

const LINE1 = 'Tiia';
const LINE2 = 'Pitkänen';
const FULL_NAME = LINE1 + ' ' + LINE2;

export default function Hero() {
  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i === FULL_NAME.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="hero"
    >

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

        {/* Full name — typewriter */}
        <h1 className={styles.heading}>
          <span>
            {displayed.slice(0, Math.min(displayed.length, LINE1.length))}
            {displayed.length <= LINE1.length && <span className={`cursor-blink ${styles.cursorAccent}`} />}
          </span>
          <span className={styles.headingLine2}>
            {displayed.length > LINE1.length ? displayed.slice(LINE1.length + 1) : ''}
            {displayed.length > LINE1.length && <span className={`cursor-blink ${styles.cursorAccent}`} />}
          </span>
        </h1>

        {/* Role */}
        <p className={styles.role}>
          Business IT Student
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
