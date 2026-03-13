import styles from './footer.module.css';
import { FaGithub } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.inner} data-fade>
                <div className={styles.cta}>
                    <p className={styles.label}>04 — Contact</p>
                 
                    <a href="mailto:tiia1.pitkanen@gmail.com" className={styles.emailHero}>
                        tiia1.pitkanen@gmail.com
                    </a>
                </div>

                <div className={styles.links}>
                    <Link
                        href="https://github.com/T-Pitkanen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="GitHub"
                    >
                        <FaGithub className={styles.icon} />
                        <span>GitHub</span>
                    </Link>
                    <a
                        href="/Tiia_Pitkanen_CV.pdf"
                        download
                        className={styles.iconLink}
                        aria-label="Download CV"
                    >
                
                    </a>
                </div>
            </div>

            <div className={styles.bottom}>
                <span className={styles.copyright}>
                    © 2026 Tiia Pitkänen. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
