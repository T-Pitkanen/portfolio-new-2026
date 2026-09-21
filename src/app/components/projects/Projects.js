'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import styles from './projects.module.css';
import projectData from '@/data/projectData';
import { useState, useRef, useEffect } from 'react';
import useAccessibleDialog from '../hooks/useAccessibleDialog';

const FEATURED = 3;

const nameOf = (p) => p.title.replace(/ - \d+$/, '');

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

  const openGallery = (project) => {
    setModalProject(project);
    setCurrentImageIndex(0);
    setModalIsOpen(true);
  };

  const featured = projectData.slice(0, FEATURED);
  const rest = projectData.slice(FEATURED);

  return (
    <section className={styles.section} id="projects">
      <h2 className="section-h2">Selected work</h2>

      {/* The three that prove the most, at full size */}
      {featured.map((project) => {
        const name = nameOf(project);
        const shots = project.image.length;
        return (
          <article key={project.title} className={styles.feature}>
            <button
              type="button"
              className={styles.visual}
              aria-label={`Open ${name} gallery, ${shots} screenshots`}
              onClick={() => openGallery(project)}
            >
              <Image
                src={project.image[0]}
                alt=""
                width={1400}
                height={700}
                sizes="(max-width: 900px) 100vw, 60vw"
                className={styles.img}
              />
              <span className={styles.visualLabel} aria-hidden="true">
                {shots} screenshots
              </span>
            </button>

            <div className={styles.body}>
              <p className={styles.meta}>{project.role}, {project.year} · {project.code}</p>
              <h3 className={styles.title}>{name}</h3>
              <p className={styles.part}><em>My part:</em> {project.part}.</p>
              {project.impact && <p className={styles.desc}>{project.impact}</p>}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`${name} — live demo (opens in new tab)`}
                >
                  <span aria-hidden="true">Live demo ↗</span>
                </a>
              )}
            </div>
          </article>
        );
      })}

      {/* Everything else, as a list */}
      <h3 className={styles.moreHead}>Earlier projects</h3>
      <ul className={styles.list}>
        {rest.map((project) => {
          const name = nameOf(project);
          return (
            <li key={project.title} className={styles.row}>
              <div className={styles.rowMain}>
                <button
                  type="button"
                  className={styles.rowTitle}
                  onClick={() => openGallery(project)}
                  aria-label={`Open ${name} gallery, ${project.image.length} screenshots`}
                >
                  {name}
                </button>
                <span className={styles.rowPart}>{project.part}.</span>
              </div>
              <span className={styles.rowMeta}>
                {project.year} · {project.code}
                {project.link && (
                  <>
                    {' · '}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.rowLink}
                       aria-label={`${name} — live demo (opens in new tab)`}>
                      <span aria-hidden="true">live ↗</span>
                    </a>
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ul>

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
                  {modalProject ? nameOf(modalProject) : 'Project'}
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
              alt={`${modalProject ? nameOf(modalProject) : 'Project'} screenshot ${currentImageIndex + 1} of ${imageCount}`}
              width={1600} height={900}
              className={styles.modalImg}
            />
            <div className={styles.modalNav}>
              <button type="button" className={styles.modalBtn} aria-label="Previous image" onClick={prevImage}>
                <span aria-hidden="true">←</span>
              </button>
              <span className={styles.modalCounter} aria-live="polite">
                {currentImageIndex + 1} / {imageCount}
              </span>
              <button type="button" className={styles.modalBtn} aria-label="Next image" onClick={nextImage}>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
