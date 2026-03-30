'use client';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download, Copy, Check } from 'lucide-react';
import styles from './contact.module.css';

const EMAIL = 'tiia1.pitkanen@gmail.com';

const socialLinks = [
  { href: 'https://github.com/T-Pitkanen', icon: FaGithub, label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/tiia-pitk%C3%A4nen/', icon: FaLinkedin, label: 'LinkedIn', external: true },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.glowBg}>
        <div className={styles.glowOrb} />
      </div>

      <div className={styles.inner}>
        <p className={`reveal ${styles.label}`}>Contact</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          Get in touch
        </h2>
        <p className={`reveal ${styles.subtext}`} data-delay="2">
          I&apos;m looking for an internship in Finland. Open to backend, full-stack, or data-heavy roles. Happy to hear about other positions too.
        </p>

        <div className={`reveal ${styles.centered}`} data-delay="1">
          <p className={styles.colLabel}>Email</p>
          <button onClick={handleCopy} className={styles.emailBlock}>
            <span className={styles.emailAddress}>{EMAIL}</span>
            <span className={styles.copyIcon}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </span>
          </button>

          <a href="/Tiia_Pitkanen_CV.pdf" className={styles.cvButton}>
            <Download size={15} />
            Download CV
          </a>

          <p className={styles.colLabel}>Find me on</p>
          <div className={styles.socialLinks}>
            {socialLinks.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={styles.socialLink}
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
