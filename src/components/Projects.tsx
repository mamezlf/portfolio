import React, { useState } from "react";

interface Project {
  id: string;
  period: string;
  name: string;
  tagline: string;
  story: string;
  tags: string[];
  highlights: string[];
  link?: string;
  noteLink?: string;
  images?: string[];
  accentColor: string;
  emoji: string;
  type: "origin" | "team" | "personal" | "internship";
}

const projects: Project[] = [
  {
    id: "uriage",
    period: "大学院 / 2026",
    name: "URIAGE",
    tagline: "繰り返される個人販売者の収支管理を、アプリで一元化",
    story:
      "私はハンドメイドが趣味で、作った作品をネットで販売している中、収支を正確に把握するために、毎回手動で送料・資材費・利益の計算を行う必要がある「非効率」に気がつく。この課題に対して、商品情報の自動取得・コスト管理・月次レポート機能を備えたiOSアプリを開発。実際にアプリを日常で利用しながら改善を重ね、繰り返し発生する計算作業を効率化。",
    tags: ["Swift", "SwiftUI", "SwiftData", "Vibe Coding", "iOS"],
    highlights: [
      "商品情報の自動取得により、手入力の手間を削減",
      "送料・資材費を含めた収支を一元管理し、利益の可視化を実現",
      "月次レポート機能により、販売活動の振り返りを効率化",
      "日常的に使用しながら改善を重ね、実運用ベースで設計",
    ],
    images: [
      "URIAGE/IMG_0337.png",
      "URIAGE/IMG_0338.png",
      "URIAGE/IMG_0339.png",
      "URIAGE/IMG_0340.png",
      "URIAGE/IMG_0341.png",
    ],
    link: "https://note.com/mamezlf/n/n775888ddc071",
    accentColor: "#d4a96a",
    emoji: "📦",
    type: "personal",
  },
  {
    id: "kintai",
    period: "大学3年 / 2024.8 - 2024.11 ",
    name: "勤怠管理アプリ開発",
    tagline: "未経験チームで、開発を前に進める仕組みを作った",
    story:
      "4人チームで、社内向け勤怠管理アプリをアジャイル開発したインターンプロジェクト。React Native＋TypeScriptを用い、5回の2週間スプリントを通して、要件定義から設計・実装・テスト・レビューまで一貫して行った。\n私はエンジニアとして実装を担う一方、進捗管理やタスク分配、顧客への要件確認も主体的に引き受け、実質的にPMの役割を果たした。非同期で作業するメンバー間でも状況共有ができるよう、Slackのログチャンネル運用を提案・導入。PRルールやコーディング規約、フォーマッターを整備し、レビュー品質と開発速度の安定化に貢献。結果として、メンターから「開発スピードが速く、プロダクトの品質も高い」と評価を受けた。",
    tags: [
      "React Native",
      "TypeScript",
      "Scrum",
      "Jira",
      "GitHub",
      "Team Development",
    ],
    highlights: [
      "5回の2週間スプリントで、主要5機能群・7画面をリリース直前の完成度まで実装",
      "開発者として実装・テスト・レビュー、実質PMとして進捗管理とタスク分配を支援",
      "標準化と規約の明確化により、レビュー品質とコードの一貫性を改善",
      "Slackログチャンネルを導入し、フレックス出勤でも進捗の非属人化を実現",
      "「プログラム開始以来一番仲良い」、「速くて品質も高い」チームとなった",
    ],
    accentColor: "#7ec8a0",
    emoji: "🏢",
    type: "internship",
  },

  {
    id: "ccn",
    period: "大学1年 / 2022",
    name: "LovePoem",
    tagline: "エンジニアになりたいと思った、あの夜",
    story:
      "大学一年生のころ、K-POPダンスイベントの動画に登場したダンサーに沼落ち。推しの神シーンを集めるツールを C 言語で作り、プログラミングで手間を省ける体験から、コードを書く楽しさに目覚める。\nその後、神シーンを見返すたびに、動画を探し直すつ必要がある「非効率」を発見した際、 HTML+CSS を独学しながら、神シーンを一覧管理・再利用できるWebサイトを構築。「非効率」をコードで解消できた体験が、エンジニアを志す原点となった。",
    tags: ["HTML", "CSS", "JavaScript", "C"],
    highlights: [
      "ソフトウェアエンジニアを志した原点",
      "推し活で発生した「非効率」と向き合い、ツール化によって非効率をなくした",
      "個人の課題解決を、再利用可能な仕組みとして作り上げた",
      "新しく学んだ技術をそのまま実際の課題解決に活かした",
    ],
    link: "https://mamezlf.github.io/lovepoem/index.html",
    accentColor: "#c47ab3",
    emoji: "🕊️",
    type: "origin",
  },
  {
    id: "wasecord",
    period: "大学3年 / 2024",
    name: "Wasecord",
    tagline: "同じ授業で悩んでいる誰かと、つながれたら",
    story:
      "「ラズパイが繋がらないとき、相談できる場所がほしい」——\nそんな同期の声から生まれた、早大情報理工学科向けの授業連携アプリ。\nチーム 4 人でゼロから制作し、授業単位でつながれるチャット機能を持つWebアプリを開発。グループチャットやDMを通じて、学生同士の情報共有を可能に。\nチームの中で私はフロントエンドを担当し、使いやすさと一貫性を意識した設計を行い、チームで一個のプロダクトを初めて作り切る経験となった。",
    tags: [
      "React",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "Docker",
      "GitHub",
    ],
    highlights: [
      "学年ごと・授業ごとに分断されていた学生間情報共有を統一するプラットフォームを構築",
      "複数画面にまたがるUI/UXを設計・実装し、ユーザビリティを向上",
      "4人チームの中でフロントエンドを主導し、プロダクトとして動作するレベルまで完成",
    ],
    images: [
      "wasecord/ログイン画面.png",
      "wasecord/アカウント作成画面.png",
      "wasecord/授業一覧とタグ選択.png",
      "wasecord/タグによってフィルタリング.png",
      "wasecord/グループチャット画面.png",
      "wasecord/DM画面.png",
      "wasecord/アカウント設定.png",
      "wasecord/使い方画面.png",
    ],
    link: "wasecord/Group1A.pdf",
    accentColor: "#7ab3d4",
    emoji: "🎓",
    type: "team",
  },
];

