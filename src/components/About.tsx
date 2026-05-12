import React from "react";

const languages = [
  { lang: "中国語", level: "ネイティブ", color: "#d4a96a" },
  { lang: "日本語", level: "N1(満点) / ビジネス", color: "#7ec8a0" },
  { lang: "英語", level: "TOEIC 895 / TOEFL 91 / ビジネス", color: "#7ab3d4" },
  { lang: "韓国語", level: "日常会話", color: "#c47ab3" },
];

const techGroups = [
  {
    label: "Frontend / Mobile",
    techs: [
      "Swift",
      "SwiftUI",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Expo",
    ],
  },
  {
    label: "Backend / Infrastructure",
    techs: ["Java", "Spring", "PHP", "PostgreSQL", "MySQL", "Docker"],
  },
  {
    label: "Tools / Collaboration",
    techs: ["GitHub", "Figma", "Jira", "Notion"],
  },
  {
    label: "AI / Research",
    techs: ["PyTorch", "Transformer", "mBERT", "NLP"],
  },
];

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="section-container">
        <div className="about-header">
          <span className="section-label">About</span>
          <h2 className="section-title">自己紹介</h2>
        </div>

        <div className="about-grid">
          {/* Left: Bio */}
          <div className="about-bio">
            <div className="bio-card">
              <div className="bio-avatar">
                <img
                  src={`${import.meta.env.BASE_URL}oriduru_yellow.svg`}
                  alt="Avatar"
                  style={{ width: "50%", height: "50%", objectFit: "cover" }}
                />
              </div>
              <div className="bio-meta">
                <h3>Lingfang Zhang（張 齢方）</h3>
                <p className="bio-role">Software Engineer in progress</p>
              </div>
            </div>

            <p className="bio-text">
              早稲田大学大学院で自然言語処理・多言語モデルの研究をしながら、エンジニアとしてプロダクト開発や、日本のIT企業で新規事業に携わっています。
            </p>

            <p className="bio-text">
              私にとって、「この仕組みがあれば、もっと楽になる」という感覚が行動の原点です。
              課題に対する解決策を見つけたら、すぐ形にして試してみるようにしています。
            </p>

            <p className="bio-text accent-text">
              作ったものが価値を生み出す瞬間が、一番のやりがいです。
            </p>

            <div className="bio-info-row">
              <div className="bio-info-item">
                <span className="bio-info-label">大学</span>
                <span className="bio-info-value">早稲田大学大学院</span>
              </div>
              <div className="bio-info-item">
                <span className="bio-info-label">研究</span>
                <span className="bio-info-value">NLP / mLLM</span>
              </div>

              <div className="bio-info-item">
                <span className="bio-info-label">専攻</span>
                <span className="bio-info-value">情報理工・情報通信</span>
              </div>
              <div className="bio-info-item">
                <span className="bio-info-label">卒業予定</span>
                <span className="bio-info-value">2028年3月 修士卒</span>
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="about-skills">
            {/* Tech Stack */}
            <div
              className="skills-block"
              style={{ borderLeft: "2px solid var(--green)" }}
            >
              <h4 className="skills-heading">技術スタック</h4>
              {techGroups.map(({ label, techs }) => (
                <div key={label} className="tech-group">
                  <span className="tech-group-label">{label}</span>
                  <div className="tech-tags">
                    {techs.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Languages */}
            <div
              className="skills-block"
              style={{ borderLeft: "2px solid var(--accent)" }}
            >
              <h4 className="skills-heading">言語</h4>
              <div className="lang-list">
                {languages.map(({ lang, level, color }) => (
                  <div key={lang} className="lang-item">
                    <div className="lang-dot" style={{ background: color }} />
                    <div className="lang-info">
                      <span className="lang-name">{lang}</span>
                      <span className="lang-level">{level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research */}
            <div className="research-card">
              <div className="research-icon">🔬</div>
              <div>
                <h4>研究テーマ</h4>
                <p>
                  <a
                    href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_1Win435/_pdf/-char/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      paddingBottom: "1px",
                    }}
                  >
                    mBERT を用いた逐次多言語学習
                  </a>
                </p>
                <p className="research-sub">
                  <a
                    href="research.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      borderBottom: "1px solid currentColor",
                      paddingBottom: "1px",
                    }}
                  >
                    説明資料
                  </a>
                  ・
                  <a
                    href="poster.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      borderBottom: "1px solid currentColor",
                      paddingBottom: "1px",
                    }}
                  >
                    JSAI2025 発表ポスター
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
