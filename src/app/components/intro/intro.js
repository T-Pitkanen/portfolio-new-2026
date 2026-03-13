"use client";

import { useEffect, useRef } from 'react';
import styles from './intro.module.css';

const Intro = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const heroElement = heroRef.current;

        if (!heroElement) {
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return;
        }

        let frameId = null;

        const setInteractiveState = (event) => {
            const bounds = heroElement.getBoundingClientRect();
            const mouseX = event.clientX - bounds.left;
            const mouseY = event.clientY - bounds.top;

            // Center of hero for proximity calculation
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;

            // Distance from cursor to center
            const distX = mouseX - centerX;
            const distY = mouseY - centerY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            
            // Max proximity range (in pixels)
            const maxRange = Math.hypot(centerX, centerY);
            const proximity = Math.max(0, 1 - distance / maxRange);

            // Light intensity: stronger when cursor is closer
            const lightIntensity = proximity * 0.7;

            // Light angle for directional effect
            const angle = Math.atan2(distY, distX) * (180 / Math.PI);

            heroElement.style.setProperty('--mouse-x', `${mouseX}px`);
            heroElement.style.setProperty('--mouse-y', `${mouseY}px`);
            heroElement.style.setProperty('--proximity', proximity.toFixed(3));
            heroElement.style.setProperty('--light-intensity', lightIntensity.toFixed(3));
            heroElement.style.setProperty('--light-angle', `${angle.toFixed(1)}deg`);
        };

        const handleMouseMove = (event) => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }

            frameId = requestAnimationFrame(() => {
                setInteractiveState(event);
            });
        };

        const handleMouseLeave = () => {
            heroElement.style.setProperty('--proximity', '0');
            heroElement.style.setProperty('--light-intensity', '0');
        };

        heroElement.addEventListener('mousemove', handleMouseMove);
        heroElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            heroElement.removeEventListener('mousemove', handleMouseMove);
            heroElement.removeEventListener('mouseleave', handleMouseLeave);

            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <section className={styles.hero} id="hero" ref={heroRef}>
            <div className={styles.ambientLayer} aria-hidden="true">
                <span className={styles.cursorGlow}></span>
                <span className={styles.gridTexture}></span>
            </div>
            <div className={styles.inner} data-fade>
                <p className={styles.tag}>Business Information Technology Student</p>
                <div className={styles.nameWrap}>
                    <h1 className={styles.name}>
                        <span className={styles.nameThin}>TIIA</span>
                        <span className={styles.nameAccent}>
                            PITKÄNEN
                            <span className={styles.cursor}></span>
                        </span>
                    </h1>
                </div>
                <div className={styles.bottomRow}>
                    <span className={styles.status}>
                        <span className={styles.dot}></span>
                        Seeking internships and junior roles
                    </span>
                    <a href="#data" className={styles.cta}>
                        See my work ↓
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;
