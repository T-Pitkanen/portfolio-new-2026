import Link from "next/link";
import topics from "@/data/topics/topicsData";
import styles from "./slug.module.css";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return topics.flatMap((t) =>
    (t.subtopics || []).map((s) => ({ slug: t.slug, subtopic: s.slug }))
  );
}

export default function TopicPage({ params }) {
  const { slug, subtopic } = params;
  const topic = topics.find((t) => t.slug === slug);
  if (!topic) return notFound();

  return (
    <main className={styles.topicContainer}>
      <nav style={{ marginBottom: 30 }}>
        <Link href="/topics" className={styles.link}>
          All topics
        </Link>{" "}
        ›{" "}
        <Link href={`/topics/${topic.slug}`} className={styles.link}>
          {topic.title}
        </Link>{" "}
        › <span aria-current="page">{slug.title}</span>
      </nav>

      <h1>{topic.title}</h1>
      {topic.content?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {topic.subtopics && topic.subtopics.length > 0 && (
        <section>
          <ul className={styles.list}>
            {topic.subtopics.map((s) => (
              <li key={s.slug} className={styles.card}>
                <Link
                  href={`/topics/${topic.slug}/${s.slug}`}
                  className={styles.link}
                >
                  <h3>{s.title}</h3>
                  <p>{s.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
