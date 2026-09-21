import styles from './about.module.css';

const timeline = [
  {
    year: '2022',
    loc: 'Denmark',
    title: 'Web development degree',
    desc: 'Moved to Denmark and did a web dev degree. First real projects. Realised this is what I like to do.',
  },
  {
    year: '2024',
    loc: <><span lang="fi">VAMK</span>, Finland</>,
    title: 'Business IT',
    desc: 'Back in Finland, studying Business IT, where software dev meets business systems. Web Design and Databases & APIs have been my favourite courses so far.',
  },
  {
    year: 'Now',
    loc: <><span lang="fi">VAMK</span>, <span lang="fi">Vaasa</span></>,
    title: 'Trainee, RDI project',
    desc: 'Building a web app powered by generative AI: LLM integration and testing, backend and frontend work including a full UI restyle, and piloting it with real users.',
    now: true,
  },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <h2 className="section-h2">About</h2>

      <div className={styles.grid}>
        <div className={styles.prose}>
          <p>
            I have a web development degree from Denmark and I&apos;m in my third year of Business IT
            at <span lang="fi">VAMK</span>. I learn by building real projects, and I&apos;m comfortable
            going from database schema to frontend. <em>Databases and APIs was my favourite course.</em>
          </p>
          <p>
            Right now I&apos;m a trainee in an RDI project at <span lang="fi">VAMK</span>, building a
            web app powered by generative AI. I work across the stack: LLM integration and
            testing, backend work, and a full restyle of the UI on the frontend, then piloting
            the app with its target users. It&apos;s my first time taking an AI feature from a
            course exercise to something people actually use.
          </p>
          <p className={styles.aside}>
            Finnish, English, a bit of Danish. Currently learning AI integration and AI-assisted development, plus UiPath automation and project management at school.
          </p>
        </div>

        <ol className={styles.timeline}>
        {timeline.map((item) => (
          <li key={item.title} className={`${styles.tlRow} ${item.now ? styles.tlNow : ''}`}>
            <div className={styles.tlWhen}>
              <span className={styles.tlYear}>{item.year}</span>
              <span className={styles.tlLoc}>{item.loc}</span>
            </div>
            <div className={styles.tlMain}>
              <h3 className={styles.tlTitle}>{item.title}</h3>
              <p className={styles.tlDesc}>{item.desc}</p>
            </div>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
