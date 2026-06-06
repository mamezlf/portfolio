import React from 'react';
import { Eyebrow } from '../../atoms/Eyebrow';
import { Button } from '../../atoms/Button';
import { welcomeContent } from '../../../content/portfolioContent';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.welcome}>
      <div className={`section-container ${styles.container}`}>
        <div className={styles.content}>
          {/* Plan 04+05: Quiet eyebrow — no dot, just text */}
          <Eyebrow variant="subtle" as="p">
            {welcomeContent.eyebrow}
          </Eyebrow>

          {/* Plan 05: Title — left-aligned, no accent color split */}
          <h1 className={styles.title}>
            {welcomeContent.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>{line}</span>
            ))}
          </h1>

          {/* Plan 05: Role — simple, below title */}
          <p className={styles.role}>
            {welcomeContent.role}
          </p>

          {/* Plan 05: Philosophy — inline paragraph, not a card box */}
          <p className={styles.philosophy}>
            {welcomeContent.philosophyLines[0]}
            <br />
            {welcomeContent.philosophyLines[1]}
          </p>

          {/* Plan 06: Single CTA */}
          <div className={styles.actions}>
            <Button variant="primary" onClick={() => scrollTo("about")}>
              {welcomeContent.cta}
            </Button>
          </div>

          {/* Plan 06: Scroll indicator — pure line only, no icon */}
          <div className={styles.scroll}>
            <div className={styles.scrollLine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
