import styles from "./about.module.css";

const primarySkills = [
  "PostgreSQL",
  "Database Design",
  "SQL",
  "Vector Databases",
  "UI Design",
  "UX/Usability",
  "React",
];

const secondarySkills = ["MongoDB", "Azure", "Next.js"];

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <p className={styles.sectionLabel} data-fade>
          01 — About
        </p>
        <div className={styles.grid} data-fade data-delay="1">
          <div className={styles.bio}>
            <h2 className={styles.heading}>
              Business IT student, into data and web dev.
            </h2>
            <p>
              I ended up in Denmark a few years ago, and while I was there I
              started a web development course, liked it, and applied for a
              degree at Media College Denmark. Finished in 2024, moved back to
              Finland, and started Business IT at VAMK in Vaasa.
            </p>
            <p>
              At VAMK I&apos;ve taken courses in databases, cloud, UI/UX and web
              design. The database course stuck with me more than most. We used
              PostgreSQL, went through schema design and normalization, and I
              liked how it all fit together. I also did a small exercise
              involving RAG, which got me curious about that space.
            </p>
            <p>
              I like building things. Fullstack work, planning out how a project
              should be structured, designing how data moves through a system. I
              just enjoy the process of making something work from start to
              finish.
            </p>
            <p>
              I don&apos;t know exactly where I&apos;ll end up yet. Ideally
              something fullstack, but I&apos;m keeping an open mind. What
              matters more to me is working on something real and being around
              people who have been doing this for a long time.
            </p>
          </div>

          <div className={styles.infoPanel}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Education</span>
              <span className={styles.infoValue}>
                VAMK — Business Information Technology
              </span>
              <span className={styles.infoValue}>
                Media College Denmark — Web Development
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Based in</span>
              <span className={styles.infoValue}>Vaasa, Finland</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Looking for</span>
              <span className={styles.infoValue}>
                Internships — data, databases, fullstack, open to more
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Email</span>
              <a
                href="mailto:tiia1.pitkanen@gmail.com"
                className={styles.infoLink}
              >
                tiia1.pitkanen@gmail.com
              </a>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Focus</span>
              <div className={styles.tags}>
                {primarySkills.map((s) => (
                  <span key={s} className={styles.tag}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Also know</span>
              <div className={styles.tags}>
                {secondarySkills.map((s) => (
                  <span
                    key={s}
                    className={`${styles.tag} ${styles.tagSecondary}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
