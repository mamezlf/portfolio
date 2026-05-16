import React, { useState, useEffect } from "react";

interface Project {
  id: string;
  period: string;
  name: string;
  tagline: string;
  story: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  images?: string[];
  type: "origin" | "team" | "personal" | "internship";
}

const projects: Project[] = [
  {
    id: "uriage",
    period: "大学院 / 2026.4 –",
    name: "URIAGE",
    tagline: "個人販売者の収支管理を、アプリで一元化",
    story: "私はハンドメイドが趣味で、作った作品をフリマアプリで販売している中、利益を把握するのに毎回手動で売上から送料や資材費などを差し引く計算を行う必要があることに違和感を感じた。この違和感を課題として捉え、解決するために 売上と経費の記録・利益自動計算・商品別収支一覧 などの機能を備えたiOSアプリを開発した。日常生活で利用しながら改善を重ね、繰り返し発生する計算作業を効率化した。",
    tags: ["Swift", "SwiftUI", "SwiftData", "iOS"],
    link: "https://note.com/mamezlf/n/n775888ddc071",
    linkLabel: "note 記事を読む",
    images: [
      "URIAGE/home.png",
      "URIAGE/add_record.png",
      "URIAGE/record_list.png",
      "URIAGE/record.png",
      "URIAGE/analysis.png",
      "URIAGE/other.png",
      "URIAGE/link.png",
    ],
    type: "personal",
  },
  {
    id: "kintai",
    period: "大学3年 / 2024.8 – 2024.11",
    name: "KNTY24 (KINTAI)",
    tagline: "開発を早く進める仕組みを、未経験チームの中で整備",
    story: "インターンのプログラムで、社内向け勤怠管理アプリを4人チームでアジャイル開発によって構築した。\nReact Native＋TypeScriptを用い、5回のスプリントを通して、要件定義から設計・実装・テスト・レビューまで一貫して行った。\n私はエンジニアとして実装を担う一方、進捗管理やタスク分配、顧客への要件確認も主体的に引き受け、実質 PM の役割を果たした。また、PRルールやコーディング規約、フォーマッターを整備し、レビュー品質の向上に貢献した。さらに、非同期ワークで作業するメンバー間で状況を共有できるよう、Slackのログチャンネル運用を提案・導入し、チームの開発速度の向上を果たした。結果として、私たちは「開発スピードが速く、プロダクトの品質も高い」チームと評価を受けた。",
    tags: ["React Native", "TypeScript", "Scrum", "Jira", "GitHub"],
    type: "internship",
  },
  {
    id: "curriculum",
    period: "大学4年 / 2025.3 – 2025.10",
    name: "CURRICULUM",
    tagline: "未経験者がゴールまで走り切れる、学習体験の設計",
    story: "IT業界は人材不足が深刻で、就職を希望する文系学生も多い。しかし既存の研修教材は理論とサンプルコードが中心で、未経験者にとって「どこから始めればいいか」がわからず、学習を続けられない構造になっていた。 この課題に向き合い、文系・未経験の学生がWebアプリ開発をゼロから学べるKUMON式カリキュラムを単独で設計・制作した。\n最大の壁は「知識の呪い」だった。変数がなぜ存在するのか、インデントに意味があること——コードを書く上でのあらゆる「デフォルト知識」を意識的に言語化し直すところから始めた。\n技術を教えることより先に、「学習者はどこで詰まるか」「どこで諦めるか」を設計の軸に置いた。理論→練習→実践のループを繰り返し、要所にチェックポイントと成功体験を配置。また、森の小動物キャラクターによる世界観を作り込み、長い学習過程でも継続できる体験を設計した。\n完成後、文系出身の社員3名が全員完走。現在も実際の研修として継続運用されている。",
    tags: ["React", "TypeScript", "Node.js", "Java", "SQL", "Spring", "Instructional Design"],
    type: "internship",
  },
  {
    id: "bridgeapp",
    period: "大学4年 / 2025.10 – 2026.3",
    name: "BRIDGEAPP",
    tagline: "「なぜ作るか」から考えた、初めての上流工程",
    story: "「企業に自分を正しく届けられない」、「自分に合う場所を見つけられない」\n「即戦力が欲しいのにそんな学生となかなか巡り合えない」——\n既存の就職市場には、学生・企業双方にとってミスマッチが生まれやすい構造がある。私たちは、未経験学生向けのIT研修を運営し、研修を通じて蓄積された学生データを活かし、ミスマッチが生まれやすい構造を変えられると考えた。その一環として、私は学生と企業のマッチングプラットフォームのAI駆動開発に携わった。\n実務レベルの上流工程は初めてだったこらこそ、「何を作るか」より「なぜ作るか」を先に考え抜いた。その手段として、Lean Canvasでビジネスモデルを整理した。その結果、課題・提供価値・収益構造が一本の線でつながり、設計の軸が定まった。学生・企業それぞれのユーザーフローを設計し、Atomic Designの考え方で画面を分解しながら、詳細設計まで完成させた。離脱後もチームの基盤資産として継続活用されている。",
    tags: ["Lean Canvas", "Requirements Definition", "System Design", "AI Driven Development"],
    type: "internship",
  },
  {
    id: "wasecord",
    period: "大学3年 / 2024.7",
    name: "Wasecord",
    tagline: "履修経験を持つ先輩に、後輩が気軽に質問できる場",
    story: "「この授業、どう勉強すればいい？」「課題はどれくらい大変？」\n——そんな後輩の不安を、先輩に気軽に相談できる場を作りたいという思いから、早大情報理工学科向けの授業連携Webアプリを開発した。\nチーム 4 人でゼロから制作し、授業単位でつながれるチャット機能を持つWebアプリを開発した。グループチャットやDMを通じて、学生同士の情報共有を可能にした。\nチームの中で私はフロントエンドを担当し、使いやすさと一貫性を意識した設計を行い、チームで一個のプロダクトを初めて作り切る経験となった。",
    tags: ["React", "JavaScript", "PHP", "MySQL", "Docker", "GitHub"],
    images: [
      "wasecord/login.png",
      "wasecord/create.png",
      "wasecord/list.png",
      "wasecord/tag.png",
      "wasecord/groupchat.png",
      "wasecord/dm.png",
      "wasecord/setting.png",
      "wasecord/howto.png",
    ],
    link: "wasecord/Group1A.pdf",
    linkLabel: "説明資料を見る",
    type: "team",
  },
  {
    id: "lovepoem",
    period: "大学1年 / 2022",
    name: "LovePoem",
    tagline: "エンジニアになりたいと思った、あの夜",
    story: "大学一年生のころ、K-POPダンスイベントの動画に登場したダンサーの沼に落ちた。推しの神シーンを集めるツールを C 言語で作り、プログラミングで手間を省ける体験から、コードを書く楽しさに目覚めた。\nその後、神シーンを見返すたびに、動画を探し直す必要があることに違和感を感じ、 HTML+CSS を独学しながら、神シーンを一覧管理・再利用できるWebサイトを構築した。コードで身の回りの課題を解消できた体験が、エンジニアを志す原点となった。",
    tags: ["HTML", "CSS", "JavaScript", "C"],
    link: "https://mamezlf.github.io/lovepoem/index.html",
    linkLabel: "Webサイトを見る",
    type: "origin",
  },
];

