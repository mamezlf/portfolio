import React from "react";
import { SectionHeader } from "../molecules/SectionHeader";
import { Avatar } from "../atoms/Avatar";
import { KeyValueRow } from "../molecules/KeyValueRow";
import { Eyebrow } from "../atoms/Eyebrow";
import { Badge } from "../atoms/Badge";
import { ExternalLink } from "../atoms/ExternalLink";

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
        <SectionHeader label="About" title="自己紹介" className="about-header" />

        {/* Plan 07: 5fr / 4fr grid — bio-first, skills secondary */}
        <div className="about-grid">

          {/* Left: Bio — Plan 08 */}
          <div className="about-bio">
            {/* Plan 08: Avatar without border card */}
            <div className="bio-identity">
              <Avatar src={`${import.meta.env.BASE_URL}oriduru_yellow.svg`} alt="Avatar" />
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
              <KeyValueRow label="大学" value="早稲田大学大学院" />
              <KeyValueRow label="研究" value="NLP / mLLM" />
              <KeyValueRow label="専攻" value="情報理工・情報通信" />
              <KeyValueRow label="卒業予定" value="2028年3月 修士卒" />
            </div>
          </div>

          {/* Right: Skills — Plans 09, 10, 11 */}
          <div className="about-skills">

            {/* Plan 09: Tech stack — no box-shadow card, line-separated */}
            <div className="skills-block">
              <Eyebrow as="h4" className="skills-heading">技術スタック</Eyebrow>

              {/* Core stack */}
              <div className="skills-core">
                <span className="tech-group-label">Core</span>
                <div className="tech-tags">
                  {["TypeScript", "React", "React Native", "Expo"].map((t) => (
                    <Badge key={t} color="core">{t}</Badge>
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
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Plan 10: Languages — neutral, no colored dots */}
            <div className="skills-block">
              <Eyebrow as="h4" className="skills-heading">言語</Eyebrow>
              <div className="lang-list">
                {languages.map(({ lang, level }) => (
                  <KeyValueRow key={lang} variant="lang" label={lang} value={level} />
                ))}
              </div>
            </div>

            {/* Plan 11: Research — blockquote style, no icon */}
            <div className="research-block">
              <Eyebrow as="h4" className="skills-heading">研究テーマ</Eyebrow>
              <div className="research-body">
                <p className="research-title">
                  <ExternalLink
                    href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_1Win435/_pdf/-char/en"
                    className="research-link"
                  >
                    mBERT を用いた逐次多言語学習
                  </ExternalLink>
                </p>
                <p className="research-links">
                  <ExternalLink href="research.pdf" className="research-doc-link">
                    説明資料
                  </ExternalLink>
                  <span className="research-sep">·</span>
                  <ExternalLink href="poster.pdf" className="research-doc-link">
                    JSAI2025 発表ポスター
                  </ExternalLink>
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
