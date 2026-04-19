'use client';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import styles from './navigation.module.css';

const navLinks = [
  { href: '#about',      label: 'About',      num: '01' },
  { href: '#projects',   label: 'Work',        num: '02' },
  { href: '#skills',     label: 'Stack',       num: '03' },
  { href: '#coursework', label: 'Learning',    num: '04' },
  { href: '#contact',    label: 'Contact',     num: '05' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section tracking
      const ids = navLinks.map((l) => l.href.slice(1));
      let cur = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) cur = id;
      }
      setActive(cur);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={`${styles.wrap} ${scrolled ? styles.scrolled : ''}`}>
          {/* Desktop links */}
          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active === link.href.slice(1) ? styles.active : ''}`}
              >
                <span className={styles.hash}>{link.num}/</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className={styles.socials}>
            <a href="https://github.com/T-Pitkanen" target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="GitHub" data-hover>
              <FaGithub size={14} />
            </a>
            <a href="https://linkedin.com/in/tiia-pitkanen" target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="LinkedIn" data-hover>
              <FaLinkedin size={14} />
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className={styles.hamburger} aria-label="Toggle menu">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : styles.mobileClosed}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={styles.mobileLink}
          >
            <span className={styles.hash}>{link.num}/</span>
            {link.label}
          </a>
        ))}
        <div className={styles.mobileSocials}>
          <a href="https://github.com/T-Pitkanen" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
            <FaGithub size={14} /> GitHub
          </a>
          <a href="https://linkedin.com/in/tiia-pitkanen" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
            <FaLinkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
