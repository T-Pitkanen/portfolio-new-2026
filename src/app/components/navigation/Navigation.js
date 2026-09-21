'use client';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import styles from './navigation.module.css';

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#projects',   label: 'Work' },
  { href: '#skills',     label: 'Stack' },
  { href: '#coursework', label: 'Courses' },
  { href: '#contact',    label: 'Contact' },
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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
                aria-current={active === link.href.slice(1) ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className={styles.socials}>
            <a
              href="https://github.com/T-Pitkanen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="GitHub profile (opens in new tab)"
             
            >
              <FaGithub size={14} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/tiia-pitkanen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="LinkedIn profile (opens in new tab)"
             
            >
              <FaLinkedin size={14} aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Mobile top bar: name left, menu right */}
        <div className={styles.mobileBar}>
          <a href="#hero" className={styles.mobileName} onClick={() => setOpen(false)}>
            Tiia <span lang="fi">Pitkänen</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={styles.hamburger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobile} ${open ? styles.mobileOpen : styles.mobileClosed}`}
        inert={!open}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={styles.mobileLink}
          >
            {link.label}
          </a>
        ))}
        <div className={styles.mobileSocials}>
          <a
            href="https://github.com/T-Pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
            aria-label="GitHub profile (opens in new tab)"
          >
            <FaGithub size={14} aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tiia-pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <FaLinkedin size={14} aria-hidden="true" /> LinkedIn
          </a>
          <a href="/Tiia_Pitkanen_CV.pdf" className={styles.mobileSocialLink} onClick={() => setOpen(false)}>
            CV (PDF)
          </a>
        </div>
      </div>
    </>
  );
}
