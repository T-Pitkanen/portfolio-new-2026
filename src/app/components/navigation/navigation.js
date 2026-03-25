'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

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
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
        <div
          className={`flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'border-white/15 bg-black/80 backdrop-blur-2xl shadow-xl shadow-black/50'
              : 'border-white/8 bg-black/50 backdrop-blur-xl shadow-lg shadow-black/30'
          }`}
        >
          <span className="text-sm font-bold text-white px-4 py-1.5 mr-1 border-r border-white/10">
            TP
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/6"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icons - desktop */}
          <div className="hidden md:flex items-center gap-0.5 ml-1 pl-2 border-l border-white/10">
            <a
              href="https://github.com/T-Pitkanen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/6 transition-colors"
              title="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/tiia-pitkanen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/6 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors ml-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-2xl p-6 transition-all duration-200 md:hidden ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-white/70 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/6 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-white/8">
          <a
            href="https://github.com/T-Pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tiia-pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
