import React from "react";

/* Plan 10: Neutral language colors — remove visual noise */
const languages = [
  { lang: "中国語", level: "ネイティブ" },
  { lang: "日本語", level: "N1（満点）/ ビジネス" },
  { lang: "英語", level: "TOEIC 895 · TOEFL 91 / ビジネス" },
  { lang: "韓国語", level: "日常会話" },
];

const techGroups = [
  {
    label: "Frontend / Mobile",
    techs: ["Swift", "SwiftUI", "React", "Next.js", "React Native", "TypeScript", "Expo"],
  },
  {
    label: "Backend / Infra",
    techs: ["Java", "Spring", "PHP", "PostgreSQL", "MySQL", "Docker"],
  },
  {
    label: "Tools",
    techs: ["Figma", "Jira", "Notion", "Claude", "Codex"],
  },
  {
    label: "AI / Research",
    techs: ["PyTorch", "Transformer", "NLP"],
  },
];

const coreSet = new Set(["TypeScript", "React", "React Native", "Expo"]);

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="section-container">
        <div className="about-header">
          <span className="section-label">About</span>
          <h2 className="section-title">自己紹介</h2>
        </div>

        {/* Plan 07: 5fr / 4fr grid — bio-first, skills secondary */}
        <div className="about-grid">

          {/* Left: Bio — Plan 08 */}
          <div className="about-bio">
            {/* Plan 08: Avatar without border card */}
            <div className="bio-identity">
              <div className="bio-avatar">
                <img
                  src={`${import.meta.env.BASE_URL}oriduru_yellow.svg`}
                  alt="Avatar"
                  style={{ width: "52%", height: "52%", objectFit: "contain" }}
                />
              </div>
              <div className="bio-meta">
                <h3>Lingfang Zhang（張 齢方）</h3>
                <p className="bio-role">Software Engineer &nbsp;/&nbsp; NLP Researcher</p>
              </div>
            </div>

            {/* Plan 08: Narrative paragraphs — no accent-text forcing */}
            <p className="bio-text">
              早稲田大学大学院で自然言語処理・多言語モデルの研究をしながら、エンジニアとしてプロダクト開発や日本のIT企業での新規事業開発に携わっています。
            </p>
            <p className="bio-text">
              「現場や日々の暮らしで感じた違和感」を、そのまま課題として持ち込みます。
              チームの一員として、社会に暮らす人間として、いますぐできることを考えるのが好きです。
              アイデアが浮かんだらすぐ行動に移し、試行錯誤を繰り返しながら形にしていきます。
            </p>
            <p className="bio-text">
              作ったものが価値を生み出す瞬間が、一番のやりがいです。
            </p>

            {/* Plan 07: Info grid — subtle metadata */}
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

          {/* Right: Skills — Plans 09, 10, 11 */}
          <div className="about-skills">

            {/* Plan 09: Tech stack — no box-shadow card, line-separated */}
            <div className="skills-block">
              <h4 className="skills-heading">技術スタック</h4>

              {/* Core stack */}
              <div className="skills-core">
                <span className="tech-group-label">Core</span>
                <div className="tech-tags">
                  {["TypeScript", "React", "React Native", "Expo"].map((t) => (
                    <span key={t} className="tag tag-core">{t}</span>
                  ))}
                </div>
              </div>

              {/* Other stacks — compact rows */}
              <div className="skills-rows">
                {techGroups.map(({ label, techs }) => {
                  const remaining = techs.filter((t) => !coreSet.has(t));
                  if (remaining.length === 0) return null;
                  return (
                    <div key={label} className="skills-row">
                      <span className="tech-group-label">{label}</span>
                      <div className="tech-tags">
                        {remaining.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Plan 10: Languages — neutral, no colored dots */}
            <div className="skills-block">
              <h4 className="skills-heading">言語</h4>
              <div className="lang-list">
                {languages.map(({ lang, level }) => (
                  <div key={lang} className="lang-item">
                    <span className="lang-name">{lang}</span>
                    <span className="lang-level">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan 11: Research — blockquote style, no icon */}
            <div className="research-block">
              <h4 className="skills-heading">研究テーマ</h4>
              <div className="research-body">
                <p className="research-title">
                  <a
                    href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_1Win435/_pdf/-char/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-link"
                  >
                    mBERT を用いた逐次多言語学習
                  </a>
                </p>
                <p className="research-links">
                  <a href="research.pdf" target="_blank" rel="noopener noreferrer" className="research-doc-link">
                    説明資料
                  </a>
                  <span className="research-sep">·</span>
                  <a href="poster.pdf" target="_blank" rel="noopener noreferrer" className="research-doc-link">
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
