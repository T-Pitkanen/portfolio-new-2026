import styles from './skills.module.css';

const STACK = {
  'AI in development': ['Claude Code', 'Codex', 'OpenRouter', 'LLM integration and testing'],
  'Backend and data': ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL + pgvector', 'SQL', 'Database design', 'MongoDB'],
  'Frontend': ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Vite', 'HTML & CSS'],
  'Tools and design': ['Git', 'Figma', 'Vercel', 'UX/UI design', 'Photoshop'],
};

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <h2 className="section-h2">Tools I use</h2>
      <p className={styles.subtitle}>
        These days most of my code goes through Claude Code and Codex; I spend more time on
        integration, testing and product decisions than on typing it out.
      </p>

      <dl className={styles.stack}>
        {Object.entries(STACK).map(([category, technologies]) => (
          <div key={category} className={styles.group}>
            <dt className={styles.groupTitle}>{category}</dt>
            <dd className={styles.techs}>{technologies.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
