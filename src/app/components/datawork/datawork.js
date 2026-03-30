'use client';
import styles from './datawork.module.css';

const courses = [
  {
    id: 1,
    title: 'Databases & APIs',
    tag: 'Backend',
    institution: 'VAMK',
    description:
      'Designed and built a RESTful API backed by a relational database. Covered schema design, normalization, and connecting a frontend to data through clean API endpoints.',
    topics: ['PostgreSQL', 'REST API design', 'Schema normalization', 'CRUD operations', 'SQL joins & views'],
    takeaway: 'Good data modeling saves you from painful rewrites later — structure first, build second.',
  },
  {
    id: 2,
    title: 'Usability & Accessibility',
    tag: 'UX',
    institution: 'VAMK',
    description:
      'Evaluated and redesigned digital interfaces with a focus on WCAG compliance, usability heuristics, and inclusive design. Conducted user testing sessions and iterated based on findings.',
    topics: ['WCAG 2.1 guidelines', 'Usability testing', 'Heuristic evaluation', 'Accessible components', 'User research'],
    takeaway: "Accessibility isn't a checklist — it's designing so nobody gets left behind.",
  },
  {
    id: 3,
    title: 'Cloud Services',
    tag: 'Infrastructure',
    institution: 'VAMK',
    description:
      'Deployed and managed applications on cloud platforms. Explored virtual machines, storage, networking, and serverless services as part of hands-on infrastructure tasks.',
    topics: ['Microsoft Azure', 'Cloud deployment', 'Virtual machines', 'Storage & networking', 'Serverless functions'],
    takeaway: 'Cloud infrastructure is a force multiplier — small teams can run big systems.',
  },
  {
    id: 4,
    title: 'B2B Marketing',
    tag: 'Business',
    institution: 'VAMK',
    description:
      'Developed a B2B marketing strategy for a real-world case. Covered buyer personas, lead generation, content strategy, and how marketing aligns with business development goals.',
    topics: ['Buyer persona development', 'Lead generation', 'Content & channel strategy', 'Sales funnel', 'Campaign planning'],
    takeaway: 'B2B marketing is about building trust over time, not just selling a product.',
  },
  {
    id: 5,
    title: 'Blockchain',
    tag: 'Emerging Tech',
    institution: 'VAMK',
    description:
      'Explored the fundamentals of blockchain technology, including distributed ledgers, consensus mechanisms, and practical applications beyond cryptocurrency.',
    topics: ['Distributed ledger concepts', 'Consensus mechanisms', 'Smart contract basics', 'Use cases & limitations', 'Decentralized systems'],
    takeaway: 'Blockchain is a powerful trust mechanism — but not every problem needs a distributed ledger.',
  },
  {
    id: 6,
    title: 'Web Design',
    tag: 'Frontend',
    institution: 'Media College Denmark',
    description:
      'Built responsive, accessible websites from scratch using HTML, CSS, and JavaScript. Focused on design systems, typography, layout, and translating visual concepts into working code.',
    topics: ['HTML & CSS fundamentals', 'Responsive layouts', 'Typography & spacing', 'JavaScript interactivity', 'Design systems'],
    takeaway: "Strong fundamentals in HTML and CSS make you dangerous — frameworks come and go, the web doesn't.",
  },
];

const tagColors = {
  Backend: '#60a5fa',
  UX: '#c084fc',
  Infrastructure: '#4ade80',
  Business: '#fb923c',
  'Emerging Tech': '#f87171',
  Frontend: '#22d3ee',
};


function CourseCard({ course, index }) {
  const tagColor = tagColors[course.tag];

  return (
    <div
      className={`reveal ${styles.card}`}
      data-delay={String((index % 3) + 1)}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardTag} style={{ color: tagColor, borderColor: `${tagColor}33`, backgroundColor: `${tagColor}11` }}>
          {course.tag}
        </span>
        <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className={styles.cardTitle}>{course.title}</h3>
      <p className={styles.cardHint}>Coming soon...</p>
    </div>
  );
}

export default function Coursework() {
  return (
    <section className={styles.section} id="coursework">
      <div className={styles.inner}>
        <p className={`reveal ${styles.label}`}>Learning</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          Course projects
        </h2>
        <p className={`reveal ${styles.subtext}`} data-delay="2">
          A selection of project work from my studies.
        </p>

        <div className={styles.grid}>
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
