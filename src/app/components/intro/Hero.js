import styles from './intro.module.css';
import Terminal from './terminal/Terminal';

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.heroGrid}>

        {/* ── Left column ── */}
        <div className={styles.left}>
          <p className={styles.where}>
            <span lang="fi">Vaasa</span>, Finland · Business IT at <span lang="fi">VAMK</span> · RDI trainee
          </p>

          <h1 className={styles.display}>
            Tiia<br />
            <span className={styles.displayItalic} lang="fi">Pitkänen</span>.
          </h1>

          <p className={styles.lede}>
            Third-year Business IT student at <span lang="fi">VAMK</span>. Currently a trainee on an
            RDI project, building a generative-AI web app. Web development degree
            from Denmark.
          </p>

          <div className={styles.ctaRow}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              See the work
            </a>
            <a href="#contact" className={styles.btn}>
              Get in touch
            </a>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className={styles.right}>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
