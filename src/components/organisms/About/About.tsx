import React from "react";
import { SectionHeader } from "../../molecules/SectionHeader";
import { Avatar } from "../../atoms/Avatar";
import { KeyValueRow } from "../../molecules/KeyValueRow";
import { Eyebrow } from "../../atoms/Eyebrow";
import { Badge } from "../../atoms/Badge";
import { ExternalLink } from "../../atoms/ExternalLink";
import { aboutContent } from "../../../content/portfolioContent";
import styles from "./About.module.css";

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
  const selfIntroductionPdfHref = `${import.meta.env.BASE_URL}${encodeURI("張 齢方 | 自己紹介資料.pdf")}`;

  return (
    <div id="about" className={styles.about}>
      <div className="section-container">
        <SectionHeader
          label={aboutContent.header.label}
          title={aboutContent.header.title}
        />

        {/* Plan 07: 5fr / 4fr grid — bio-first, skills secondary */}
        <div className={styles.grid}>

          {/* Left: Bio — Plan 08 */}
          <div className={styles.bio}>
            {/* Plan 08: Avatar without border card */}
            <div className={styles.identity}>
              <Avatar src={`${import.meta.env.BASE_URL}oriduru_yellow.svg`} alt="Avatar" />
              <div className={styles.meta}>
                <h3>{aboutContent.name}</h3>
                <p className={styles.role}>{aboutContent.role}</p>
              </div>
            </div>

            {/* Plan 08: Narrative paragraphs — no accent-text forcing */}
            {aboutContent.paragraphs.map((text) => (
              <p key={text} className={styles.text}>{text}</p>
            ))}


            <p className={styles.profileLinks}>
              <ExternalLink href={selfIntroductionPdfHref} className="research-doc-link">
                自己紹介資料を見る
              </ExternalLink>
            </p>

            {/* Plan 07: Info grid — subtle metadata */}
            <div className={styles.infoRow}>
              {aboutContent.infoRows.slice(0, 1).map(({ label, value }) => (
                <KeyValueRow key={label} label={label} value={value} />
              ))}
              <KeyValueRow label="研究" value="NLP / mLLM" />
              {aboutContent.infoRows.slice(1).map(({ label, value }) => (
                <KeyValueRow key={label} label={label} value={value} />
              ))}
            </div>

          </div>

          {/* Right: Skills — Plans 09, 10, 11 */}
          <div className={styles.skills}>

            {/* Plan 09: Tech stack — no box-shadow card, line-separated */}
            <div className={styles.skillsBlock}>
              <Eyebrow as="h4" className="skills-heading">技術スタック</Eyebrow>

              {/* Core stack */}
              <div className={styles.skillsCore}>
                <span className={styles.techGroupLabel}>Core</span>
                <div className={styles.techTags}>
                  {["TypeScript", "React", "React Native", "Expo"].map((t) => (
                    <Badge key={t} color="core">{t}</Badge>
                  ))}
                </div>
              </div>

              {/* Other stacks — compact rows */}
              <div className={styles.skillsRows}>
                {techGroups.map(({ label, techs }) => {
                  const remaining = techs.filter((t) => !coreSet.has(t));
                  if (remaining.length === 0) return null;
                  return (
                    <div key={label} className={styles.skillsRow}>
                      <span className={styles.techGroupLabel}>{label}</span>
                      <div className={styles.techTags}>
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
            <div className={styles.skillsBlock}>
              <Eyebrow as="h4" className="skills-heading">{aboutContent.languagesHeading}</Eyebrow>
              <div className={styles.langList}>
                {aboutContent.languages.map(({ lang, level }) => (
                  <KeyValueRow key={lang} variant="lang" label={lang} value={level} />
                ))}
              </div>
            </div>

            {/* Plan 11: Research — blockquote style, no icon */}
            <div className={styles.researchBlock}>
              <Eyebrow as="h4" className="skills-heading">研究テーマ</Eyebrow>
              <div className={styles.researchBody}>
                <p className={styles.researchTitle}>
                  <ExternalLink
                    href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_1Win435/_pdf/-char/en"
                    className="research-link"
                  >
                    mBERT を用いた逐次多言語学習
                  </ExternalLink>
                </p>
                <p className={styles.researchLinks}>
                  <ExternalLink href="research.pdf" className="research-doc-link">
                    説明資料
                  </ExternalLink>
                  <span className={styles.researchSep}>·</span>
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
