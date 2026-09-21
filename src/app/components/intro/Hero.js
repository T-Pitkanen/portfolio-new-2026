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

          <p className={`hero-in ${styles.displaySmall}`} style={{ '--hero-delay': '0.08s' }}>
            {'// Business IT student'}
          </p>
          <h1 className={`hero-in ${styles.display}`} style={{ '--hero-delay': '0.12s' }}>
            Tiia<br />
            <span className={styles.displayItalic} lang="fi">Pitkänen</span>.
          </h1>

          <div className={`hero-in ${styles.ctaRow}`} style={{ '--hero-delay': '0.2s' }}>
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
