'use client';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download, Send } from 'lucide-react';

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
    <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="contact">
      {/* Amber glow behind contact section */}
      <div className="absolute inset-x-0 bottom-0 h-96 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-white/35 mb-3 font-medium reveal">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 reveal" data-delay="1">
          Let&apos;s work together
        </h2>
        <p className="text-base text-white/40 mb-12 max-w-md leading-relaxed reveal" data-delay="2">
          I&apos;m interested in internships, junior roles, and interesting projects.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — email + social */}
          <div className="reveal" data-delay="1">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-3 font-medium">Email me directly</p>
            <a
              href="mailto:tiia1.pitkanen@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/12 bg-white/4 hover:bg-white/7 hover:border-white/22 transition-all text-white font-semibold text-sm md:text-base mb-10"
            >
              tiia1.pitkanen@gmail.com
              <Send size={14} className="text-white/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </a>

            <p className="text-xs text-white/30 uppercase tracking-widest mb-4 font-medium">Find me on</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/22 transition-colors text-sm"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div className="reveal" data-delay="2">
            {sent ? (
              <div className="card p-8 text-center flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <Send size={18} className="text-accent" />
                </div>
                <p className="text-white font-semibold">Opening your mail client&hellip;</p>
                <p className="text-sm text-white/40">Fill in the pre-populated email and hit send.</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-white/30 hover:text-white/60 transition-colors mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/35 font-medium">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/35 font-medium">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/35 font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity…"
                    className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/25 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/92 active:scale-98 transition-all"
                >
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
