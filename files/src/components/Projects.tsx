import React, { useState } from 'react';


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
  type: 'origin' | 'team' | 'personal';
}

const projects: Project[] = [
  {
    id: 'ccn',
    period: '大学1年 / 2022',
    name: 'CCN Timestamp Web',
    tagline: 'エンジニアになりたいと思った、あの夜。',
    story:
      'K-POPダンスイベント Random Play Dance 動画を見てあるダンサーに沼落ち。\nYouTube で推しダンサーの TimeStamps をC言語で自動入力するツールを作り、「プログラミングで手間を省ける」という体験が、コードを書く楽しさに気づいたきっかけ。\n推しが出演するRPD動画の中で「あの曲の場面だけもう一度見たい」と思っても、毎回探し直す手間がありました。タイムスタンプ情報を一か所にまとめて、自分でも使えて他の人とも共有できるWebサイトを作れないかと考えました。ちょうどGWにHTMLとCSSを独学し始めたタイミングで、学んだことをすぐ実践する形で制作\nClaude CodeもCodexもない時代に、ヌーブが手で打ち込んだ、粗削りな原点——',
    tags: ['HTML', 'CSS', 'JavaScript', 'C'],
    highlights: [
      'C言語でタイムスタンプ入力補助ツールを自作',
      'HTMLを独学し、GW中にWebサイトを完成',
      'ソフトウェアエンジニアを志した原点',
    ],
    link: 'https://mamezlf.github.io/lovepoem/index.html',
    accentColor: '#c47ab3',
    emoji: '🕊️',
    type: 'origin',
  },
  {
    id: 'wasecord',
    period: '大学2〜3年 / 2024',
    name: 'Wasecord',
    tagline: '同じ授業で悩んでいる誰かと、つながれたら。',
    story:
      '「ラズパイが繋がらないとき、相談できる場所がほしい」——\nそんな同期の声から生まれた、早大情報理工学科向けの授業連携アプリ。\n4人でゼロから制作。フロントエンドを担当し、Material UI で UI 構築、 Bootstrap + React で画面実装。\nグループチャット・DM・授業一覧など複数の画面を、バックエンドチームと連携しながら仕上げた。「使いやすい」と思ってもらえる画面を、チームの中で作り切った経験。',
    tags: ['React', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'Docker', 'GitHub'],
    highlights: [
      'Figmaデザインをもとに Bootstrap + React で複数画面を実装',
      'スクロール挙動・アクティブ状態・フォントオーバーフローなど、UX細部を作り込み',
      '4人チームでのGitHub運用（PR・マージ・コンフリクト解決）',
      'Docker（MySQL / Tomcat / Redis / PHP）で開発環境を統一',
    ],
    images: [
      '/wasecord/ログイン画面.png',
      '/wasecord/アカウント作成画面.png',
      '/wasecord/授業一覧とタグ選択.png',
      '/wasecord/タグによってフィルタリング.png',
      '/wasecord/グループチャット画面.png',
      '/wasecord/DM画面.png',
      '/wasecord/アカウント設定.png',
      '/wasecord/使い方画面.png'
    ],
    link: '/wasecord/Group1A.pdf',
    accentColor: '#7ab3d4',
    emoji: '🎓',
    type: 'team',
  },
  {
    id: 'uriage',
    period: '大学院 / 2026',
    name: 'URIAGE',
    tagline: 'この時代に、人間がツールに合わせる必要はない。',
    story:
      '私はハンドメイドが趣味で、普段は千羽鶴を折って繋げて、メルカリに出品している。\nでも、普通郵便の送料・梱包材・材料費を差し引いた利益がわからない。既存ツールは「私がツールに合わせる必要がある」——\nなら自分で作ればいい。Vibe Codingで、約2時間でプロトタイプを完成。(今はマイスマホで利用中）』',
    tags: ['Swift', 'SwiftUI', 'SwiftData', 'Vibe Coding', 'iOS'],
    highlights: [
      'メルカリリンクから商品情報を自動読み込み（推し機能）',
      '月次レポート・送料計算・資材管理など9モジュール',
      '短時間でプロトタイプ完成・実機動作確認済み',
    ],
    images: [
      '/URIAGE/IMG_0337.png',
      '/URIAGE/IMG_0338.png',
      '/URIAGE/IMG_0339.png',
      '/URIAGE/IMG_0340.png',
      '/URIAGE/IMG_0341.png'
    ],
    link: 'https://note.com/mamezlf/n/n775888ddc071',
    accentColor: '#d4a96a',
    emoji: '📦',
    type: 'personal',
  },
];

const typeLabel: Record<string, string> = {
  origin: '原点',
  team: 'チーム開発',
  personal: '個人開発',
};

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [previewState, setPreviewState] = useState<{ images: string[]; index: number } | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="projects">
      <div className="section-container">
        <div className="projects-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">開発プロジェクト</h2>
          <p className="projects-sub">
            学年が上がるごとに、作れるものが増えていった。
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
                  style={{ borderColor: project.accentColor, background: `${project.accentColor}20` }}
                >
                  <span>{project.emoji}</span>
                </div>
                {i < projects.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Card */}
              <div
                className={`project-card ${expanded[project.id] ? 'expanded' : ''}`}
                style={{ '--project-accent': project.accentColor } as React.CSSProperties}
              >
                <div className="project-card-header" onClick={() => toggleExpand(project.id)}>
                  <div className="project-meta">
                    <span className="project-period">{project.period}</span>
                    <span className="project-type-badge">{typeLabel[project.type]}</span>
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <div className="project-tags">
                    {project.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <button className="expand-btn">
                    {expanded[project.id] ? '閉じる ↑' : '詳しく見る ↓'}
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
                            <span className="highlight-dot" style={{ background: project.accentColor }} />
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
                            onClick={() => setPreviewState({ images: project.images!, index: idx })}
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
                        {project.id === 'uriage' ? 'note記事を読む →' : project.id === 'wasecord' ? '説明資料を見る →' : 'サイトを見る →'}
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
              「作った仕組みが誰かの役に立つ。それが、作り続ける理由。」
            </span>
          </div>
        </div>
      </div>

      {previewState && (
        <div className="lightbox" onClick={() => setPreviewState(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setPreviewState(null)}>×</button>
            {previewState.images.length > 1 && (
              <button
                className="lightbox-nav prev"
                onClick={(e) => { e.stopPropagation(); setPreviewState({ ...previewState, index: (previewState.index - 1 + previewState.images.length) % previewState.images.length }); }}
              >
                ‹
              </button>
            )}
            <img src={previewState.images[previewState.index]} alt="Preview" />
            {previewState.images.length > 1 && (
              <button
                className="lightbox-nav next"
                onClick={(e) => { e.stopPropagation(); setPreviewState({ ...previewState, index: (previewState.index + 1) % previewState.images.length }); }}
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
