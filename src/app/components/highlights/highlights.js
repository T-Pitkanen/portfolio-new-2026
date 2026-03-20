"use client";

import styles from './highlights.module.css';
import { useEffect, useRef } from 'react';

const Highlights = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statElements = entry.target.querySelectorAll(`.${styles.statItem}`);
          statElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add(styles.animated);
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.3 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: '6+',
      label: 'Student Projects',
      description: 'Built from scratch with databases and real features'
    },
    {
      number: '2',
      label: 'Degrees',
      description: 'Web Development diploma + Business IT in progress'
    },
    {
      number: '4+',
      label: 'Tech Stacks',
      description: 'Comfortable with multiple languages and frameworks'
    },
    {
      number: 'Self-Taught',
      label: 'Main Strength',
      description: 'Learns quickly and builds things to understand them'
    }
  ];

  return (
    <section className={styles.highlights} ref={statsRef}>
      <div className={styles.inner}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem} data-fade data-delay={index}>
              <div className={styles.statNumber}>{stat.number}</div>
              <h3 className={styles.statLabel}>{stat.label}</h3>
              <p className={styles.statDesc}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
