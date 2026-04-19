import styles from './intro.module.css';
import HeroMeta from './hero-meta/HeroMeta';
import Terminal from './terminal/Terminal';
import HeroFooter from './hero-footer/HeroFooter';

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.heroGrid}>

        {/* ── Left column ── */}
        <div className={styles.left}>
          <HeroMeta />

          <h1 className={`reveal ${styles.display}`} data-delay="1">
            <span className={styles.displaySmall}>{'// Business IT student'}</span>
            Tiia<br />
            <span className={styles.displayItalic}>Pitkänen.</span>
          </h1>

          <div className={`reveal ${styles.ctaRow}`} data-delay="2">
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`} data-hover>
              <span>See the work</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#contact" className={styles.btn} data-hover>
              <span>Get in touch</span>
              <span className={styles.arrow}>↗</span>
            </a>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className={styles.right}>
          <Terminal />
        </div>
      </div>

      <HeroFooter />
    </section>
  );
}
