"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./datawork.module.css";

const courses = [
  {
    id: 1,
    title: "Databases & APIs",
    tag: "Backend",
    institution: "VAMK",
    description:
      "Designed and built a relational database with a REST API layer. Covered schema design, normalization, complex queries, and data integrity through constraints and transactions.",
    topics: [
      "PostgreSQL",
      "REST API design",
      "Schema normalization",
      "CRUD operations",
      "SQL joins & views",
    ],
    takeaway:
      "Good data modeling saves you from painful rewrites later — structure first, build second.",
    project: {
      title: "Zoo Management Database",
      image: "/elaintarha/elaintarha_drawio.jpg",
      description:
        "Designed and implemented a relational database for a fictional Finnish zoo as part of a databases and APIs course. The schema covers 11 entities including animals, species, employees, visits, and tickets, with M:N junction tables, a self-referencing employee hierarchy, CHECK constraints, and indexes for query performance. Queries use JOINs, GROUP BY, self-joins, and subqueries to answer real operational questions like monthly food consumption and ticket sales by type. The database is normalized to 3NF and uses transactions to ensure data integrity across multi-step operations. Also integrated pgvector to store text embeddings, laying the groundwork for a RAG-based AI chatbot feature.",
      topics: [
        "PostgreSQL",
        "Vector embeddings (pgvector)",
        "Schema design",
        "3NF normalization",
        "SQL queries",
        "Transactions",
      ],
      takeaway:
        "Self-referencing tables and vector embeddings in the same schema. Relational and AI-ready don't have to be separate concerns.",
      snippets: [
        {
          label: "Self-referencing employee hierarchy",
          code: `CREATE TABLE tyontekija (
  id      SERIAL PRIMARY KEY,
  nimi    VARCHAR(50) NOT NULL,
  rooli   VARCHAR(50),
  palkka  NUMERIC CHECK (palkka > 0),
  esimies_id INT,
  FOREIGN KEY (esimies_id) REFERENCES tyontekija(id)
);`,
        },
        {
          label: "pgvector: AI document embeddings",
          code: `CREATE TABLE dokumentti (
  id          SERIAL PRIMARY KEY,
  sisalto     TEXT NOT NULL,
  embedding   VECTOR(1536),
  viite_taulu VARCHAR(50) CHECK (
    viite_taulu IN ('elain', 'lipputyyppi', 'yleinen')
  ),
  viite_id    INTEGER,
  luotu       TIMESTAMP DEFAULT NOW()
);`,
        },
        {
          label: "Employees above average salary (subquery)",
          code: `SELECT nimi, rooli, palkka
FROM tyontekija
WHERE palkka > (SELECT AVG(palkka) FROM tyontekija)
ORDER BY palkka DESC;`,
        },
        {
          label: "Transaction: new hire with role-specific insert",
          code: `BEGIN;
INSERT INTO tyontekija (nimi, rooli, palkka, esimies_id)
VALUES ('Petra Hoitaja', 'Eläintenhoitaja', 2800, 2)
RETURNING id;

INSERT INTO elain_hoitaja (elain_id, tyontekija_id, vastuualue)
VALUES (1, lastval(), 'Apuhoitaja');
COMMIT;`,
        },
      ],
    },
  },
  {
    id: 2,
    title: "Usability & Accessibility",
    tag: "UX",
    institution: "VAMK",
    description:
      "Evaluated and redesigned digital interfaces with a focus on WCAG compliance, usability heuristics, and inclusive design. Conducted user testing sessions and iterated based on findings.",
    topics: [
      "WCAG 2.1 guidelines",
      "Usability testing",
      "Heuristic evaluation",
      "Accessible components",
      "User research",
    ],
    takeaway:
      "Accessibility isn't a checklist — it's designing so nobody gets left behind.",
  },
  {
    id: 3,
    title: "Cloud Services",
    tag: "Infrastructure",
    institution: "VAMK",
    description:
      "Deployed and managed applications on cloud platforms. Explored virtual machines, storage, networking, and serverless services as part of hands-on infrastructure tasks.",
    topics: [
      "Microsoft Azure",
      "Cloud deployment",
      "Virtual machines",
      "Storage & networking",
      "Serverless functions",
    ],
    takeaway:
      "Cloud infrastructure is a force multiplier — small teams can run big systems.",
  },
  {
    id: 4,
    title: "B2B Marketing",
    tag: "Business",
    institution: "VAMK",
    description:
      "Developed a B2B marketing strategy for a real-world case. Covered buyer personas, lead generation, content strategy, and how marketing aligns with business development goals.",
    topics: [
      "Buyer persona development",
      "Lead generation",
      "Content & channel strategy",
      "Sales funnel",
      "Campaign planning",
    ],
    takeaway:
      "B2B marketing is about building trust over time, not just selling a product.",
  },
  {
    id: 5,
    title: "Blockchain",
    tag: "Emerging Tech",
    institution: "VAMK",
    description:
      "Explored the fundamentals of blockchain technology, including distributed ledgers, consensus mechanisms, and practical applications beyond cryptocurrency.",
    topics: [
      "Distributed ledger concepts",
      "Consensus mechanisms",
      "Smart contract basics",
      "Use cases & limitations",
      "Decentralized systems",
    ],
    takeaway:
      "Blockchain is a powerful trust mechanism — but not every problem needs a distributed ledger.",
  },
  {
    id: 6,
    title: "Web Design",
    tag: "Frontend",
    institution: "Media College Denmark",
    description:
      "Built responsive, accessible websites from scratch using HTML, CSS, and JavaScript. Focused on design systems, typography, layout, and translating visual concepts into working code.",
    topics: [
      "HTML & CSS fundamentals",
      "Responsive layouts",
      "Typography & spacing",
      "JavaScript interactivity",
      "Design systems",
    ],
    takeaway:
      "Strong fundamentals in HTML and CSS make you dangerous — frameworks come and go, the web doesn't.",
  },
];

