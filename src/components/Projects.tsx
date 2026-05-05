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
      "私はハンドメイドが趣味で、作った作品をネットで販売しています。そんな中で、収支を正確に把握するために、毎回手動で送料・資材費・利益の計算を行う必要がある「ムダ」に気がつきました。この課題に対して、商品情報の自動取得・コスト管理・月次レポート機能を備えたiOSアプリを開発しました。実際にアプリを日常で利用しながら改善を重ね、繰り返し発生する計算作業を効率化しました。",
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
    id: "ccn",
    period: "大学1年 / 2022",
    name: "CCN Timestamp Web",
    tagline: "エンジニアになりたいと思った、あの夜",
    story:
      "大学一年生のころ、K-POPダンスイベントの動画に登場したダンサーに沼落ちしました。推しの神シーン集めツールを C 言語で作って、プログラミングで手間を省ける体験から、コードを書く楽しさに目覚めました。\nその後、推しの神シーンを見返す際、動画を毎回探し直す手間という「ムダ」を発見しました。この「ムダ」に対し、HTML+CSSを独学しながら、神シーンを一覧管理・再利用できるWebサイトを構築しました。「ムダ」をコードで解消できた体験が、エンジニアを志す原点となりました。",
    tags: ["HTML", "CSS", "JavaScript", "C"],
    highlights: [
      "ソフトウェアエンジニアを志した原点",
      "推し活で発生した「ムダ」と向き合い、ツール化によってムダを省いた",
      "新しく学んだ技術をそのまま実際の課題解決に活かした",
      "個人の課題解決を、再利用可能な仕組みとして作り上げた",
    ],
    link: "https://mamezlf.github.io/lovepoem/index.html",
    accentColor: "#c47ab3",
    emoji: "🕊️",
    type: "origin",
  },

    {
    id: "internship",
    period: "大学3年〜大学院 / 2024- ",
    name: "日本IT企業 長期インターン",
    tagline: "後輩として信頼してもらいながら、価値を届けることを考えた。",
    story:
      "「お客様からいただいた金額以上の価値を届ける」という経営姿勢と、「幸せの循環」を考える文化に共感して飛び込んだ。\n新規事業の立ち上げからシステム開発・実運用まで、1年以上にわたって実務に携わった。\nここで初めて学生ではなく、「会社の立場」から物事を見る視点を得て、ビジネスの面白さと、専門性を活かして価値を生み出す喜びを知った。",
    tags: ["新規事業", "システム開発", "チーム開発", "ビジネス理解"],
    highlights: [
      "「いただいた金額以上の価値を届ける」理念に共感し、自分もその一翼を担いたいと思った",
      "後輩として大事にされ、信頼してもらいながら、価値を生み出す経験",
      "ビジネスの視点・会社の立場という、専門外の世界観を体感",
    ],
    accentColor: "#7ec8a0",
    emoji: "🏢",
    type: "internship",
  },

  {
    id: "wasecord",
    period: "大学3年 / 2024",
    name: "Wasecord",
    tagline: "同じ授業で悩んでいる誰かと、つながれたら",
    story:
      "「ラズパイが繋がらないとき、相談できる場所がほしい」——\nそんな同期の声から生まれた、早大情報理工学科向けの授業連携アプリです。\nチーム 4 人でゼロから制作し、授業単位でつながれるチャット機能を持つWebアプリを開発しました。グループチャットやDMを通じて、学生同士の情報共有を可能にしました。\nチームの中で私はフロントエンドを担当し、使いやすさと一貫性を意識した設計を行いました。\nチームで一個のプロダクトを初めて作り切る経験となりました。",
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
            繰り返し発生する非効率を、仕組みで変える——
            <br />
            日常の小さな「ムダ」に気づき、
            それをなくす仕組みに落とし込んできました。
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
                  <p className="project-tagline">{project.tagline}</p>
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

                    <p className="project-story">{project.story}</p>

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
                            : "サイトを見る →"}
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
              繰り返し発生する非効率を、仕組みに変える。 <br />
              ——そんなプロジェクトを積み重ねてきた。
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
