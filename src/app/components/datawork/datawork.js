"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./datawork.module.css";

const artifacts = [
  {
    id: "a01",
    course: "Databases",
    type: "Schema Design",
    title: "Zoo Management ER Diagram",
    description:
      "Designed a full relational schema for a zoo management system — normalized tables, junction tables for M:N relationships (animal diets, caretakers), and proper FK constraints. Built in draw.io and implemented in SQL.",
    takeaway:
      "Identifying non-obvious M:N relationships before touching the database saves a lot of refactoring later.",
    image: "/eläintarha/eläintarha_drawio.png",
  },
  {
    id: "a02",
    course: "Databases",
    type: "Exercise",
    title: "Normalization to 3NF",
    description:
      "Converted a flat table with redundancy through 1NF, 2NF, and 3NF step by step — removing partial dependencies first, then transitive ones.",
    takeaway:
      "Transitive dependencies hide in tables that look clean at first glance.",
  },
  {
    id: "a03",
    course: "Databases",
    type: "Exercise",
    title: "Transactions & ACID Properties",
    description:
      "Studied transaction isolation levels and how ACID properties prevent anomalies. Practiced index design and analyzed query execution plans.",
    takeaway:
      "Isolation levels are a tradeoff — more isolation means more locking, not always the right call.",
  },
  {
    id: "a04",
    course: "Databases",
    type: "Exercise",
    title: "Vector Databases",
    description:
      "Got introduced to vector databases — how they store embeddings, how similarity search differs from SQL, and where they fit alongside relational and document stores.",
    takeaway:
      "Vector DBs don't replace relational DBs — they solve a completely different problem.",
  },
  {
    id: "a05",
    course: "SQL & Queries",
    type: "Exercise",
    title: "Multi-table JOINs & Aggregations",
    description:
      "Wrote queries with INNER, LEFT, and FULL JOINs across 3–4 tables. Used GROUP BY with HAVING for filtered aggregations. Focused on readable SQL, not just correct SQL.",
    takeaway:
      "Writing a JOIN is easy. Writing one that makes the intent obvious is harder.",
  },
  {
    id: "a06",
    course: "SQL & Queries",
    type: "Exercise",
    title: "Subqueries & Views",
    description:
      "Practiced writing correlated and uncorrelated subqueries, and wrapped reusable logic into views. Compared view performance to inline subqueries.",
    takeaway:
      "Views are great for readability but can mask performance issues if you're not careful.",
  },
  {
    id: "a07",
    course: "PostgreSQL",
    type: "Schema",
    title: "PostgreSQL Schema & Constraints",
    description:
      "Used PostgreSQL as my primary RDBMS. Practiced schema design with CHECK constraints, UNIQUE, NOT NULL, and foreign keys. Used pgAdmin for schema visualization.",
    takeaway:
      "PostgreSQL's constraint system catches data integrity issues before they ever reach the application layer.",
  },
  {
    id: "a08",
    course: "PostgreSQL",
    type: "Exercise",
    title: "Indexing & Query Optimization",
    description:
      "Explored B-tree and hash indexes. Used EXPLAIN ANALYZE to understand query plans and see where full table scans were happening.",
    takeaway:
      "An index on the wrong column can be worse than no index at all.",
  },
  {
    id: "a09",
    course: "MongoDB",
    type: "Exercise",
    title: "Document Modeling vs Relational",
    description:
      "Modeled the same domain in both MongoDB and PostgreSQL and compared the tradeoffs. Wrote queries in the MongoDB shell and used the aggregation framework.",
    takeaway:
      "MongoDB's flexibility is powerful but dangerous — schema-on-write discipline matters.",
  },
  {
    id: "a10",
    course: "Azure & Cloud",
    type: "Study",
    title: "Azure Fundamentals",
    description:
      "Worked through cloud fundamentals via Azure — storage, compute, managed databases, and the difference between IaaS vs PaaS. Got comfortable with the Azure portal.",
    takeaway:
      "Managed databases remove operational pain, but you lose visibility into what's actually happening underneath.",
  },
];

const courses = [
  "All",
  "Databases",
  "SQL & Queries",
  "PostgreSQL",
  "MongoDB",
  "Azure & Cloud",
];

const DataWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedImage, setExpandedImage] = useState(null);

  const filtered =
    activeFilter === "All"
      ? artifacts
      : artifacts.filter((a) => a.course === activeFilter);

  return (
    <>
      <section className={styles.section} id="data">
        <div className={styles.inner}>
          <p className={styles.sectionLabel} data-fade>
            02 — Coursework & Exercises
          </p>
          <div className={styles.header} data-fade data-delay="1">
            <h2 className={styles.heading}>What I&apos;m studying</h2>
            <p className={styles.subheading}>
              Exercises, schemas, and things I&apos;ve built to understand them.
              Each card is one artifact — what I made and what I took from it.
            </p>
          </div>

          <div className={styles.filters} data-fade data-delay="2">
            {courses.map((course) => (
              <button
                key={course}
                className={`${styles.filterBtn} ${
                  activeFilter === course ? styles.filterActive : ""
                }`}
                onClick={() => setActiveFilter(course)}
              >
                {course}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((artifact) => (
              <div
                key={artifact.id}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <span className={styles.courseTag}>{artifact.course}</span>
                  <span className={styles.typeTag}>{artifact.type}</span>
                </div>
                <h3 className={styles.cardTitle}>{artifact.title}</h3>
                <p className={styles.cardDesc}>{artifact.description}</p>
                <p className={styles.takeaway}>
                  <span className={styles.takeawayLabel}>Takeaway — </span>
                  {artifact.takeaway}
                </p>
                {artifact.image && (
                  <button
                    className={styles.imageThumb}
                    onClick={() => setExpandedImage(artifact)}
                    aria-label={`View ${artifact.title} image`}
                  >
                    <Image
                      src={artifact.image}
                      alt={artifact.title}
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                    <span className={styles.imageOverlay}>View ↗</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {expandedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setExpandedImage(null)}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setExpandedImage(null)}
            >
              ✕
            </button>
            <p className={styles.lightboxTitle}>{expandedImage.title}</p>
            <Image
              src={expandedImage.image}
              alt={expandedImage.title}
              width={1200}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DataWork;
