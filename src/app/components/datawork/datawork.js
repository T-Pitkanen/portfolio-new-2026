'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './datawork.module.css';

const courses = [
  {
    title: 'PostgreSQL & Databases',
    institution: 'VAMK',
    topics: 'Relational design, schema normalization, ER modeling, complex JOINs',
    takeaway: 'Normalization prevents data duplication — change once, everywhere updates.',
  },
  {
    title: 'Cloud Fundamentals',
    institution: 'VAMK',
    topics: 'Azure, cloud services, deployment, infrastructure basics',
    takeaway: "Cloud is just someone else's computer — but well-managed infrastructure is valuable.",
  },
  {
    title: 'UI/UX & Web Design',
    institution: 'Media College Denmark',
    topics: 'Wireframing, usability testing, user research, design systems',
    takeaway: "Users don't care about your technical choices — they care about what works.",
  },
  {
    title: 'Web Development',
    institution: 'Media College Denmark',
    topics: 'HTML, CSS, JavaScript, responsive design, web standards',
    takeaway: 'Good fundamentals scale to any framework — build with the web, not against it.',
  },
  {
    title: 'Business Information Systems',
    institution: 'VAMK',
    topics: 'Enterprise systems, data governance, business processes, IT strategy',
    takeaway: 'Technology is a tool for business — understand the business first.',
  },
  {
    title: 'Vector Databases & RAG',
    institution: 'VAMK',
    topics: 'Embeddings, semantic search, RAG pipelines, AI-adjacent data',
    takeaway: 'RAG bridges the gap between static data and generative AI in a practical way.',
  },
];

function CourseItem({ course, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`reveal ${styles.courseItem}`} data-delay={String((index % 3) + 1)}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={styles.courseButton}
      >
        <div className={styles.courseLeft}>
          <span className={styles.courseNumber}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className={styles.courseInfo}>
            <p className={styles.courseTitle}>{course.title}</p>
            <p className={styles.courseInstitution}>{course.institution}</p>
          </div>
        </div>
        <ChevronDown
          size={16}
          className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}
        />
      </button>

      <div className={`${styles.accordion} ${expanded ? styles.accordionOpen : ''}`}>
        <div className={styles.accordionBody}>
          <p className={styles.courseTopics}>{course.topics}</p>
          <p className={styles.courseTakeaway}>
            &ldquo;{course.takeaway}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Coursework() {
  return (
    <section className={styles.section} id="coursework">
      <div className={styles.inner}>

        <p className={`reveal ${styles.label}`}>Learning</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          Key coursework
        </h2>
        <p className={`reveal ${styles.subtext}`} data-delay="2">
          Click any course to expand details and takeaways.
        </p>

        <div className={styles.list}>
          {courses.map((course, index) => (
            <CourseItem key={index} course={course} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
