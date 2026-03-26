import styles from './skills.module.css';

const skillCategories = [
  {
    category: 'Backend',
    skills: [
      { name: 'PostgreSQL', level: 'Strong' },
      { name: 'Schema Architecture', level: 'Strong' },
      { name: 'API Design', level: 'Comfortable' },
      { name: 'Node.js', level: 'Comfortable' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Strong' },
      { name: 'Next.js', level: 'Strong' },
      { name: 'CSS Modules', level: 'Strong' },
      { name: 'HTML & CSS', level: 'Strong' },
    ],
  },
  {
    category: 'Data',
    skills: [
      { name: 'Vector Databases', level: 'Comfortable' },
      { name: 'RAG Pipelines', level: 'Comfortable' },
      { name: 'Data Modeling', level: 'Strong' },
      { name: 'Embeddings', level: 'Familiar' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 'Strong' },
      { name: 'Figma', level: 'Comfortable' },
      { name: 'Azure', level: 'Familiar' },
      { name: 'SQL', level: 'Strong' },
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
          Technologies &amp; expertise
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
