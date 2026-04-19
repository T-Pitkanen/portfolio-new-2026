import styles from './marquee.module.css';

const ITEMS = [
  'Business IT student',
  'learning out loud',
  'looking for internship summer 2027',
  'Vaasa / Uusimaa / Estonia',
  'somewhere in the data & backend space',
  'open to relocate',
];

export default function Marquee() {
  const track = ITEMS.map((item, i) => (
    <span key={i}>{item} <span className={styles.sep}>◆</span> </span>
  ));

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        <span>{track}</span>
        <span>{track}</span>
      </div>
    </div>
  );
}
