"use client";

import styles from './cta.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

const CTA = () => {
  const socials = [
    {
      name: 'Email',
      url: 'mailto:tiia1.pitkanen@gmail.com',
      icon: FaEnvelope,
      color: 'var(--accent)',
      label: 'tiia1.pitkanen@gmail.com'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/t-pitkanen',
      icon: FaGithub,
      color: '#fff',
      external: true,
      label: 'github.com/t-pitkanen'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tiia-pitkanen',
      icon: FaLinkedin,
      color: '#0A66C2',
      external: true,
      label: 'linkedin.com/in/tiia-pitkanen'
    },
  ];

  return (
    <section className={styles.cta} id="contact">
      <div className={styles.inner}>
        <div className={styles.content} data-fade>
          <h2 className={styles.heading}>Let's chat about opportunities</h2>
          <p className={styles.subheading}>
            Looking for an internship or junior role to learn and grow. Open to collaborating on projects, discussing tech, or just connecting with interesting people.
          </p>
          
          <a href="mailto:tiia1.pitkanen@gmail.com" className={styles.primaryCta}>
            Get In Touch
          </a>
        </div>

        <div className={styles.socials} data-fade data-delay="1">
          {socials.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className={styles.socialLink}
                title={social.name}
              >
                <div className={styles.socialIcon}>
                  <IconComponent size={24} />
                </div>
                <div className={styles.socialInfo}>
                  <span className={styles.socialName}>{social.name}</span>
                  <span className={styles.socialLabel}>{social.label}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTA;
