import styles from './about.module.css';

const timeline = [
  {
    year: '2022 —',
    loc: 'Denmark',
    title: 'Web Development Degree',
    desc: 'Moved to Denmark and did a web dev degree. First real projects. Realised this is what I like to do.',
    idx: '001',
  },
  {
    year: '2024 —',
    loc: <><span lang="fi">VAMK</span> · Finland</>,
    title: 'Business IT',
    desc: <>Back in Finland, studying Business IT, where software dev meets business systems. Web Design and Databases & APIs have been my favourite courses so far.</>,
    idx: '002',
  },
  {
    year: 'now ——',
    loc: <><span lang="fi">VAMK</span> · <span lang="fi">Vaasa</span></>,
    title: 'Trainee, RDI project',
    desc: <>Building a web and mobile app powered by generative AI: LLM integration and testing, backend work, and piloting it with real users.</>,
    idx: '003',
    accent: true,
  },
];

export default function About() {
  return (
    <section className={styles.section} id="about">

      <div className={`reveal section-head`}>
        <div className="section-tag">§ 01 — About</div>
        <h2 className="section-h2">A bit <em>/</em> about me</h2>
      </div>

      <div className={styles.grid}>
        {/* Prose */}
        <div className={`reveal ${styles.prose}`} data-delay="1">
          <p>
            I have a{' '}
            <span className={styles.highlight}>web development degree from Denmark</span>
            {' '}and I&apos;m in my third year of Business IT at <span lang="fi">VAMK</span>. My
            courses so far have covered databases, APIs, cloud services, and UI/UX.{' '}
            <em>Databases and APIs was my favourite.</em>
          </p>
          <p>
            I learn by building real projects. Most projects are solo, some are group.
            I&apos;ve done fullstack work and I&apos;m comfortable going from schema
            to frontend. I like building websites and handling the data behind them, and keeping them running well over time.
          </p>
          <p>
            Right now I work as a trainee in an RDI project at <span lang="fi">VAMK</span>, where we&apos;re
            building a web and mobile app powered by generative AI. I handle LLM integration
            and testing, backend development, and piloting the app with its target users. The
            setup is model-agnostic, so the underlying LLM can be swapped as the technology
            evolves. It&apos;s my first time taking an AI feature from a course exercise to
            something people actually use, and that&apos;s the part I find most interesting.
          </p>
          <p className={styles.proseMono}>
            <span className={styles.promoAccent}>$</span>{' '}
            currently: Learning Python.
          </p>
        </div>

        {/* Aside — KV cards */}
        <div className={`reveal ${styles.aside}`} data-delay="2">
          <div className={styles.kvCard}>
            <div className={styles.kvLabel}>./identity.cfg</div>
            <div className={styles.kv}><span className={styles.kvK}>name</span><span className={styles.kvV}>Tiia <span lang="fi">Pitkänen</span></span></div>
            <div className={styles.kv}><span className={styles.kvK}>role</span><span className={styles.kvV}>Business IT · Y3</span></div>
            <div className={styles.kv}><span className={styles.kvK}>work</span><span className={styles.kvV}>RDI trainee · <span lang="fi">VAMK</span></span></div>
            <div className={styles.kv}><span className={styles.kvK}>based</span><span className={styles.kvV}><span lang="fi">Vaasa</span>, FI</span></div>
            <div className={styles.kv}><span className={styles.kvK}>languages</span><span className={styles.kvV}>FI / EN / a bit of DA</span></div>
            <div className={styles.kv}><span className={styles.kvK}>interests</span><span className={`${styles.kvV} ${styles.kvAccent}`}>full-stack · backend · data · AI </span></div>
            <div className={styles.kv}><span className={styles.kvK}>avoid</span><span className={styles.kvV}>unoptimized database schemas</span></div>
          </div>

        </div>
      </div>

      {/* Timeline */}
      <div className={`reveal ${styles.timeline}`} data-delay="1">
        {timeline.map((item) => (
          <div key={item.idx} className={styles.tlRow} data-hover>
            <div className={`${styles.tlYear} ${item.accent ? styles.tlYearAmber : ''}`}>{item.year}</div>
            <div className={styles.tlLoc}>{item.loc}</div>
            <div className={styles.tlMain}>
              <div className={styles.tlTitle}>{item.title}</div>
              <div className={styles.tlDesc}>{item.desc}</div>
            </div>
            <div className={styles.tlIdx}>{item.idx}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
