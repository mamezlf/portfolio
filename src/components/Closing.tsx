import React from 'react';


const Closing: React.FC = () => {
  return (
    <div className="closing">
      <div className="closing-bg-glow" />
      <div className="section-container">
        <div className="closing-inner">
          <span className="section-label">Contact</span>

          <h2 className="closing-title">
            一緒に、<br />
            <span className="closing-accent">何かを作りませんか。</span>
          </h2>

          <p className="closing-text">
            採用担当者の方、エンジニアの方、ともにプロダクトを作りたい方——
            <br />
            お気軽にご連絡ください。
            <br />
            Email:
            <a
              href="mailto:mamezhlf@gmail.com"
              style={{ color: 'inherit', textDecoration: 'none', paddingBottom: '1px' }}
            > mamezhlf@gmail.com</a>
          </p>

          <div className="closing-links">
            <a
              href="https://note.com/mamezlf"
              target="_blank"
              rel="noopener noreferrer"
              className="closing-link note"
            >
              <span className="link-icon">📝</span>
              <div>
                <span className="link-label">note</span>
                <span className="link-handle">@mamezlf</span>
              </div>
            </a>

            <a
              href="https://github.com/mamezlf"
              target="_blank"
              rel="noopener noreferrer"
              className="closing-link github"
            >
              <span className="link-icon">⌨️</span>
              <div>
                <span className="link-label">GitHub</span>
                <span className="link-handle">mamezlf</span>
              </div>
            </a>
          </div>

          <div className="closing-footer">
            <div className="footer-divider" />
            <div className="footer-row">
              <span className="footer-name">Lingfang Zhang</span>
              <span className="footer-copy">
                早大院 · SWE / NLP · 28卒
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Closing;
