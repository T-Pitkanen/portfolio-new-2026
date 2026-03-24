'use client';

import styles from './navigation.module.css';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>TP</Link>
            <div className={styles.links}>
                 <a href="#about" className={styles.link}>About</a>
                <a href="#data" className={styles.link}>Coursework</a>
                <a href="#web-projects" className={styles.link}>Projects</a>
                <a href="#contact" className={styles.link}>Contact</a>
            </div>
        </nav>
    );
};

export default Navigation;
