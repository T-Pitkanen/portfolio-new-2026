import styles from './about.module.css';

const timeline = [
  {
    year: '2022 —',
    loc: 'Denmark',
    title: 'Web Development Degree',
    desc: 'Moved to Denmark and did a web dev degree. First real projects. Realised this is what I wanted to do for a living.',
    idx: '001',
  },
  {
    year: '2024 —',
    loc: 'VAMK · Finland',
    title: 'Business IT',
    desc: 'Back in Finland, studying Business IT — where software dev meets business systems. Databases & APIs is the standout so far.',
    idx: '002',
  },
  {
    year: 'now ——',
    loc: 'Anywhere · Finland',
    title: 'Looking for an internship',
    desc: 'Actively applying. Planning to relocate to the Uusimaa region; open to opportunities in South Finland and Estonia too.',
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
            {' '}and I&apos;m in my second year of Business IT at VAMK. My current
            courses cover databases, APIs, cloud services, and UX —{' '}
            <em>the databases side has turned into the thing I actually look forward to.</em>
          </p>
          <p>
            I learn by building real things. Most projects are solo, some are group.
            I&apos;ve done fullstack work and I&apos;m comfortable going from schema
            to frontend, but backend and data is where I want to spend my hours.
          </p>
          <p className={styles.proseMono}>
            <span className={styles.promoAccent}>$</span>{' '}
            currently: cloud architecture &amp; APIs · database design · sharpening UX/UI craft .
          </p>
        </div>

        {/* Aside — KV cards */}
        <div className={`reveal ${styles.aside}`} data-delay="2">
          <div className={styles.kvCard}>
            <div className={styles.kvLabel}>./identity.cfg</div>
            <div className={styles.kv}><span className={styles.kvK}>name</span><span className={styles.kvV}>Tiia Pitkänen</span></div>
            <div className={styles.kv}><span className={styles.kvK}>role</span><span className={styles.kvV}>Business IT · Y2</span></div>
            <div className={styles.kv}><span className={styles.kvK}>based</span><span className={styles.kvV}>Vaasa, FI</span></div>
            <div className={styles.kv}><span className={styles.kvK}>languages</span><span className={styles.kvV}>FI / EN / a bit of DA</span></div>
            <div className={styles.kv}><span className={styles.kvK}>interests</span><span className={`${styles.kvV} ${styles.kvAccent}`}>full-stack · backend · data · APIs · analytics</span></div>
            <div className={styles.kv}><span className={styles.kvK}>avoid</span><span className={styles.kvV}>unoptimized database schemas</span></div>
          </div>

          <div className={styles.kvCard}>
            <div className={styles.kvLabel}>./current_state.json</div>
            <div className={styles.kv}><span className={styles.kvK}>systems</span><span className={styles.kvV}>cloud, apis & product strategy</span></div>
            <div className={styles.kv}><span className={styles.kvK}>recovery</span><span className={styles.kvV}>ashtanga, pilates & gym discipline</span></div>
            <div className={styles.kv}><span className={styles.kvK}>health</span><span className={styles.kvV}>database logic & longevity</span></div>
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
