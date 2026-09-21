import styles from './hero-meta.module.css';

export default function HeroMeta() {
  return (
    <div className={`hero-in ${styles.heroMeta}`}>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>location</span>
        <span className={styles.metaVal}><span lang="fi">Vaasa</span> · FI</span>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>studying</span>
        <span className={styles.metaVal}>Business IT · <span lang="fi">VAMK</span> · Year 3</span>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>status</span>
        <span className={`${styles.metaVal} ${styles.metaAccent}`}>● trainee · <span lang="fi">VAMK</span> RDI project</span>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.metaKey}>interest</span>
        <span className={styles.metaVal}>full-stack · backend · data · AI </span>
      </div>
    </div>
  );
}
