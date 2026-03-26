import { ArrowUpRight } from 'lucide-react';
import styles from './projects.module.css';

const projects = [
  {
    title: 'Portfolio Site',
    stack: ['Next.js', 'CSS Modules'],
    description: 'Personal portfolio with CSS scroll reveal animations, floating pill navigation, and gradient mesh hero.',
    href: '#portfolio',
    number: '01',
    previewUrl: 'portfolio',
  },
  {
    title: 'Database Schema Project',
    stack: ['PostgreSQL', 'SQL'],
    description: 'Complex relational database design focusing on normalization, efficient querying, and real-world data scenarios.',
    href: '#database',
    number: '02',
    previewUrl: 'database',
  },
  {
    title: 'RAG Pipeline',
    stack: ['Python', 'Vector DBs', 'LLMs'],
    description: 'Retrieval-Augmented Generation system with semantic search, embeddings, and LLM integration.',
    href: '#rag',
    number: '03',
    previewUrl: 'rag',
  },
  {
    title: 'UI/UX Design',
    stack: ['Figma', 'User Research'],
    description: 'End-to-end product design including user research, wireframes, prototyping, and usability testing.',
    href: '#uiux',
    number: '04',
    previewUrl: 'uiux',
  },
];

function BrowserFrame({ url }) {
  return (
    <div className={styles.browserFrame}>
      {/* Browser chrome */}
      <div className={styles.browserChrome}>
        <span className={styles.browserDot} />
        <span className={styles.browserDot} />
        <span className={styles.browserDot} />
        <span className={styles.browserUrl}>
          localhost/{url}
        </span>
        <span className={styles.browserRefresh} />
      </div>
      {/* Placeholder wireframe content */}
      <div className={styles.browserBody}>
        <div className={styles.browserContent}>
          <div className={styles.wireH1} />
          <div className={styles.wireH2} />
          <div className={styles.wireH3} />
          <div className={styles.wireBlock} />
          <div className={styles.wireTags}>
            <div className={styles.wireTagAccent} />
            <div className={styles.wireTagPlain} />
          </div>
        </div>
        <div className={styles.browserSidebar} />
      </div>
      {/* Gradient overlay */}
      <div className={styles.browserGradient} />
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>

        <p className={`reveal ${styles.label}`}>Projects</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          Work I&apos;ve done
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className={`card reveal ${styles.projectCard}`}
              data-delay={String((index % 2) + 1)}
            >
              <BrowserFrame url={project.previewUrl} />

              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>{project.number}</span>
                  <ArrowUpRight size={16} className={styles.arrowIcon} />
                </div>

                <div className={styles.cardInfo}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                  <p className={styles.projectDesc}>
                    {project.description}
                  </p>
                </div>

                <div className={styles.stackTags}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.stackTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className={`reveal ${styles.note}`} data-delay="3">
          Screenshots coming soon — placeholder wireframes shown above
        </p>
      </div>
    </section>
  );
}
