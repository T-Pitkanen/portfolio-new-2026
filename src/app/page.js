import Hero from './components/intro/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Coursework from './components/datawork/Coursework';
import Contact from './components/contact/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Coursework />
      <Contact />
    </main>
  );
}
