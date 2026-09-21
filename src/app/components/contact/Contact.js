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

      <div className={`reveal section-head`}>
        <div className="section-tag">§ 05 — Contact</div>
        <h2 className="section-h2">Let&apos;s <em>/</em> talk</h2>
      </div>

      <div className={`reveal ${styles.grid}`} data-delay="1">
        {/* Left — large serif heading */}
        <div className={styles.left}>
          <h3 className={styles.bigHeading}>
            Say hi<br />to a <em>curious</em><br />student.
          </h3>
          <p className={styles.sub}>
            Questions about a project, the coursework, or the GenAI app I&apos;m building at
            <span lang="fi"> VAMK</span>? Drop me a line.
          </p>
        </div>

        {/* Right — contact blocks */}
        <div className={styles.right}>
          <div className={styles.block}>
            <span className={styles.blockKey} id="email-label">email</span>
            <span className={`${styles.blockVal} ${styles.emailRow}`}>
              <a href={`mailto:${EMAIL}`} data-hover>{EMAIL}</a>
              <button
                type="button"
                onClick={handleCopy}
                className={styles.emailBtn}
                data-hover
                aria-describedby="email-label"
                aria-label={copied ? 'Email copied to clipboard' : `Copy email address ${EMAIL} to clipboard`}
              >
                <span aria-hidden="true">{copied ? '✓ copied' : 'copy'}</span>
              </button>
              <span role="status" aria-live="polite" className={styles.srOnly}>
                {copied ? 'Email address copied to clipboard.' : ''}
              </span>
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
            <span className={styles.blockVal}><span lang="fi">Vaasa</span>, Finland</span>
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
