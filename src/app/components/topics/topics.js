import Link from "next/link";
import styles from "./topics.module.css";
import topics from "@/data/topics/topicsData";

export default function TopicsPage({ limit }) {
  const display = typeof limit === "number" ? topics.slice(0, limit) : topics;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} data-fade>
          <p className={styles.sectionLabel}>03 — Topics</p>
          <p className={styles.sectionDesc}>
            Short articles and notes on what I&apos;m currently studying.
          </p>
        </div>

        <ul className={styles.list}>
          {display.map((t, index) => (
            <li
              key={t.slug}
              className={styles.card}
              data-fade
              data-delay={String(Math.min(index + 1, 4))}
            >
              <Link href={`/topics/${t.slug}`} className={styles.cardLink}>
                <span className={styles.cardNum}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{t.title}</h2>
                  <p className={styles.cardExcerpt}>{t.excerpt}</p>
                </div>
                <span className={styles.cardArrow}>→</span>
              </Link>
            </li>
          ))}
        </ul>

        {limit && (
          <div className={styles.footer} data-fade>
            <Link href="/topics" className={styles.allLink}>
              View all topics →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
