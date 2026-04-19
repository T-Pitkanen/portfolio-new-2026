import styles from './hero-meta.module.css';

export default function HeroMeta() {
  return (
    <div className={`reveal ${styles.heroMeta}`}>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>location</span>
        <span className={styles.metaVal}>Vaasa · FI</span>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>studying</span>
        <span className={styles.metaVal}>Business IT · VAMK · Year 2</span>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>status</span>
        <span className={`${styles.metaVal} ${styles.metaAccent}`}>● available for internship</span>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>interest</span>
        <span className={styles.metaVal}>databases · APIs · backend · analytics</span>
      </div>
    </div>
  );
}
