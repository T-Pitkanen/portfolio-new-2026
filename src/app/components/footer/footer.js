import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './footer.module.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {currentYear} Tiia Pitkänen</p>
        <div className={styles.footerLinks}>
          <a href="#about" className={styles.footerLink}>About</a>
          <a href="#projects" className={styles.footerLink}>Projects</a>
          <a href="#contact" className={styles.footerLink}>Contact</a>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/T-Pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/tiia-pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
