import React from 'react';
import { Eyebrow } from '../../atoms/Eyebrow';
import { ExternalLink } from '../../atoms/ExternalLink';
import styles from './Closing.module.css';

const Closing: React.FC = () => {
  return (
    <div className={styles.closing}>
      <div className={`section-container ${styles.container}`}>
        <div className={styles.inner}>
          <Eyebrow>Contact</Eyebrow>

          <h2 className={styles.title}>
            一緒に、何かを作りませんか。
          </h2>

          <p className={styles.text}>
            採用担当者の方、エンジニアの方、ともにプロダクトを作りたい方——
            <br />
            お気軽にご連絡ください。
          </p>

          <a href="mailto:mamezhlf@gmail.com" className={styles.email}>
            mamezhlf@gmail.com
          </a>

          <div className={styles.links}>
            <ExternalLink
              href="https://note.com/mamezlf"
              className="closing-text-link"
            >
              <span className={styles.clinkPlatform}>note</span>
              <span className={styles.clinkHandle}>@mamezlf</span>
            </ExternalLink>
            <ExternalLink
              href="https://github.com/mamezlf"
              className="closing-text-link"
            >
              <span className={styles.clinkPlatform}>GitHub</span>
              <span className={styles.clinkHandle}>mamezlf</span>
            </ExternalLink>
          </div>

          <div>
            <div className={styles.footerDivider} />
            <div className={styles.footerRow}>
              <span>Lingfang Zhang</span>
              <span className={styles.footerCopy}>早大院 · SWE / NLP · 28卒</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Closing;
