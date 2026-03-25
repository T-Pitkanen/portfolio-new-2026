import { FaGithub, FaLinkedin } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 md:px-12 border-t border-white/8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <p>© {currentYear} Tiia Pitkänen</p>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-white/60 transition-colors">About</a>
          <a href="#projects" className="hover:text-white/60 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/T-Pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/tiia-pitkanen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
