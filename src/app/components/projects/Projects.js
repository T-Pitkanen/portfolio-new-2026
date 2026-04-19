'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import styles from './projects.module.css';
import projectData from '@/data/projectData';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { RiCloseLine } from 'react-icons/ri';

// Map stack strings → tag variant class
function tagVariant(code) {
  const c = code.toLowerCase();
  if (c.includes('postgres') || c.includes('sql') || c.includes('node') || c.includes('rest') || c.includes('express')) return styles.tagAcid;
  if (c.includes('next') || c.includes('react') || c.includes('html') || c.includes('css') || c.includes('js')) return styles.tagBlue;
  if (c.includes('mongo') || c.includes('base44') || c.includes('lovable')) return styles.tagAmber;
  return '';
}

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const total = String(projectData.length).padStart(2, '0');

  return (
    <section className={styles.section} id="projects">

      <div className={`reveal section-head`}>
        <div className="section-tag">§ 02 — Selected work · 2023–2026</div>
        <h2 className="section-h2">Things I&apos;ve <em>actually</em> shipped</h2>
      </div>

      {projectData.map((project, index) => {
        const num = String(index + 1).padStart(2, '0');
        const tags = project.code.split(/,\s*/).filter(Boolean);

        return (
          <div key={project.title} className={`reveal ${styles.project}`} data-delay={String((index % 2) + 1)}>
            {/* Left: metadata */}
            <div>
              <div className={styles.pMeta}>
                <span className={styles.pNum}>{num} / {total}</span>
                <span>{project.role} · {project.year}</span>
              </div>

              <h3 className={styles.pTitle}>
                {project.title.replace(/ - \d+$/, '')}
                <span className={styles.pYear}> / {project.year}</span>
              </h3>

              <div className={styles.pTags}>
                {(project.highlights || []).map((h) => (
                  <span key={h} className={styles.pTag}>{h}</span>
                ))}
                {tags.map((t) => (
                  <span key={t} className={`${styles.pTag} ${tagVariant(t)}`}>{t}</span>
                ))}
              </div>

              {project.impact && (
                <p className={styles.pDesc}>{project.impact}</p>
              )}

              {project.goal && (
                <div className={styles.pNote}>{project.goal}</div>
              )}

              <div className={styles.pLinks}>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" data-hover>
                    live demo ↗
                  </a>
                )}
              </div>
            </div>

            {/* Right: image slider */}
            <div
              className={styles.pVisual}
              data-hover
              onClick={() => {
                setModalProject(project);
                setCurrentImageIndex(0);
                setModalIsOpen(true);
              }}
            >
            
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className={styles.swiper}
              >
                {project.image.map((img, imgIdx) => (
                  <SwiperSlide key={img}>
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${imgIdx + 1}`}
                      width={800}
                      height={600}
                      className={styles.pImg}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.pVisualCornerBl}>role: {project.role.toLowerCase()}</div>
            </div>
          </div>
        );
      })}

      {/* Lightbox modal */}
      {modalIsOpen && createPortal(
        <div className={styles.modalOverlay} onClick={() => setModalIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalIsOpen(false)} className={styles.closeBtn}>
              <RiCloseLine />
            </button>
            <Image
              src={modalProject?.image[currentImageIndex] ?? '/test.png'}
              alt="Project screenshot"
              width={1600} height={900}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '60vh' }}
            />
            <div className={styles.modalNav}>
              <button className={styles.modalBtn} onClick={() =>
                setCurrentImageIndex((currentImageIndex - 1 + (modalProject?.image.length ?? 1)) % (modalProject?.image.length ?? 1))
              }><FaAngleLeft /></button>
              <span className={styles.modalCounter}>{currentImageIndex + 1} / {modalProject?.image.length}</span>
              <button className={styles.modalBtn} onClick={() =>
                setCurrentImageIndex((currentImageIndex + 1) % (modalProject?.image.length ?? 1))
              }><FaAngleRight /></button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
