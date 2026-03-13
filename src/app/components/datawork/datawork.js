"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./datawork.module.css";

const categories = [
  {
    id: "cat-01",
    title: "Databases",
    description: "Core database concepts and design",
    subcategories: [
      {
        id: "sub-01",
        title: "Normalization",
        description:
          "Working through 1NF, 2NF, and 3NF — understanding why redundancy causes problems and how to eliminate it properly. Currently studying BCNF and functional dependencies.",
      },
      {
        id: "sub-02",
        title: "ER Diagrams",
        description:
          "Designing entity-relationship diagrams to model real-world systems before touching any database. Practiced identifying entities, attributes, and relationships — including cardinality and participation constraints.",
        image: "/eläintarha/eläintarha_drawio.png",
        details:
          "Designed a relational database schema for a zoo management system. Includes normalized tables, junction tables for many-to-many relationships like animal diets and caretakers, and proper foreign key constraints. Built the ER diagram in draw.io and implemented it in SQL.",
      },
      {
        id: "sub-03",
        title: "Joins & Group By",
        description:
          "Writing queries with multi-table JOINs, aggregations, subqueries, and views. Focused on writing clean, readable SQL and understanding how the query optimizer works.",
      },
      {
        id: "sub-04",
        title: "Vector Databases",
        description:
          "Got introduced to vector databases and how they differ from relational and document databases. Interesting especially in the context of AI and search.",
      },
      {
        id: "sub-05",
        title: "Transactions & Indexing",
        description:
          "Understanding ACID properties, transaction isolation levels, and how indexing affects query performance. Practicing index design and query optimization.",
      },
      {
        id: "sub-06",
        title: "Database Design",
        description:
          "End-to-end database design process from requirements to implementation. Includes schema design, normalization, and proper constraint management.",
      },
    ],
  },
  {
    id: "cat-02",
    title: "SQL & Queries",
    description: "SQL fundamentals and query writing",
    subcategories: [
      {
        id: "sub-sql-01",
        title: "SELECT Statements",
        description: "Basic to advanced SELECT queries with WHERE, ORDER BY, and LIMIT clauses.",
      },
      {
        id: "sub-sql-02",
        title: "Aggregations",
        description:
          "Using aggregate functions like COUNT, SUM, AVG, MIN, MAX with GROUP BY and HAVING clauses.",
      },
    ],
  },
  {
    id: "cat-03",
    title: "PostgreSQL",
    description: "PostgreSQL-specific features and administration",
    subcategories: [
      {
        id: "sub-pg-01",
        title: "Schema Design",
        description:
          "Using PostgreSQL as my primary relational database. Practicing schema design, constraints, indexing basics.",
      },
      {
        id: "sub-pg-02",
        title: "Advanced Features",
        description: "Working with psql, pgAdmin, and PostgreSQL-specific features.",
      },
    ],
  },
  {
    id: "cat-04",
    title: "MongoDB",
    description: "Document-oriented databases",
    subcategories: [
      {
        id: "sub-mongo-01",
        title: "Document Modeling",
        description:
          "Learning document-oriented data modeling — how it differs from relational, when it makes sense.",
      },
      {
        id: "sub-mongo-02",
        title: "Queries & Aggregation",
        description:
          "Writing queries in MongoDB shell and using the aggregation framework.",
      },
    ],
  },
  {
    id: "cat-05",
    title: "Azure & Cloud",
    description: "Cloud fundamentals and services",
    subcategories: [
      {
        id: "sub-azure-01",
        title: "Cloud Fundamentals",
        description:
          "Getting familiar with cloud fundamentals through Azure. Working through concepts like storage, compute, and managed databases.",
      },
    ],
  },
];

const SubcategoryList = ({ category, onBack, onSelectSubcategory }) => {
  return (
    <div className={styles.subcategoryView}>
      <button className={styles.backBtn} onClick={onBack}>
        ← Back
      </button>

      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{category.title}</h2>
        <p className={styles.categoryDescription}>{category.description}</p>
      </div>

      <div className={styles.subcategoryList}>
        {category.subcategories.map((sub, i) => (
          <div
            key={sub.id}
            className={styles.subcategoryCard}
            onClick={() => onSelectSubcategory(sub)}
            data-fade
            data-delay={String(i % 4)}
          >
            <h3 className={styles.subcategoryTitle}>{sub.title}</h3>
            <p className={styles.subcategoryDesc}>{sub.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DetailModal = ({ subcategory, onClose, onBack }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.backBtnModal} onClick={onBack}>
            ← Back
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.detailHeader}>
          <h3 className={styles.detailTitle}>{subcategory.title}</h3>
        </div>

        <p className={styles.detailDesc}>{subcategory.description}</p>

        {subcategory.details && (
          <p className={styles.detailExt}>{subcategory.details}</p>
        )}

        {subcategory.image && (
          <div className={styles.detailImage}>
            <Image
              src={subcategory.image}
              alt={subcategory.title}
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

const DataWork = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBackFromSubcategories = () => {
    setSelectedCategory(null);
  };

  const handleBackFromDetail = () => {
    setSelectedSubcategory(null);
  };

  const handleCloseModal = () => {
    setSelectedSubcategory(null);
  };

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
              Coursework and exercises from what I&apos;m currently studying.
            </p>
          </div>

          {!selectedCategory ? (
            <div className={styles.grid}>
              {categories.map((cat, i) => (
                <div
                  key={cat.id}
                  className={`${styles.card} ${styles.clickable}`}
                  data-fade
                  data-delay={String(i % 4)}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardDesc}>{cat.description}</p>
                  <div className={styles.cardFooter}>
                    {cat.subcategories.length} topics
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <SubcategoryList
              category={selectedCategory}
              onBack={handleBackFromSubcategories}
              onSelectSubcategory={handleSubcategoryClick}
            />
          )}
        </div>
      </section>

      {selectedSubcategory && (
        <DetailModal
          subcategory={selectedSubcategory}
          onClose={handleCloseModal}
          onBack={handleBackFromDetail}
        />
      )}
    </>
  );
};

export default DataWork;
