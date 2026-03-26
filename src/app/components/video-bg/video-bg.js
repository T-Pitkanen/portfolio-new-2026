'use client';
import styles from './video-bg.module.css';

export default function VideoBg() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
        style={{ zIndex: 1, filter: 'blur(8px)' }}
      >
        <source src="/Still_Nature_Video_Generated.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay} style={{ zIndex: 2 }} />
    </>
  );
}
