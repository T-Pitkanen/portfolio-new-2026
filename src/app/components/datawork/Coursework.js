"use client";
import { useState } from "react";
import styles from "./datawork.module.css";
import courses from "@/data/courses";
import ProjectModal from "./project-modal/ProjectModal";

function CourseCell({ course, index }) {
  const [open, setOpen] = useState(false);
  const hasProject = Boolean(course.project);

  const cellClass = `${styles.cell} ${styles[course.span.replace(' ', '_')]}`;
  const content = (
    <>
      <span className={styles.cellNum}>{String(index + 1).padStart(2, '0')}</span>
      <span className={`${styles.cellTag} ${styles[course.tagClass]}`}>{course.tag}</span>
      <h3 className={styles.cellTitle}>{course.title}</h3>
      <div className={styles.cellBody}>{course.body}</div>
      {hasProject
        ? <span className={styles.cellLink}>view project →</span>
        : <span className={styles.cellSoon}>coming soon</span>
      }
    </>
  );

  function onKey(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <>
      {hasProject ? (
        <div
          className={`${cellClass} ${styles.cellButton}`}
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={onKey}
          data-hover
          aria-label={`Open ${course.title} project details`}
        >
          {content}
        </div>
      ) : (
        <div className={cellClass} aria-disabled="true">
          {content}
        </div>
      )}

      {open && (
        <ProjectModal course={course} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

export default function Coursework() {
  return (
    <section className={styles.section} id="coursework">

      <div className={`reveal section-head`}>
        <div className="section-tag">§ 04 — Learning out loud</div>
        <h2 className="section-h2">Course <em>projects</em></h2>
      </div>

      <div className={`reveal ${styles.bento}`} data-delay="1">
        {courses.map((course, index) => (
          <CourseCell key={course.id} course={course} index={index} />
        ))}
      </div>

    </section>
  );
}
