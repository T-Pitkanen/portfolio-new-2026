import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bigSig} aria-hidden="true">
        Tiia <span className={styles.bigSigMute}>Pitkänen</span>
      </div>
      <div className={styles.meta}>
        <span />
        <span className={styles.metaCenter}>©2026 — Tiia <span lang="fi">Pitkänen</span></span>
        <a href="#hero" className={styles.metaRight}>Back to top ↑</a>
      </div>
    </footer>
  );
}
