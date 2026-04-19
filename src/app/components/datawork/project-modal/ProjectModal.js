"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./project-modal.module.css";
import dataStyles from "../datawork.module.css";

export default function ProjectModal({ course, onClose }) {
  const [imgOpen, setImgOpen] = useState(false);
  const { project, tag, tagClass, title, institution } = course;

  return (
    <>
      {createPortal(
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

            <div className={styles.modalHeader}>
              <span className={`${styles.modalTag} ${dataStyles[tagClass]}`}>{tag}</span>
              <h3 className={styles.modalTitle}>{project.title}</h3>
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
                    <Image
                      src={project.image}
                      alt="ER diagram"
                      width={1790}
                      height={1140}
                      sizes="(max-width: 640px) 100vw, 430px"
                      className={styles.modalImage}
                      onClick={() => setImgOpen(true)}
                    />
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
        <div className={styles.lightbox} onClick={() => setImgOpen(false)}>
          <Image
            src={project.image}
            alt="ER diagram"
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
