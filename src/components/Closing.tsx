import React from 'react';

const Closing: React.FC = () => {
  return (
    <div className="closing">
      {/* Plan 17: No closing-bg-glow */}
      <div className="section-container">
        <div className="closing-inner">
          <span className="section-label">Contact</span>

          {/* Plan 17: Calmer title — no accent color split, unified tone */}
          <h2 className="closing-title">
            一緒に、何かを作りませんか。
          </h2>

          {/* Plan 17: Warm, natural closing text */}
          <p className="closing-text">
            採用担当者の方、エンジニアの方、ともにプロダクトを作りたい方——
            <br />
            お気軽にご連絡ください。
          </p>

          {/* Plan 17: Email — inline, low-key underline */}
          <a href="mailto:mamezhlf@gmail.com" className="closing-email">
            mamezhlf@gmail.com
          </a>

          {/* Plan 18: Text-only links — no icon, no border box */}
          <div className="closing-links">
            <a
              href="https://note.com/mamezlf"
              target="_blank"
              rel="noopener noreferrer"
              className="closing-text-link"
            >
              <span className="clink-platform">note</span>
              <span className="clink-handle">@mamezlf</span>
            </a>
            <a
              href="https://github.com/mamezlf"
              target="_blank"
              rel="noopener noreferrer"
              className="closing-text-link"
            >
              <span className="clink-platform">GitHub</span>
              <span className="clink-handle">mamezlf</span>
            </a>
          </div>

          <div className="closing-footer">
            <div className="footer-divider" />
            <div className="footer-row">
              <span className="footer-name">Lingfang Zhang</span>
              <span className="footer-copy">早大院 · SWE / NLP · 28卒</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Closing;
