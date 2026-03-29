import styles from './about.module.css';

const stats = [
  { value: '5+', label: 'Years learning' },
  { value: '2', label: 'Schools' },
  { value: 'Vaasa', label: 'Based in, FI' },
  { value: 'Open', label: 'To work' },
];

const timeline = [
  {
    year: '2022',
    title: 'Web Development',
    institution: 'Media College Denmark',
    description: 'Moved to Denmark and got a web development degree. Learned frontend fundamentals and discovered that building things for the web was genuinely something I wanted to keep doing.',
  },
  {
    year: '2024',
    title: 'Business IT',
    institution: 'VAMK, Finland',
    description: 'Back in Finland, studying Business IT. Applying everything I\'ve learned to full-stack projects with a strong focus on databases and backend.',
  },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>

        <p className={`reveal ${styles.label}`}></p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          A bit about me
        </h2>

        <div className={styles.grid}>
          {/* Bio */}
          <div className={`reveal ${styles.bio}`} data-delay="1">
            <p>
              I have a web development degree from Denmark and I&apos;m currently finishing my second year in Business IT at <span className={styles.bioHighlight}>VAMK</span> in Finland. I&apos;ve gotten pretty deep into databases and backend development, which has ended up being the area I enjoy most and want to keep building on.
            </p>
            <p>
              I&apos;m currently looking for an internship where I can work on backend or data-heavy projects. I learn fast when I&apos;m working on something real, so that kind of environment suits me well.
            </p>
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
