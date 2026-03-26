import Hero from './components/intro/intro';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Coursework from './components/datawork/datawork';
import Contact from './components/contact/contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Coursework />
      <Contact />
    </main>
  );
}
