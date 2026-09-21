'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import styles from './projects.module.css';
import projectData from '@/data/projectData';
import { useState, useRef, useEffect } from 'react';
import useAccessibleDialog from '../hooks/useAccessibleDialog';

// Map stack strings → tag variant class
function tagVariant(code) {
  const c = code.toLowerCase();
  if (c.includes('postgres') || c.includes('sql') || c.includes('node') || c.includes('rest') || c.includes('express')) return styles.tagAcid;
  if (c.includes('next') || c.includes('react') || c.includes('html') || c.includes('css') || c.includes('js')) return styles.tagBlue;
  if (c.includes('mongo') || c.includes('base44') || c.includes('lovable')) return styles.tagAmber;
  return '';
}

const MAX_STACK_TAGS = 3;

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const dialogRef = useRef(null);

  useAccessibleDialog({
    open: modalIsOpen,
    onClose: () => setModalIsOpen(false),
    dialogRef,
  });

  const imageCount = modalProject?.image.length ?? 1;
  const prevImage = () => setCurrentImageIndex((i) => (i - 1 + imageCount) % imageCount);
  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % imageCount);

  // Arrow keys step through the gallery while it is open
  useEffect(() => {
    if (!modalIsOpen) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen, imageCount]);

  const total = String(projectData.length).padStart(2, '0');

  return (
    <section className={styles.section} id="projects">

      <div className={`reveal section-head`}>
        <div className="section-tag">§ 02 — Selected work · 2023–2025</div>
        <h2 className="section-h2">Things I&apos;ve shipped</h2>
      </div>

      {projectData.map((project, index) => {
        const num = String(index + 1).padStart(2, '0');
        const name = project.title.replace(/ - \d+$/, '');
        const tags = project.code.split(/,\s*/).filter(Boolean).slice(0, MAX_STACK_TAGS);
        const shots = project.image.length;

        return (
          <article key={project.title} className={`reveal ${styles.project}`} data-delay={String((index % 2) + 1)}>
            {/* Left: what it is, what I did */}
            <div className={styles.pBody}>
              <div className={styles.pMeta}>
                <span className={styles.pNum}>{num} / {total}</span>
                <span>{project.role} · {project.year}</span>
              </div>

              <h3 className={styles.pTitle}>{name}</h3>

              <p className={styles.pPart}>
                <span className={styles.pPartKey}>my part —</span> {project.part}
              </p>

              {project.impact && (
                <p className={styles.pDesc}>{project.impact}</p>
              )}

              <div className={styles.pFoot}>
                <div className={styles.pTags}>
                  {tags.map((t) => (
                    <span key={t} className={`${styles.pTag} ${tagVariant(t)}`}>{t}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pLink}
                    data-hover
                    aria-label={`${name} — live demo (opens in new tab)`}
                  >
                    <span aria-hidden="true">live demo ↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: one still, uncropped, with a visible way into the gallery */}
            <button
              type="button"
              className={styles.pVisual}
              data-hover
              aria-label={`Open ${name} gallery, ${shots} screenshots`}
              onClick={() => {
                setModalProject(project);
                setCurrentImageIndex(0);
                setModalIsOpen(true);
              }}
            >
              <Image
                src={project.image[0]}
                alt=""
                width={1200}
                height={600}
                sizes="(max-width: 1100px) 100vw, 50vw"
                className={styles.pImg}
              />
              <span className={styles.pVisualLabel} aria-hidden="true">
                view gallery · {shots} {shots === 1 ? 'shot' : 'shots'}
              </span>
            </button>
          </article>
        );
      })}

      {/* Lightbox modal */}
      {modalIsOpen && createPortal(
        <div
          className={styles.modalOverlay}
          onClick={() => setModalIsOpen(false)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-lightbox-title"
            tabIndex={-1}
          >
            <div className={styles.modalHead}>
              <div>
                <h2 id="project-lightbox-title" className={styles.modalTitle}>
                  {modalProject?.title.replace(/ - \d+$/, '') ?? 'Project'}
                </h2>
                {modalProject?.goal && (
                  <p className={styles.modalGoal}>{modalProject.goal}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setModalIsOpen(false)}
                className={styles.closeBtn}
                aria-label="Close gallery"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>
            <Image
              src={modalProject?.image[currentImageIndex] ?? '/test.png'}
              alt={`${modalProject?.title ?? 'Project'} screenshot ${currentImageIndex + 1} of ${imageCount}`}
              width={1600} height={900}
              className={styles.modalImg}
            />
            <div className={styles.modalNav}>
              <button
                type="button"
                className={styles.modalBtn}
                aria-label="Previous image"
                onClick={prevImage}
              ><span aria-hidden="true">←</span></button>
              <span className={styles.modalCounter} aria-live="polite">
                {currentImageIndex + 1} / {imageCount}
              </span>
              <button
                type="button"
                className={styles.modalBtn}
                aria-label="Next image"
                onClick={nextImage}
              ><span aria-hidden="true">→</span></button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
