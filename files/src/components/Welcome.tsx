import React, { useEffect, useRef } from 'react';


const Welcome: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="welcome">
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="welcome-content section-container">
        <div className="welcome-eyebrow fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="dot" />
          <span>早稲田大学 大学院 情報工学専攻</span>
        </div>

        <h1 className="welcome-title fade-up" style={{ animationDelay: '0.25s' }}>
          <span className="title-line">課題を見つけて、</span>
          <span className="title-line title-accent">コードで解決する。</span>
        </h1>

        <p className="welcome-sub fade-up" style={{ animationDelay: '0.45s' }}>
          エンジニア × NLP研究 × ハンドメイド好き
        </p>

        <div className="welcome-philosophy fade-up" style={{ animationDelay: '0.6s' }}>
          <span className="quote-mark">"</span>
          <p>
            この仕組みがあれば、もっと楽になる。<br />
            <span className="philosophy-sub">——そう気づいたら、すぐ手を動かしたくなる。</span>
          </p>
        </div>

        <div className="welcome-actions fade-up" style={{ animationDelay: '0.75s' }}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            ポートフォリオを見る
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('about')}>
            自己紹介
          </button>
        </div>

        <div className="welcome-scroll fade-up" style={{ animationDelay: '1s' }}>
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
