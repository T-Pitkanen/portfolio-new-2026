'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import styles from './navigation.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={`${styles.navInner} ${scrolled ? styles.navScrolled : styles.navDefault}`}>

          {/* Desktop links */}
          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icons - desktop */}
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/T-Pitkanen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              title="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/tiia-pitkanen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              title="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={styles.hamburger}
            aria-label="Toggle menu"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : styles.mobileMenuClosed}`}
      >
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={styles.mobileLinkItem}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.mobileSocials}>
          <a
            href="https://github.com/T-Pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tiia-pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
