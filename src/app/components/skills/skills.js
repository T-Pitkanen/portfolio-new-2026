import styles from './skills.module.css';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML & CSS', level: 'Strong' },
      { name: 'Next.js', level: 'Strong' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'Responsive Design', level: 'Strong' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js & Express', level: 'Comfortable' },
      { name: 'REST API', level: 'Comfortable' },
      { name: 'PostgreSQL', level: 'Strong' },
      { name: 'MongoDB', level: 'Comfortable' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL', level: 'Strong' },
      { name: 'ER Modeling', level: 'Strong' },
      { name: 'Schema Design', level: 'Strong' },
      { name: 'Normalization', level: 'Strong' },
      { name: 'Transactions', level: 'Comfortable' },
      { name: 'Indexing', level: 'Comfortable' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 'Strong' },
      { name: 'Figma', level: 'Comfortable' },
      { name: 'Vercel', level: 'Comfortable' },
      { name: 'Azure', level: 'Familiar' },
      { name: 'CI/CD', level: 'Familiar' },
    ],
  },
];

const levelStyles = {
  Strong:      styles.skillStrong,
  Comfortable: styles.skillComfortable,
  Familiar:    styles.skillFamiliar,
};

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>

        <p className={`reveal ${styles.label}`}>Skills</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          What I work with
        </h2>
        <p className={`reveal ${styles.legend}`} data-delay="2">
          <span className={styles.legendItem}>
            <span className={styles.legendDotStrong} /> Strong
          </span>
          <span className={styles.legendItem}>
            <span className={styles.legendDotComfortable} /> Comfortable
          </span>
          <span className={styles.legendItem}>
            <span className={styles.legendDotFamiliar} /> Familiar
          </span>
        </p>

        <div className={styles.grid}>
          {skillCategories.map((cat, catIndex) => (
            <div key={catIndex} className="reveal" data-delay={String((catIndex % 2) + 1)}>
              <h3 className={styles.categoryLabel}>{cat.category}</h3>
              <div className={styles.skillList}>
                {cat.skills.map(({ name, level }) => (
                  <span
                    key={name}
                    className={`${styles.skillTag} ${levelStyles[level]}`}
                    title={level}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
