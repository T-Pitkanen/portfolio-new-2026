import styles from './skills.module.css';

const STACK = {
  'Databases & Backend': ['PostgreSQL', 'SQL', 'Database design', 'pgvector', 'MongoDB', 'Node.js', 'Express', 'REST APIs'],
  'Frontend': ['JavaScript', 'React', 'Next.js', 'HTML & CSS'],
  'Tools & Design': ['Git', 'Figma', 'Vercel', 'UX/UI design', 'Photoshop'],
};

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

      <ul className={`reveal ${styles.stack}`} data-delay="1">
        {Object.entries(STACK).map(([category, technologies]) => (
          <li key={category} className={styles.group}>
            <span className={styles.groupTitle}>{category}</span>
            <ul className={styles.techs}>
              {technologies.map((tech) => (
                <li key={tech} className={styles.tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

    </section>
  );
}
