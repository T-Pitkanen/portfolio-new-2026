import Hero from './components/intro/intro';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Coursework from './components/datawork/datawork';
import Contact from './components/contact/contact';

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-foreground">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Coursework />
      <Contact />
    </main>
  );
}
