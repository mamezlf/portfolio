import React, { useEffect, useState } from 'react';
import Welcome from './components/organisms/Welcome';
import About from './components/organisms/About';
import Projects from './components/organisms/Projects';
import Closing from './components/organisms/Closing';
import navStyles from './components/organisms/Nav/Nav.module.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(s => {
        const rect = s.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          current = s.id;
        }
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.inner}>
          <span className={navStyles.logo} onClick={() => scrollTo('welcome')}>Lingfang ·</span>
          <ul className={navStyles.links}>
            <li><a className={`${navStyles.link} ${activeSection === 'welcome' ? navStyles.linkActive : ''}`.trim()} href="#welcome">Top</a></li>
            <li><a className={`${navStyles.link} ${activeSection === 'about' ? navStyles.linkActive : ''}`.trim()} href="#about">About</a></li>
            <li><a className={`${navStyles.link} ${activeSection === 'projects' ? navStyles.linkActive : ''}`.trim()} href="#projects">Projects</a></li>
            <li><a className={`${navStyles.link} ${activeSection === 'closing' ? navStyles.linkActive : ''}`.trim()} href="#closing">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* WELCOME */}
        <section id="welcome">
          <Welcome />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Projects />
        </section>

        {/* CLOSING */}
        <section id="closing">
          <Closing />
        </section>
      </main>
    </>
  );
};

export default App;
