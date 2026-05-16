import React, { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Closing from './components/Closing';

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
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => scrollTo('welcome')}>Lingfang ·</span>
          <ul className="nav-links">
            <li><a className={`nav-link ${activeSection === 'welcome' ? 'active' : ''}`} href="#welcome">Top</a></li>
            <li><a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about">About</a></li>
            <li><a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">Projects</a></li>
            <li><a className={`nav-link ${activeSection === 'closing' ? 'active' : ''}`} href="#closing">Contact</a></li>
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
