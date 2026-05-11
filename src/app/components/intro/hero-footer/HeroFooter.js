import styles from './hero-footer.module.css';

export default function HeroFooter() {
  return (
    <div className={styles.heroFooter}>
      <div>©2026 — personal site, v.4</div>
      <div aria-hidden="true" />
    </div>
  );
}
