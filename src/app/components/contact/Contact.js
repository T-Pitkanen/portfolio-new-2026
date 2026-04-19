'use client';
import { useState } from 'react';
import styles from './contact.module.css';

const EMAIL = 'tiia1.pitkanen@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className={styles.section} id="contact">

      <div className={`reveal section-head`}>
        <div className="section-tag">§ 05 — Contact</div>
        <h2 className="section-h2">Let&apos;s <em>/</em> talk</h2>
      </div>

      <div className={`reveal ${styles.grid}`} data-delay="1">
        {/* Left — large serif heading */}
        <div className={styles.left}>
          <h2 className={styles.bigHeading}>
            Hire<br />a <em>curious</em><br />student.
          </h2>
          <p className={styles.sub}>
            Looking for an internship in Finland — backend, full-stack, or data-heavy roles.
            Happy to hear about anything adjacent.
          </p>
        </div>

        {/* Right — contact blocks */}
        <div className={styles.right}>
          <div className={styles.block}>
            <span className={styles.blockKey}>email</span>
            <span className={styles.blockVal}>
              <button onClick={handleCopy} className={styles.emailBtn} data-hover>
                {copied ? '✓ copied' : EMAIL}
              </button>
            </span>
          </div>
          <div className={styles.block}>
            <span className={styles.blockKey}>github</span>
            <span className={styles.blockVal}>
              <a href="https://github.com/T-Pitkanen" target="_blank" rel="noopener noreferrer" data-hover>
                github.com/T-Pitkanen
              </a>
            </span>
          </div>
          <div className={styles.block}>
            <span className={styles.blockKey}>linkedin</span>
            <span className={styles.blockVal}>
              <a href="https://www.linkedin.com/in/tiia-pitk%C3%A4nen/" target="_blank" rel="noopener noreferrer" data-hover>
                in/tiia-pitkanen
              </a>
            </span>
          </div>
          <div className={styles.block}>
            <span className={styles.blockKey}>location</span>
            <span className={styles.blockVal}>Vaasa · open to Uusimaa / Estonia</span>
          </div>
          <div className={styles.block}>
            <span className={styles.blockKey}>available</span>
            <span className={`${styles.blockVal} ${styles.blockAccent}`}>● Summer 2027 · 3–6 month internship</span>
          </div>

          <div className={styles.btnRow}>
            <a href="/Tiia_Pitkanen_CV.pdf" className={`${styles.btn} ${styles.btnPrimary}`} data-hover>
              <span>Download CV</span><span className={styles.arrow}>↓</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
