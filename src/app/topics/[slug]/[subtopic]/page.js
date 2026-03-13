import Link from "next/link";
import Image from "next/image";
import topics from "@/data/topics/topicsData";
import styles from "./subtopic.module.css";
import { notFound } from "next/navigation";
import TableOfContents from "@/app/components/toc/toc";

export async function generateStaticParams() {
  return topics.flatMap((t) =>
    (t.subtopics || []).map((s) => ({ slug: t.slug, subtopic: s.slug }))
  );
}

function RenderBlock({ block }) {
  if (!block) return null;

  if (typeof block === "string") {
    const text = block.trim();
    if (!text) return null;
    return <p className={styles.blockParagraph}>{text}</p>;
  }

  const type = block.type;

  if (type === "header") {
    const txt = block.text?.trim();
    if (!txt) return null;
    return <h2 className={styles.blockHeader}>{txt}</h2>;
  }

  if (type === "subheader") {
    const txt = block.text?.trim();
    if (!txt) return null;
    return <h3 className={styles.blockSubheader}>{txt}</h3>;
  }



  if (type === "paragraph") {
    const txt = block.text?.trim();
    if (!txt) return null;
    return <p className={styles.blockParagraph}>{txt}</p>;
  }

  if (type === "list") {
    const items = Array.isArray(block.items) ? block.items.filter(Boolean) : [];
    if (items.length === 0) return null;
    return (
      <ul className={styles.listBlock}>
        {items.map((it, i) => (
          <li key={i} className={styles.listItem}>
            {typeof it === "string" ? it : String(it)}
          </li>
        ))}
      </ul>
    );
  }

  if (type === "image") {
    if (!block.src) return null;
    const sizeClass = block.size ? `figure--${block.size}` : "figure--medium";
    const cls = `figure ${sizeClass}`;
    return (
      <figure className={cls}>
        <Image
          src={block.src}
          alt={block.alt || ""}
          width={850}
          height={500}
          style={{ width: "100%", height: "auto" }}
          className={styles.blockImage}
        />
        {block.caption && (
          <figcaption className={styles.caption}>{block.caption}</figcaption>
        )}
      </figure>
    );
  }

  if (type === "section") {
    const children = Array.isArray(block.children) ? block.children : [];
    const hasRenderable = children.some((c) => {
      if (!c) return false;
      if (typeof c === "string") return !!c.trim();
      if (c.type === "image") return !!c.src;
      return (
        !!(c.text && String(c.text).trim()) ||
        (Array.isArray(c.children) && c.children.length)
      );
    });
    if (!hasRenderable) return null;

    return (
      <section className={styles.section}>
        {block.title && <h3 className={styles.sectionTitle}>{block.title}</h3>}
        {children.map((child, i) => (
          <RenderBlock key={i} block={child} />
        ))}
      </section>
    );
  }

  return null;
}

export default function SubtopicPage({ params }) {
  const { slug, subtopic } = params;
  const topic = topics.find((t) => t.slug === slug);
  const item = topic?.subtopics?.find((s) => s.slug === subtopic);
  if (!topic || !item) return notFound();

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
        › <span aria-current="page">{item.title}</span>
      </nav>

      <h1 className={styles.title}>{item.title}</h1>

      <div className={styles.topicInner}>
        <article
          id="article-content"
          className={styles.content}
          data-article-content
        >
          {Array.isArray(item.content) &&
            item.content.map((block, i) => (
              <RenderBlock key={i} block={block} />
            ))}
        </article>
        <TableOfContents />
      </div>
    </main>
  );
}
