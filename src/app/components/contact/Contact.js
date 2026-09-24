'use client';
import { useState } from 'react';
import styles from './contact.module.css';

const EMAIL = 'tiia1.pitkanen@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard denied: the mailto link is right there, say nothing false
    }
  }

  return (
    <section className={styles.section} id="contact">

      <div className={styles.grid}>
        {/* Left — large serif heading */}
        <div className={styles.left}>
          <h2 className={styles.bigHeading}>
            Get in touch
          </h2>
        </div>

        {/* Right — contact blocks */}
        <div className={styles.right}>
          <div className={styles.block}>
            <span className={styles.blockKey} id="email-label">Email</span>
            <span className={`${styles.blockVal} ${styles.emailRow}`}>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button
                type="button"
                onClick={handleCopy}
                className={styles.emailBtn}
               
                aria-describedby="email-label"
                aria-label={copied ? 'Email copied to clipboard' : `Copy email address ${EMAIL} to clipboard`}
              >
                <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <span role="status" aria-live="polite" className={styles.srOnly}>
                {copied ? 'Email address copied to clipboard.' : ''}
              </span>
            </span>
          </div>
          <div className={styles.block}>
            <span className={styles.blockKey}>GitHub</span>
            <span className={styles.blockVal}>
              <a href="https://github.com/T-Pitkanen" target="_blank" rel="noopener noreferrer">
                github.com/T-Pitkanen
              </a>
            </span>
          </div>
          <div className={styles.block}>
            <span className={styles.blockKey}>LinkedIn</span>
            <span className={styles.blockVal}>
              <a href="https://www.linkedin.com/in/tiia-pitk%C3%A4nen/" target="_blank" rel="noopener noreferrer">
                in/tiia-pitkanen
              </a>
            </span>
          </div>
          <div className={styles.block}>
            <span className={styles.blockKey}>Location</span>
            <span className={styles.blockVal}><span lang="fi">Vaasa</span>, Finland</span>
          </div>

          <div className={styles.btnRow}>
            <a href="/Tiia_Pitkanen_CV.pdf" className={`${styles.btn} ${styles.btnPrimary}`}>
              Download CV
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
