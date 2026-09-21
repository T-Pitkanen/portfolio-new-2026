"use client";
import { useState } from "react";
import styles from "./datawork.module.css";
import courses from "@/data/courses";
import ProjectModal from "./project-modal/ProjectModal";

function CourseCell({ course }) {
  const [open, setOpen] = useState(false);
  const hasProject = Boolean(course.project);

  const cellClass = `${styles.cell} ${styles[course.span.replace(' ', '_')]}`;
  const content = (
    <>
      <span className={styles.cellTag}>{course.tag}</span>
      <h3 className={styles.cellTitle}>{course.title}</h3>
      <div className={styles.cellBody}>{course.body}</div>
      {hasProject
        ? <span className={styles.cellLink}>View project →</span>
        : <span className={styles.cellSoon}>Write-up coming</span>
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

      <h2 className="section-h2">Coursework</h2>

      <div className={styles.bento}>
        {courses.map((course) => (
          <CourseCell key={course.id} course={course} />
        ))}
      </div>

    </section>
  );
}
