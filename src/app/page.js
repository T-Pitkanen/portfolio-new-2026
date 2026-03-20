import styles from './page.module.css';
import Intro from './components/intro/intro';
import Highlights from './components/highlights/highlights';
import About from './components/about/about';
import DataWork from './components/datawork/datawork';
import Projects from './components/projects/projects';
import CTA from './components/cta/cta';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pageContainer}>
        <Intro />
        <Highlights />
        <About />
        <DataWork />
        <Projects />
        <CTA />
      </div>
    </main>
  );
}
