import styles from './skills.module.css';

const STACK = [
  'PostgreSQL',
  'SQL',
  'Database design',
  'Indexing & query optimization',
  'JavaScript',
  'HTML & CSS',
  'Git',
  'Node.js',
  'Express',
  'React',
  'Next.js',
  'REST APIs',
  'Figma',
  'Vercel',
  'Linux',
  'MongoDB',
  'Azure',
  'UX/UI design',
  'pgvector',
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">

      <div className={`reveal section-head`}>
        <div className="section-tag">§ 03 — Stack</div>
        <h2 className="section-h2">Tools & Technologies</h2>
      </div>

      <p className={`reveal ${styles.subtitle}`} data-delay="1">
        A mix of things, some more than others.
      </p>

      <ul className={`reveal ${styles.tags}`} data-delay="1">
        {STACK.map((name) => (
          <li key={name} className={styles.tag}>{name}</li>
        ))}
      </ul>

    </section>
  );
}
