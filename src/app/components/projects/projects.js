"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import projectData from "@/data/projectData";
import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Modal from "react-modal";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";

const Projects = () => {
  useEffect(() => {
    register();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  return (
    <section className={styles.section} id="web-projects">
      <div className={styles.inner}>
        <p className={styles.sectionLabel} data-fade>03 — Older Web Projects</p>

        {projectData.map((project, index) => (
          <div key={index} className={styles.projectRow} data-fade>
            <div className={styles.projectMeta}>
              <span className={styles.projectNum}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.projectDetails}>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLink}
                    >
                      View live ↗
                    </a>
                  )}
                </div>
                
                <div className={styles.metaInfo}>
                  {project.role && <span className={styles.role}>{project.role}</span>}
                  {project.year && <span className={styles.year}>{project.year}</span>}
                </div>

                {project.impact && (
                  <p className={styles.impactStatement}>{project.impact}</p>
                )}

                <p className={styles.stack}>{project.code}</p>
                
                {project.highlights && project.highlights.length > 0 && (
                  <div className={styles.highlights}>
                    {project.highlights.map((highlight, hIdx) => (
                      <span key={hIdx} className={styles.highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <p className={styles.projectGoal}>{project.goal}</p>
              </div>
            </div>

            <div className={styles.slider}>
              <swiper-container slides-per-view={1} loop autoplay>
                {project.image.map((image, imgIndex) => (
                  <swiper-slide key={imgIndex}>
                    <div
                      className={styles.slideImg}
                      onClick={() => {
                        setModalIsOpen(true);
                        setModalProject(project);
                        setCurrentImageIndex(imgIndex);
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        width={800}
                        height={600}
                        className={styles.projectImg}
                      />
                      <div className={styles.imageOverlay}>
                        <span className={styles.viewLabel}>VIEW ↗</span>
                      </div>
                    </div>
                  </swiper-slide>
                ))}
              </swiper-container>
            </div>

            {index !== projectData.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        ))}
      </div>

      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.88)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            position: "relative",
            inset: "auto",
            background: "#0e0e0e",
            border: "1px solid #1E1E1E",
            width: "90vw",
            maxWidth: "1100px",
            maxHeight: "90vh",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            borderRadius: 0,
          },
        }}
      >
        <button onClick={() => setModalIsOpen(false)} className={styles.closeButton}>
          <RiCloseLine />
        </button>

        <Image
          src={modalProject?.image[currentImageIndex] ?? "/test.png"}
          alt="Project screenshot"
          width={1600}
          height={900}
          style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "70vh" }}
        />

        <div className={styles.modalNav}>
          <button
            className={styles.modalBtn}
            onClick={() =>
              setCurrentImageIndex(
                (currentImageIndex - 1 + modalProject?.image.length) %
                  modalProject?.image.length
              )
            }
          >
            <FaAngleLeft />
          </button>
          <span className={styles.modalCounter}>
            {currentImageIndex + 1} / {modalProject?.image.length}
          </span>
          <button
            className={styles.modalBtn}
            onClick={() =>
              setCurrentImageIndex(
                (currentImageIndex + 1) % modalProject?.image.length
              )
            }
          >
            <FaAngleRight />
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
