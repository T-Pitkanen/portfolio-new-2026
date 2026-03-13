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
              I&apos;m a second-year student at Vaasa University of Applied
              Sciences in Finland. Before that I did a web development degree at
              Media College Denmark in 2024, so I&apos;ve got a solid foundation
              on the frontend and web side.
            </p>
            <p>
              My studies at VAMK mix business and tech. I study things like
              marketing, sales, entrepreneurship and accounting alongside more
              technical courses. Right now I&apos;m studying databases and APIs,
              cloud services, UI & UX, and web design, which is where a lot of
              my focus is at the moment.
            </p>
            <p>
              I&apos;ve been getting into PostgreSQL and MongoDB, working
              through database schemas, SQL queries, vector databases and ER
              diagrams. But I&apos;m comfortable with fullstack work too and not
              really trying to specialize too hard yet.
            </p>
            <p>
              I&apos;m looking for internship where I can actually get hands-on
              experience. Data and databases are interesting to me right now,
              but so is fullstack and low-code. I care more about finding
              somewhere I can learn from people than about a specific stack.
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
