"use client";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./project-modal.module.css";
import dataStyles from "../datawork.module.css";
import useAccessibleDialog from "../../hooks/useAccessibleDialog";

export default function ProjectModal({ course, onClose }) {
  const [imgOpen, setImgOpen] = useState(false);
  const { project, tag, tagClass, title, institution } = course;

  const modalRef = useRef(null);
  const lightboxRef = useRef(null);

  useAccessibleDialog({ open: true, onClose, dialogRef: modalRef });
  useAccessibleDialog({
    open: imgOpen,
    onClose: () => setImgOpen(false),
    dialogRef: lightboxRef,
  });

  const titleId = `course-modal-title-${course.id ?? ''}`;

  return (
    <>
      {createPortal(
        <div className={styles.overlay} onClick={onClose} role="presentation">
          <div
            ref={modalRef}
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close project details"
            >
              <span aria-hidden="true">✕</span>
            </button>

            <div className={styles.modalHeader}>
              <span className={`${styles.modalTag} ${dataStyles[tagClass]}`}>{tag}</span>
              <h3 id={titleId} className={styles.modalTitle}>{project.title}</h3>
              <p className={styles.modalInstitution}>{title} — {institution}</p>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalLeft}>
                <p className={styles.modalDesc}>{project.description}</p>
                <div className={styles.modalTopics}>
                  <p className={styles.topicsLabel}>Technologies</p>
                  <ul className={styles.topicsList}>
                    {project.topics.map((t) => <li key={t} className={styles.topicItem}>{t}</li>)}
                  </ul>
                </div>
                <p className={styles.modalTakeaway}>{project.takeaway}</p>
              </div>
              <div className={styles.modalRight}>
                {project.image && (
                  <div className={styles.imageWrap}>
                    <p className={styles.topicsLabel}>ER Diagram</p>
                    <button
                      type="button"
                      className={styles.imageButton}
                      onClick={() => setImgOpen(true)}
                      aria-label="Enlarge ER diagram"
                    >
                      <Image
                        src={project.image}
                        alt={`ER diagram for ${project.title}`}
                        width={1790}
                        height={1140}
                        sizes="(max-width: 640px) 100vw, 430px"
                        className={styles.modalImage}
                      />
                    </button>
                  </div>
                )}
                {project.snippets && (
                  <div className={styles.snippets}>
                    <p className={styles.topicsLabel}>SQL Snippets</p>
                    {project.snippets.map((s) => (
                      <div key={s.label} className={styles.snippet}>
                        <p className={styles.snippetLabel}>{s.label}</p>
                        <pre className={styles.snippetCode}><code>{s.code}</code></pre>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {imgOpen && createPortal(
        <div
          ref={lightboxRef}
          className={styles.lightbox}
          onClick={() => setImgOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged ER diagram for ${project.title}`}
          tabIndex={-1}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setImgOpen(false)}
            aria-label="Close enlarged image"
          >
            <span aria-hidden="true">✕</span>
          </button>
          <Image
            src={project.image}
            alt={`ER diagram for ${project.title}`}
            width={1790}
            height={1140}
            sizes="100vw"
            className={styles.lightboxImage}
            priority
          />
        </div>,
        document.body
      )}
    </>
  );
}
