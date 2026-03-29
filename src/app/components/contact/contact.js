import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download, Send } from 'lucide-react';
import styles from './contact.module.css';

const socialLinks = [
  { href: 'https://github.com/T-Pitkanen', icon: FaGithub, label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/tiia-pitkanen', icon: FaLinkedin, label: 'LinkedIn', external: true },
  { href: '/Tiia_Pitkanen_CV.pdf', icon: Download, label: 'Download CV', external: false },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      {/* Accent glow behind contact section */}
      <div className={styles.glowBg}>
        <div className={styles.glowOrb} />
      </div>

      <div className={styles.inner}>
        <p className={`reveal ${styles.label}`}>Contact</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          Get in touch
        </h2>
        <p className={`reveal ${styles.subtext}`} data-delay="2">
          I&apos;m looking for an internship where I can contribute and keep growing. If that sounds like something you&apos;re after, I&apos;d love to hear from you.
        </p>

        <div className={`reveal ${styles.centered}`} data-delay="1">
          <p className={styles.colLabel}>Email me directly</p>
          <a href="mailto:tiia1.pitkanen@gmail.com" className={styles.emailLink}>
            tiia1.pitkanen@gmail.com
            <Send size={14} className={styles.sendIcon} />
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