const tagColors = {
  Backend: "#60a5fa",
  UX: "#c084fc",
  Infrastructure: "#4ade80",
  Business: "#fb923c",
  "Emerging Tech": "#f87171",
  Frontend: "#22d3ee",
};

function CourseCard({ course, index }) {
  const [open, setOpen] = useState(false);
  const [imgOpen, setImgOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);
  const tagColor = tagColors[course.tag];
  const hasProject = Boolean(course.project);

  return (
    <>
      <div
        className={`reveal ${styles.card}`}
        data-delay={String((index % 3) + 1)}
        onClick={hasProject ? () => setOpen(true) : undefined}
        style={hasProject ? { cursor: "pointer" } : undefined}
      >
        <div className={styles.cardTop}>
          <span
            className={styles.cardTag}
            style={{
              color: tagColor,
              borderColor: `${tagColor}33`,
              backgroundColor: `${tagColor}11`,
            }}
          >
            {course.tag}
          </span>
          <span className={styles.cardNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardHint}>
          {hasProject ? "View project →" : "Coming soon..."}
        </p>
      </div>

      {open && createPortal(
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <span
                className={styles.modalTag}
                style={{
                  color: tagColor,
                  borderColor: `${tagColor}33`,
                  backgroundColor: `${tagColor}11`,
                }}
              >
                {course.tag}
              </span>
              <h3 className={styles.modalTitle}>{course.project.title}</h3>
              <p className={styles.modalInstitution}>
                {course.title} — {course.institution}
              </p>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalLeft}>
                <p className={styles.modalDescription}>
                  {course.project.description}
                </p>
                <div className={styles.modalTopics}>
                  <p className={styles.topicsLabel}>Technologies</p>
                  <ul className={styles.topicsList}>
                    {course.project.topics.map((t) => (
                      <li key={t} className={styles.topicItem}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className={styles.modalTakeaway}>
                  {course.project.takeaway}
                </p>
              </div>

              <div className={styles.modalRight}>
                {course.project.image && (
                  <div className={styles.modalImageWrap}>
                    <p className={styles.topicsLabel}>ER Diagram</p>
                    <img
                      src={course.project.image}
                      alt="Entity-relationship diagram"
                      className={styles.modalImage}
                      onClick={() => setImgOpen(true)}
                    />
                  </div>
                )}
                {course.project.snippets && (
                  <div className={styles.modalSnippets}>
                    <p className={styles.topicsLabel}>SQL Snippets</p>
                    {course.project.snippets.map((s) => (
                      <div key={s.label} className={styles.snippet}>
                        <p className={styles.snippetLabel}>{s.label}</p>
                        <pre className={styles.snippetCode}>
                          <code>{s.code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      , document.body)}

      {imgOpen && createPortal(
        <div className={styles.lightbox} onClick={() => setImgOpen(false)}>
          <img
            src={course.project.image}
            alt="Entity-relationship diagram"
            className={styles.lightboxImage}
          />
        </div>
      , document.body)}
    </>
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
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
