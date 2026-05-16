import React from "react";

const Welcome: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="welcome">
      <div className="welcome-content section-container">

        {/* Plan 04+05: Quiet eyebrow — no dot, just text */}
        <p className="welcome-eyebrow">
          早稲田大学大学院 &nbsp;·&nbsp; 情報理工・情報通信専攻
        </p>

        {/* Plan 05: Title — left-aligned, no accent color split */}
        <h1 className="welcome-title">
          <span className="title-line">身の回りの違和感を、</span>
          <span className="title-line">エンジニアリングで解消する。</span>
        </h1>

        {/* Plan 05: Role — simple, below title */}
        <p className="welcome-role">
          ソフトウェアエンジニア &nbsp;/&nbsp; NLP 研究者
        </p>

        {/* Plan 05: Philosophy — inline paragraph, not a card box */}
        <p className="welcome-philosophy">
          「現場や日々の暮らしで感じた違和感」を起点に、
          <br />
          課題を見極め、形にしてきました。
        </p>

        {/* Plan 06: Single CTA */}
        <div className="welcome-actions">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            プロジェクトを見る
          </button>
        </div>

        {/* Plan 06: Scroll indicator — pure line only, no icon */}
        <div className="welcome-scroll">
          <div className="scroll-line" />
        </div>

      </div>
    </div>
  );
};

export default Welcome;
