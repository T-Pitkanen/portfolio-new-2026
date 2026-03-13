import styles from './page.module.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import DataWork from './components/datawork/datawork';
import Projects from './components/projects/projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pageContainer}>
        <Intro />
        <About />
        <DataWork />
        <Projects />
      </div>
    </main>
  );
}
