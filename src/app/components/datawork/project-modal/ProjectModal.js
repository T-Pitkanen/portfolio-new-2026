"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./project-modal.module.css";
import dataStyles from "../datawork.module.css";
import useAccessibleDialog from "../../hooks/useAccessibleDialog";

export default function ProjectModal({ course, onClose }) {
  const [imgOpen, setImgOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { project, tag, tagClass, title, institution } = course;

  const modalRef = useRef(null);
  const lightboxRef = useRef(null);

  const images = Array.isArray(project.image) ? project.image : [project.image];
  const hasMultipleImages = images.length > 1;

  useAccessibleDialog({ open: true, onClose, dialogRef: modalRef });
  useAccessibleDialog({
    open: imgOpen,
    onClose: () => setImgOpen(false),
    dialogRef: lightboxRef,
  });

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!imgOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imgOpen, images.length]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

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
                    <p className={styles.topicsLabel}>Material</p>
                    <button
                      type="button"
                      className={styles.imageButton}
                      onClick={() => setImgOpen(true)}
                      aria-label="Enlarge"
                    >
                      <Image
                        src={images[currentImageIndex]}
                        alt={`Material for ${project.title}`}
                        width={1790}
                        height={1140}
                        sizes="(max-width: 640px) 100vw, 430px"
                        className={styles.modalImage}
                      />
                    </button>
                    {hasMultipleImages && (
                      <div className={styles.imageNav}>
                        <button
                          type="button"
                          className={styles.navButton}
                          onClick={goToPreviousImage}
                          aria-label="Previous image"
                        >
                          ←
                        </button>
                        <span className={styles.imageCounter}>
                          {currentImageIndex + 1} / {images.length}
                        </span>
                        <button
                          type="button"
                          className={styles.navButton}
                          onClick={goToNextImage}
                          aria-label="Next image"
                        >
                          →
                        </button>
                      </div>
                    )}
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
          aria-label={`Enlarged material for ${project.title}`}
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
          {hasMultipleImages && (
            <button
              type="button"
              className={styles.lightboxPrev}
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          )}
          <Image
            src={images[currentImageIndex]}
            alt={`Material for ${project.title}`}
            width={1790}
            height={1140}
            sizes="100vw"
            className={styles.lightboxImage}
            priority
          />
          {hasMultipleImages && (
            <>
              <button
                type="button"
                className={styles.lightboxNext}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
                aria-label="Next image"
              >
                →
              </button>
              <div className={styles.lightboxCounter}>
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
