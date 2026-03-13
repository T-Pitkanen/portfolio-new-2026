"use client";
import { useEffect, useState, useRef } from "react";
import styles from "@/app/components/toc/toc.module.css";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-+/g, "-");
}

export default function Toc() {
  const [headings, setHeadings] = useState([]);
  const [open, setOpen] = useState(true);
  const observerRef = useRef(null);

  function findArticle() {
    return (
      document.getElementById("article-content") ||
      document.querySelector("article#article-content") ||
      document.querySelector(".content") ||
      document.querySelector("article")
    );
  }

  function scanAndSet(articleEl) {
    if (!articleEl) return [];
    const nodes = Array.from(articleEl.querySelectorAll("h1, h2")).filter(
      (n) => (n.textContent || "").trim()
    );
    if (nodes.length === 0) return [];

    const seen = new Map();
    const list = nodes.map((h) => {
      const text = (h.textContent || "").trim();
      let id = h.id || slugify(text);
      const count = seen.get(id) || 0;
      if (count > 0) id = `${id}-${count}`;
      seen.set(id, count + 1);
      h.id = id;
      return { id, text, level: Number(h.tagName.replace("H", "")) };
    });
    setHeadings(list);
    return list;
  }

  useEffect(() => {
    let article = findArticle();
    const found = scanAndSet(article);
    if (found.length) return;

    const mo = new MutationObserver(() => {
      article = findArticle();
      if (article) {
        const got = scanAndSet(article);
        if (got.length) {
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });
    observerRef.current = mo;

    // cleanup
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  function go(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    if (window.innerWidth < 768) setOpen(false);
  }

  return (
    <aside className={`${styles.toc} ${open ? styles.open : styles.closed}`} aria-hidden={headings.length===0}>
      <div className={styles.tocHeader}>
        <strong>On this page</strong>
        <button className={styles.toggle} onClick={() => setOpen((s) => !s)}>
          {open ? "Hide" : "Show"}
        </button>
      </div>

      {headings.length === 0 ? (
        <div className={styles.tocEmpty}>Loading headings…</div>
      ) : (
        <ul className={styles.tocList}>
          {headings.map((h) => (
            <li key={h.id} className={h.level >= 3 ? styles.level3 : styles.level2}>
              <a href={`#${h.id}`} onClick={(e) => go(e, h.id)}>
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}