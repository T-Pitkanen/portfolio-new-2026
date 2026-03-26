import styles from './about.module.css';

const stats = [
  { value: '5+', label: 'Years learning' },
  { value: '2', label: 'Schools' },
  { value: 'Vaasa', label: 'Based in, FI' },
  { value: 'Open', label: 'To work' },
];

const timeline = [
  {
    year: '2020',
    title: 'Web Development',
    institution: 'Media College Denmark',
    description: 'Studied modern frontend technologies, web standards, and responsive design fundamentals.',
  },
  {
    year: '2022',
    title: 'Database Engineering',
    institution: 'Self-directed',
    description: 'Deep dive into PostgreSQL, schema design, normalization, and relational data modeling.',
  },
  {
    year: '2024',
    title: 'Business IT',
    institution: 'VAMK, Finland',
    description: 'Building full-stack solutions with a focus on backend architecture and data-driven systems.',
  },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>

        <p className={`reveal ${styles.label}`}>About</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          Building with purpose
        </h2>

        <div className={styles.grid}>
          {/* Bio */}
          <div className={`reveal ${styles.bio}`} data-delay="1">
            <p>
              I&apos;m a developer fascinated by how systems connect. Whether it&apos;s database architecture or user interfaces, I approach every problem with intention.
            </p>
            <p>
              I studied at <span className={styles.bioHighlight}>Media College Denmark</span> and I&apos;m currently completing my degree at <span className={styles.bioHighlight}>VAMK</span> in Finland — exploring full-stack development with a strong emphasis on backend engineering.
            </p>
          </div>

          {/* Stats grid */}
          <div className={`reveal ${styles.statsGrid}`} data-delay="2">
            {stats.map(({ value, label }) => (
              <div key={label} className={`card ${styles.statCard}`}>
                <p className={styles.statValue}>{value}</p>
                <p className={styles.statLabel}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`reveal ${styles.timelineItem}`}
              data-delay={String(index + 1)}
            >
              <div className={styles.timelineYear}>
                <p className={styles.timelineYearText}>{item.year}</p>
              </div>
              <div className={styles.timelineBody}>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineInstitution}>{item.institution}</p>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
