import React, { useState } from "react";

// Plan 13: Narrative structure — Problem / Action / Outcome / Reflection
interface Narrative {
  problem: string;
  action: string;
  outcome: string;
  reflection: string;
}

interface Project {
  id: string;
  period: string;
  name: string;
  tagline: string;
  narrative: Narrative;
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
    narrative: {
      problem:
        "ハンドメイド作品をフリマアプリで販売する中、利益を把握するために毎回手動で売上から送料・資材費を差し引く計算を繰り返す必要があった。記録も分散していて、月単位での振り返りができなかった。",
      action:
        "売上と経費の記録・利益自動計算・商品別収支一覧などの機能を備えたiOSアプリを Swift / SwiftUI で開発した。日常的に自分で使いながら、実運用ベースで設計と改善を繰り返した。",
      outcome:
        "繰り返し発生していた計算作業が自動化され、月次レポートで販売活動の振り返りも可能になった。商品情報の自動取得により、手入力の手間も大幅に削減された。",
      reflection:
        "自分が使い続けるプロダクトを作ることで、「本当に不便なのはどこか」が明確になった。実運用ベースの設計の重要性と、最初から完璧を目指さない反復開発の価値を実感した。",
    },
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
    narrative: {
      problem:
        "インターンで4人の未経験チームによるアジャイル開発に参加した。メンバーのバックグラウンドがバラバラで、コードレビューの品質にばらつきが出やすく、フレックス勤務で進捗が属人化しやすい状況だった。",
      action:
        "PRルール・コーディング規約・フォーマッターを整備してレビュー品質の底上げを図った。また、非同期で作業するメンバー間で状況を共有できるよう、Slackのログチャンネル運用を提案・導入した。エンジニアとしての実装に加え、進捗管理とタスク分配でPMの役割も担った。",
      outcome:
        "5回の2週間スプリントで主要5機能群・7画面をリリース可能な完成度まで実装した。プログラム全体を通じ、「開発スピードが速く、プロダクトの品質も高い」チームと評価を受けた。",
      reflection:
        "技術標準化とコミュニケーション設計が、チームの開発速度と品質に直結することを体感した。プロセスへの投資が、個人の生産性より大きなリターンをもたらすと学んだ。",
    },
    tags: ["React Native", "TypeScript", "Scrum", "Jira", "GitHub"],
    type: "internship",
  },
  {
    id: "curriculum",
    period: "大学4年 / 2025.3 – 2025.10",
    name: "CURRICULUM",
    tagline: "未経験者がゴールまで走り切れる、学習体験の設計",
    narrative: {
      problem:
        "IT業界の人材不足に対し就職を希望する文系学生は多い。しかし既存の研修教材は理論とサンプルコードが中心で、未経験者が「どこから始めればいいか」わからず、途中で諦めてしまう構造になっていた。",
      action:
        "「知識の呪い」を意識的に解きほぐし、変数がなぜ存在するかといった当たり前の知識を一から言語化し直した。理論→練習→実践のループとチェックポイントによる心理的安全設計を軸に、森の小動物キャラクターによる世界観も作り込み、2000枚・70項目のスライドを4ヶ月未満で単独制作した。",
      outcome:
        "文系出身の社員3名が全員完走し、現在も実際の研修として継続運用されている。",
      reflection:
        "「技術を教えること」より先に「どこで詰まるか・どこで諦めるか」を設計の軸に置くことが、学習体験設計の本質だと気づいた。エンジニアリングと教育設計の思考が、思いのほか似ていると感じた。",
    },
    tags: ["React", "TypeScript", "Node.js", "Java", "SQL", "Spring", "Instructional Design"],
    type: "internship",
  },
  {
    id: "bridgeapp",
    period: "大学4年 / 2025.10 – 2026.3",
    name: "BRIDGEAPP",
    tagline: "「なぜ作るか」から考えた、初めての上流工程",
    narrative: {
      problem:
        "既存の就職市場には、学生・企業双方にとってミスマッチが生まれやすい構造がある。スキルが可視化されないまま面接に臨む学生と、即戦力を求めながら出会えない企業の間に、情報の非対称性があった。",
      action:
        "Lean Canvasでビジネスモデル・課題・提供価値を整理し、設計の軸を定めた。学生・企業それぞれのユーザーフローを設計し、Atomic Designの考え方で画面を分解しながら、要件定義→画面仕様書→UIデザイン→DB設計まで上流工程をほぼ一人で推進した。",
      outcome:
        "33画面・8機能群のデザインが完成した。チーム離脱後も制作資材がチームの基盤として継続活用されている。",
      reflection:
        "「何を作るか」より「なぜ作るか」を先に考え抜くことで、設計の判断基準が一本の線でつながった。上流工程の論理性が、下流の実装速度と品質を決めると実感した。",
    },
    tags: ["Lean Canvas", "Requirements Definition", "System Design", "AI Driven Development"],
    type: "internship",
  },
  {
    id: "wasecord",
    period: "大学3年 / 2024.7",
    name: "Wasecord",
    tagline: "履修経験を持つ先輩に、後輩が気軽に質問できる場",
    narrative: {
      problem:
        "「この授業、どう勉強すればいい？」「課題はどれくらい大変？」——そんな後輩の不安を、先輩に気軽に相談できる場がなかった。学年・授業ごとに情報が分断されており、口コミが継承されにくい構造があった。",
      action:
        "チーム4人でフロントエンドを主導し、授業単位でつながれるチャット機能を持つWebアプリを開発した。グループチャット・DM・授業タグ機能により、学生同士の情報共有を設計した。使いやすさと一貫性を意識したUI/UXを実装した。",
      outcome:
        "学年・授業ごとに分断されていた学生間情報共有を統一するプラットフォームが完成し、チームで一個のプロダクトを作り切った初めての経験となった。",
      reflection:
        "フロントエンドを主導する中で、設計の一貫性とチームコミュニケーションの重要性を学んだ。プロダクトの「使いやすさ」は機能の多さではなく、流れの自然さにあると気づいた。",
    },
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
    narrative: {
      problem:
        "K-POPダンスイベントの動画で「推し」の沼に落ちた。神シーンを見返すたびに動画を探し直す必要があり、お気に入りのシーンを一覧で管理できる場所がなかった。",
      action:
        "まずC言語でシーン収集ツールを作り、次にHTML+CSSを独学しながら、神シーンを一覧管理・再利用できるWebサイトを構築した。プログラミングは全て独学、コードで課題を解消する体験を初めて得た。",
      outcome:
        "手間が省け、推し活が格段に快適になった。「コードで身の回りの課題を解消できる」という体験を、初めて実感として得られた。",
      reflection:
        "この体験がエンジニアを志す原点となった。プログラミングは難しいものではなく、「自分の不便」を解消できる身近な道具だと気づいた瞬間だった。",
    },
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

// Plan 13: Narrative section labels
const narrativeLabels: { key: keyof Narrative; label: string }[] = [
  { key: "problem", label: "課題" },
  { key: "action", label: "行動" },
  { key: "outcome", label: "成果" },
  { key: "reflection", label: "気づき" },
];

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [previewState, setPreviewState] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
                  <div className="project-narrative">
                    {narrativeLabels.map(({ key, label }) => (
                      <div key={key} className="narrative-block">
                        <span className="narrative-label">{label}</span>
                        <p className="narrative-text">
                          {project.narrative[key]}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Plan 15: Images */}
                  {project.images && (
                    <div className="project-images">
                      {project.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${project.name} screenshot ${idx + 1}`}
                          className="project-thumbnail"
                          onClick={() =>
                            setPreviewState({ images: project.images!, index: idx })
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
            プロダクトは、作ったチームを映します。
            <br />
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
              src={previewState.images[previewState.index]}
              alt="Preview"
            />
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
