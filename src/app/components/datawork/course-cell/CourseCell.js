"use client";
import { useState, useEffect } from "react";
import styles from "./course-cell.module.css";
import dataStyles from "../datawork.module.css";
import ProjectModal from "../project-modal/ProjectModal";

export default function CourseCell({ course, index }) {
  const [open, setOpen] = useState(false);
  const hasProject = Boolean(course.project);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={`${styles.cell} ${styles[course.span.replace(' ', '_')]}`}
        onClick={hasProject ? () => setOpen(true) : undefined}
        style={hasProject ? { cursor: "pointer" } : undefined}
        data-hover={hasProject ? true : undefined}
      >
        <span className={styles.cellNum}>{String(index + 1).padStart(2, '0')}</span>
        <span className={`${styles.cellTag} ${dataStyles[course.tagClass]}`}>{course.tag}</span>
        <h3 className={styles.cellTitle}>{course.title}</h3>
        <div className={styles.cellBody}>{course.body}</div>
        {hasProject
          ? <span className={styles.cellLink}>view project →</span>
          : <span className={styles.cellSoon}>coming soon</span>
        }
      </div>

      {open && (
        <ProjectModal course={course} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
