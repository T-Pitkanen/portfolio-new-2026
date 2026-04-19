'use client';
import { useEffect, useRef } from 'react';
import styles from './cursor.module.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const coordRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const coord = coordRef.current;
    if (!cursor || !coord) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      coord.textContent = `x: ${String(e.clientX).padStart(3, '0')} y: ${String(e.clientY).padStart(3, '0')}`;
    };

    const onLeave = () => { cursor.style.opacity = '0'; };
    const onEnter = () => { cursor.style.opacity = '1'; };

    const addHover = () => cursor.classList.add(styles.hover);
    const removeHover = () => cursor.classList.remove(styles.hover);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    const attachHover = () => {
      document.querySelectorAll('a, button, [data-hover], [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };
    attachHover();

    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      mo.disconnect();
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      <div className={styles.cx} />
      <div className={styles.cy} />
      <div className={styles.dot} />
      <div ref={coordRef} className={styles.coord}>x: 000 y: 000</div>
    </div>
  );
}
