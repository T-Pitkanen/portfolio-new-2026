import Link from "next/link";
import topics from "@/data/topics/topicsData";
import styles from "./topics.module.css";

export default function TopicsIndex() {
  return (
    <main className={styles.container}>
      <Link href="/" className={styles.back}>← Back</Link>
      <h1>All Topics</h1>
      <p className={styles.intro}>Notes and articles from my studies.</p>
      <ul className={styles.list}>
        {topics.map((t) => (
          <li key={t.slug} className={styles.card}>
            <Link href={`/topics/${t.slug}`} className={styles.link}>
              <h2>{t.title}</h2>
              <p>{t.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
