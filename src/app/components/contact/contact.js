'use client';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download, Send } from 'lucide-react';
import styles from './contact.module.css';

const socialLinks = [
  { href: 'https://github.com/T-Pitkanen', icon: FaGithub, label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/tiia-pitkanen', icon: FaLinkedin, label: 'LinkedIn', external: true },
  { href: '/Tiia_Pitkanen_CV.pdf', icon: Download, label: 'Download CV', external: false },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:tiia1.pitkanen@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact">
      {/* Accent glow behind contact section */}
      <div className={styles.glowBg}>
        <div className={styles.glowOrb} />
      </div>

      <div className={styles.inner}>
        <p className={`reveal ${styles.label}`}>Contact</p>
        <h2 className={`reveal ${styles.heading}`} data-delay="1">
          Let&apos;s work together
        </h2>
        <p className={`reveal ${styles.subtext}`} data-delay="2">
          I&apos;m interested in internships, junior roles, and interesting projects.
        </p>

        <div className={styles.grid}>
          {/* Left — email + social */}
          <div className={`reveal ${styles.colLeft}`} data-delay="1">
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

          {/* Right — contact form */}
          <div className={`reveal ${styles.colRight}`} data-delay="2">
            {sent ? (
              <div className={`card ${styles.sentCard}`}>
                <div className={styles.sentIcon}>
                  <Send size={18} />
                </div>
                <p className={styles.sentTitle}>Opening your mail client&hellip;</p>
                <p className={styles.sentSub}>Fill in the pre-populated email and hit send.</p>
                <button onClick={() => setSent(false)} className={styles.sentReset}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity…"
                    className={styles.textarea}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  <Send size={14} />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
