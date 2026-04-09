import styles from "./about.module.css";

const timeline = [
  {
    year: "2022",
    title: "Web Development",
    institution: "Media College Denmark",
    description:
      "Moved to Denmark and did a web dev degree. Built my first real projects there and realized this is what I want to do.",
  },
  {
    year: "2024",
    title: "Business IT",
    institution: "VAMK, Finland",
    description:
      "Back in Finland, studying Business IT. Where software development meets business systems. Databases & APIs has been my favorite course so far.",
  },
  {
    year: "Now",
    title: "Looking for an internship",
    institution: "Anywhere in Finland",
    description:
      "Actively looking for an internship as part of my degree. Planning to relocate to the Uusimaa region and open to opportunities in South Finland and Estonia.",
  },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <p className={`reveal ${styles.label}`}></p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          A bit about me
        </h2>

        <div className={styles.grid}>
          <div className={`reveal ${styles.bio}`} data-delay="1">
            <p>
              I have a web development degree from Denmark and I&apos;m in my
              second year of Business IT at{" "}
              <span className={styles.bioHighlight}>VAMK</span>. My current
              courses cover databases, APIs, cloud services, and UX. The
              databases side has ended up being what I enjoy most.
            </p>
            <p>
              I learn by building real things. Most of my projects are solo, but
              I&apos;ve done group work too. I enjoy it because it lets me see
              other people&apos;s view of the project and learn from them.
              I&apos;ve done fullstack projects and I&apos;m comfortable going
              from schema design to frontend, but the backend and data side is
              what I actually enjoy most.
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`reveal ${styles.timelineItem}`}
              data-delay={String(index + 1)}
            >
              <div className={styles.timelineYear}>
                <p className={styles.timelineYearText}>{item.year}</p>
              </div>
              <div className={styles.timelineBody}>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineInstitution}>{item.institution}</p>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
