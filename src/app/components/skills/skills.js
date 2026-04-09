import styles from "./skills.module.css";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Comfortable" },
      { name: "Next.js", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "HTML & CSS", level: "Strong" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js & Express", level: "Familiar" },
      { name: "REST API Design", level: "Comfortable" },
      { name: "MongoDB", level: "Comfortable" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: "Strong" },
      { name: "SQL", level: "Strong" },
      { name: "Database Design", level: "Strong" },
      { name: "pgvector", level: "Familiar" },
      { name: "Indexing & Query Optimization", level: "Comfortable" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "Strong" },
      { name: "Figma", level: "Comfortable" },
      { name: "Vercel", level: "Comfortable" },
      { name: "Azure", level: "Familiar" },
    ],
  },
];

const levelStyles = {
  Strong: styles.skillStrong,
  Comfortable: styles.skillComfortable,
  Familiar: styles.skillFamiliar,
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
            <div
              key={catIndex}
              className="reveal"
              data-delay={String((catIndex % 2) + 1)}
            >
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
