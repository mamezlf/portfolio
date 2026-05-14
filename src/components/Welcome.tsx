import React from "react";

const Welcome: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="welcome">
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="welcome-content section-container">
        <div
          className="welcome-eyebrow fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="dot" />
          <span>早稲田大学大学院 情報理工・情報通信専攻</span>
        </div>

        <h1
          className="welcome-title fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="title-line">答えのない場所で、</span>
          <span className="title-line title-accent">問いを立てて動き出す</span>
        </h1>

        <p className="welcome-sub fade-up" style={{ animationDelay: "0.45s" }}>
          Software Engineer / NLP Researcher
        </p>

        <div
          className="welcome-philosophy fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="quote-mark">"</span>
          <p>
            「この仕組みがあれば、もっと楽になる」
            <br />
            <span className="philosophy-sub">
              という感覚を大切に、不確実な状況でも課題を見極め、
              {/* <br /> */}
              軌道修正を重ねながら形にするまで突き進みます
            </span>
          </p>
        </div>

        <div
          className="welcome-actions fade-up"
          style={{ animationDelay: "0.75s" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("about")}>
            自己紹介をみる
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("projects")}>
            経歴からみる
          </button>
        </div>

        <div
          className="welcome-scroll fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