const typeLabel: Record<string, string> = {
  origin: "原点",
  team: "チーム開発",
  personal: "個人開発",
  internship: "長期インターン",
};

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [previewState, setPreviewState] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="projects">
      <div className="section-container">
        <div className="projects-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">開発経験</h2>
          <p className="projects-sub">
            繰り返し発生する「非効率」を見つけ、
            <br />
            それを解消することに取り組んできました。
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {projects.map((project, i) => (
            <div key={project.id} className="timeline-item">
              {/* Connector */}
              <div className="timeline-connector">
                <div
                  className="timeline-node"
                  style={{
                    borderColor: project.accentColor,
                    background: `${project.accentColor}20`,
                  }}
                >
                  <span>{project.emoji}</span>
                </div>
                {i < projects.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Card */}
              <div
                className={`project-card ${expanded[project.id] ? "expanded" : ""}`}
                style={
                  {
                    "--project-accent": project.accentColor,
                  } as React.CSSProperties
                }
              >
                <div
                  className="project-card-header"
                  onClick={() => toggleExpand(project.id)}
                >
                  <div className="project-meta">
                    <span className="project-period">{project.period}</span>
                    <span className="project-type-badge">
                      {typeLabel[project.type]}
                    </span>
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p
                    className="project-tagline"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {project.tagline}
                  </p>
                  <div className="project-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="expand-btn">
                    {expanded[project.id] ? "閉じる ↑" : "詳しく見る ↓"}
                  </button>
                </div>

                <div className="project-detail-wrapper">
                  <div className="project-detail">
                    <div className="detail-divider" />

                    <p
                      className="project-story"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {project.story}
                    </p>

                    <div className="project-highlights">
                      <h4>ポイント</h4>
                      <ul>
                        {project.highlights.map((h, idx) => (
                          <li key={idx}>
                            <span
                              className="highlight-dot"
                              style={{ background: project.accentColor }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.images && (
                      <div className="project-images">
                        {project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.name} screenshot ${idx + 1}`}
                            className="project-thumbnail"
                            onClick={() =>
                              setPreviewState({
                                images: project.images!,
                                index: idx,
                              })
                            }
                          />
                        ))}
                      </div>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {project.id === "uriage"
                          ? "note記事を読む →"
                          : project.id === "wasecord"
                            ? "説明資料を見る →"
                            : "Webサイトを見る →"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom philosophy */}
        <div className="projects-footer">
          <div className="philosophy-strip">
            <span className="philo-quote">
              課題の特定から設計・実装・運用まで一貫して行い、
              <br />
              実際の利用を通じて改善を重ねています。
            </span>
          </div>
        </div>
      </div>

      {previewState && (
        <div className="lightbox" onClick={() => setPreviewState(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setPreviewState(null)}
            >
              ×
            </button>
            {previewState.images.length > 1 && (
              <button
                className="lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewState({
                    ...previewState,
                    index:
                      (previewState.index - 1 + previewState.images.length) %
                      previewState.images.length,
                  });
                }}
              >
                ‹
              </button>
            )}
            <img src={previewState.images[previewState.index]} alt="Preview" />
            {previewState.images.length > 1 && (
              <button
                className="lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewState({
                    ...previewState,
                    index:
                      (previewState.index + 1) % previewState.images.length,
                  });
                }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
