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
    period: "大学院 / 2026.4",
    name: "URIAGE",
    tagline: "個人販売者の収支管理を、アプリで一元化",
    story:
      "私はハンドメイドが趣味で、作った作品をフリマアプリで販売している中、利益を把握するのに毎回手動で売上から送料や資材費などを差し引く計算を行う必要がある「ムダ」に気づいた。このムダを課題として捉え、解決するために 売上と経費の記録・利益自動計算・商品別収支一覧 などの機能を備えたiOSアプリを開発した。日常生活で利用しながら改善を重ね、繰り返し発生する計算作業を効率化した。",
    tags: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "Agentic Development",
      "Vibe Coding",
      "iOS",
    ],
    highlights: [
      "送料・資材費を含めた収支を一元管理し、利益の可視化を実現",
      "月次レポート機能により、販売活動の振り返りを効率化",
      "商品情報の自動取得により、手入力の手間を削減",
      "日常的に使用しながら改善を重ね、実運用ベースで設計",
    ],
    images: [
      "URIAGE/home.png",
      "URIAGE/add_record.png",
      "URIAGE/record_list.png",
      "URIAGE/record.png",
      "URIAGE/analysis.png",
      "URIAGE/other.png",
      "URIAGE/link.png",
    ],
    link: "https://note.com/mamezlf/n/n775888ddc071",
    accentColor: "#d4a96a",
    emoji: "📦",
    type: "personal",
  },
  {
    id: "kintai",
    period: "大学3年 / 2024.8 - 2024.11 ",
    name: "KNTY24 (KINTAI)",
    tagline: "開発を早く進める仕組みを、未経験チームの中で整備",
    story:
      "長期インターンで、社内向け勤怠管理アプリを4人チームでアジャイル開発によって構築した。\nReact Native＋TypeScriptを用い、5回のスプリントを通して、要件定義から設計・実装・テスト・レビューまで一貫して行った。\n私はエンジニアとして実装を担う一方、進捗管理やタスク分配、顧客への要件確認も主体的に引き受け、実質 PM の役割を果たした。また、PRルールやコーディング規約、フォーマッターを整備し、レビュー品質の向上に貢献した。さらに、非同期ワークで作業するメンバー間で状況を共有できるよう、Slackのログチャンネル運用を提案・導入し、チームの開発速度の向上を果たした。結果として、私たちは「開発スピードが速く、プロダクトの品質も高い」チームと評価を受けた。",
    tags: [
      "React Native",
      "TypeScript",
      "Scrum",
      "Jira",
      "GitHub",
      "Agile",
      "Team Development",
    ],
    highlights: [
      "5回の2週間スプリントで、主要5機能群・7画面をリリース直前の完成度まで実装",
      "開発者として実装・テスト・レビュー、PMとして進捗管理とタスク分配を行った",
      "標準化と規約の明確化により、レビュー品質とコードの一貫性を改善",
      "Slackでログチャンネルを導入し、フレックス出勤でも進捗の属人化を解消",
      "「プログラム開始以来一番仲良い」「高品質なプロダクトを早く作れる」チームとなった",
    ],
    accentColor: "#7ec8a0",
    emoji: "🏢",
    type: "internship",
  },

  {
    id: "curriculum",
    period: "大学4年 / 2025.3 - 2025.10",
    name: "CURRICULUM",
    tagline: "未経験者がゴールまで走り切れる、学習体験の設計",
    story:
      "IT業界への就職を目指す文系・未経験の学生向けに、Webアプリ開発を一から学べる KUMON 式カリキュラムを単独で設計・制作した。\n最大の課題は「知識の呪い」だった。自分が当たり前に知っていることは、学習者には当たり前ではない。変数がなぜ存在するのか、インデントに意味があること——コードを書く上でのあらゆる「デフォルト知識」を意識的に言語化し直すとこから始めた。\n技術を教えることより先に、「学習者がどこで詰まるか」「どこで諦めるか」を設計軸に置いた。理論→練習→実践の流れを繰り返し、要所にチェックポイントと成功体験を配置した。また森の小動物キャラクターによる世界観を作り込み、長い学習過程の中でも継続できる雰囲気を設計した。\n完成後、文系出身の社員3名が全員完走。現在も実際の研修として継続運用されている。",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Java",
      "SQL",
      "Spring",
      "Instructional Design",
    ],
    highlights: [
      "2000枚・70項目のスライドを4ヶ月未満で単独制作",
      "「知識の呪い」と向き合い、未経験者目線で技術概念を構造化・言語化",
      "理論→練習→実践のサイクルと、チェックポイントによる心理的安全設計",
      "キャラクター・世界観による「続けたくなる」学習体験の設計",
      "文系社員3名が全員完走・現在も実運営中",
    ],
    accentColor: "#7ab3d4",
    emoji: "📖",
    type: "internship",
  },
  {
    id: "bridgeapp",
    period: "大学4年 / 2025.10 - 2026.3",
    name: "BRIDGEAPP",
    tagline: "「なぜ作るか」から考えた、初めての上流工程",
    story:
      "IT就職を目指す学生と、即戦力を求める中小企業をつなぐマッチングプラットフォームの設計を担当した。上流工程（要件定義・基本設計・詳細設計）は完全に未経験。「何を作るか」より「なぜ作るか」を先に考え抜くことを求められた初めてのプロジェクトだった。\n市場の既存サービスは履歴書と数回の面接だけで判断するため、学生・企業双方にミスマッチが多い。自社研修を通じて得た学生の行動データと特性情報を活かした、新しいマッチングの設計を目指した。\nLean Canvasでビジネスモデルを整理し、学生・企業それぞれのユーザーフロー（能動・受動）を設計。Atomic Designの考え方で画面を分解しながら、33画面・8機能群の設計稿を完成させた。自分が離脱した後も、設計材料はチームの基盤資産として継続活用されている。",
    tags: [
      "Lean Canvas",
      "Waterfall",
      "Requirements Definition",
      "System Design",
      "AI Driven Development",
    ],
    highlights: [
      "要件定義→画面仕様書→UIデザイン→DB設計まで、上流工程をほぼ一人で推進",
      "Lean Canvasを自ら作成し、ビジネスモデル・課題・提供価値を整理",
      "学生・企業双方のユーザーフローを設計し、33ページ・8機能群の設計稿を完成",
      "新メンバーへの引き継ぎが社内表彰channelで複数回言及される",
      "離脱後も設計材料がチームの基盤として継続活用中",
    ],
    accentColor: "#a07ac4",
    emoji: "🔗",
    type: "internship",
  },

  {
    id: "wasecord",
    period: "大学3年 / 2024.6",
    name: "Wasecord",
    tagline: "履修経験を持つ先輩に、後輩が気軽に質問できる場",
    story:
      "「この授業、どう勉強すればいい？」「課題はどれくらい大変？」\n——そんな後輩の不安を、先輩に気軽に相談できる場を作りたいという思いから、早大情報理工学科向けの授業連携Webアプリを開発した。\nチーム 4 人でゼロから制作し、授業単位でつながれるチャット機能を持つWebアプリを開発した。グループチャットやDMを通じて、学生同士の情報共有を可能にした。\nチームの中で私はフロントエンドを担当し、使いやすさと一貫性を意識した設計を行い、チームで一個のプロダクトを初めて作り切る経験となった。",
    tags: [
      "React",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "Docker",
      "Figma",
      "GitHub",
    ],
    highlights: [
      "学年ごと・授業ごとに分断されていた学生間情報共有を統一するプラットフォームを構築",
      "複数画面にまたがるUI/UXを設計・実装し、ユーザビリティを向上",
      "4人チームの中でフロントエンドを主導し、プロダクトとして動作するレベルまで完成",
    ],
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
    accentColor: "#ca5c69",
    emoji: "🎓",
    type: "team",
  },

  {
    id: "ccn",
    period: "大学1年 / 2022",
    name: "LovePoem",
    tagline: "エンジニアになりたいと思った、あの夜",
    story:
      "大学一年生のころ、K-POPダンスイベントの動画に登場したダンサーの沼に落ちた。推しの神シーンを集めるツールを C 言語で作り、プログラミングで手間を省ける体験から、コードを書く楽しさに目覚めた。\nその後、神シーンを見返すたびに、動画を探し直すつ必要がある「非効率」を発見し、 HTML+CSS を独学しながら、神シーンを一覧管理・再利用できるWebサイトを構築した。「非効率」をコードで解消できた体験が、エンジニアを志す原点となった。",
    tags: ["HTML", "CSS", "JavaScript", "C"],
    highlights: [
      "ソフトウェアエンジニアを志した原点",
      "推し活で発生した「ムダ」に向き合い、ツール化によってムダを解消",
      "個人の課題解決を、再利用可能な仕組みとして作り上げた",
      "新しく学んだ技術をそのまま実際の課題解決に活かした",
    ],
    link: "https://mamezlf.github.io/lovepoem/index.html",
    accentColor: "#c47ab3",
    emoji: "🕊️",
    type: "origin",
  },
];

const typeLabel: Record<string, string> = {
  origin: "原点",
  team: "チーム開発",
  personal: "個人開発",
  internship: "インターン",
};

const contentText = {
  projectsSub:
    "「何を作るか」より先に「なぜ作るか」を考え、情報が不完全でも決断を下し、動き出してきました。",
  philoQuote:
    "自分が感じた課題から動き出し、まず形にして、使いながら直します。",
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
          <p className="projects-sub">{contentText.projectsSub}</p>
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
            <span className="philo-quote">{contentText.philoQuote}</span>
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