// Plan 16: Filter types
const filterOptions = [
  { key: "all", label: "すべて" },
  { key: "personal", label: "個人開発" },
  { key: "internship", label: "インターン" },
  { key: "team", label: "チーム開発" },
  { key: "origin", label: "原点" },
] as const;

type FilterKey = (typeof filterOptions)[number]["key"];

const typeLabel: Record<string, string> = {
  origin: "原点",
  team: "チーム開発",
  personal: "個人開発",
  internship: "インターン",
};



const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [previewState, setPreviewState] = useState<{
    images: string[];
    index: number;
    direction: "left" | "right" | null;
  } | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (!previewState || previewState.images.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setPreviewState((prev) =>
          prev
            ? {
              ...prev,
              direction: "right",
              index: (prev.index - 1 + prev.images.length) % prev.images.length,
            }
            : null
        );
      } else if (e.key === "ArrowRight") {
        setPreviewState((prev) =>
          prev
            ? {
              ...prev,
              direction: "left",
              index: (prev.index + 1) % prev.images.length,
            }
            : null
        );
      } else if (e.key === "Escape") {
        setPreviewState(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewState]);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="projects">
      <div className="section-container">
        <div className="projects-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">開発経験</h2>
          <p className="projects-sub">
            日常で気づいた違和感を課題として捉え、エンジニアリングで解消することに取り組んできました。
          </p>
        </div>

        {/* Plan 16: Filter tabs — Notion-style */}
        <div className="project-filters">
          {filterOptions.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-tab ${activeFilter === key ? "active" : ""}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Plan 12: Narrative card flow — no timeline nodes or vertical lines */}
        <div className="project-list">
          {filtered.map((project) => (
            <div key={project.id} className="project-item">

              {/* Plan 14: Card header — always visible */}
              <div
                className="project-card-header"
                onClick={() => toggleExpand(project.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleExpand(project.id)}
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

                {/* Plan 14: Expand indicator — clean chevron text */}
                <span className="expand-indicator">
                  {expanded[project.id] ? "閉じる" : "詳しく読む"}
                  <span className="expand-arrow">
                    {expanded[project.id] ? " ↑" : " ↓"}
                  </span>
                </span>
              </div>

              {/* Plan 13: Expandable narrative — 4-part structure */}
              <div
                className={`project-detail-wrapper ${expanded[project.id] ? "expanded" : ""}`}
              >
                <div className="project-detail">
                  {project.story && (
                    <p className="project-story">{project.story}</p>
                  )}

                  {/* Plan 15: Images */}
                  {project.images && (
                    <div className="project-images">
                      {project.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={`${import.meta.env.BASE_URL}${img}`}
                          alt={`${project.name} screenshot ${idx + 1}`}
                          className="project-thumbnail"
                          onClick={() =>
                            setPreviewState({ images: project.images!, index: idx, direction: null })
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
                      {project.linkLabel || "リンクを開く"} →
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom philosophy */}
        <div className="projects-footer">
          <p className="philo-quote">
            使う人に寄り添ったプロダクトを作り続けたいです。
          </p>
        </div>
      </div>

      {/* Plan 15: Lightbox */}
      {previewState && (
        <div className="lightbox" onClick={() => setPreviewState(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setPreviewState(null)}
              aria-label="閉じる"
            >
              ✕
            </button>
            {previewState.images.length > 1 && (
              <button
                className="lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewState({
                    ...previewState,
                    direction: "right",
                    index:
                      (previewState.index - 1 + previewState.images.length) %
                      previewState.images.length,
                  });
                }}
                aria-label="前の画像"
              >
                ←
              </button>
            )}
            <img
              key={previewState.index}
              src={`${import.meta.env.BASE_URL}${previewState.images[previewState.index]}`}
              alt="Preview"
              className={`lightbox-img ${previewState.direction === "left"
                ? "slide-from-right"
                : previewState.direction === "right"
                  ? "slide-from-left"
                  : ""
                }`}
            />
            {previewState.images.length > 1 && (
              <button
                className="lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewState({
                    ...previewState,
                    direction: "left",
                    index:
                      (previewState.index + 1) % previewState.images.length,
                  });
                }}
                aria-label="次の画像"
              >
                →
              </button>
            )}
            <div className="lightbox-counter">
              {previewState.index + 1} / {previewState.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
