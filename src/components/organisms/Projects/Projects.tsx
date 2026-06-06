import React, { useState } from "react";
import { SectionHeader } from "../../molecules/SectionHeader";
import { FilterGroup } from "../../molecules/FilterGroup";
import { ExpandableCard } from "../ExpandableCard";
import { Lightbox, type LightboxState } from "../Lightbox";
import { ExternalLink } from "../../atoms/ExternalLink";
import styles from "./Projects.module.css";

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
  type: ("origin" | "team" | "personal" | "internship")[];
}

const projects: Project[] = [
  {
    id: "uriage",
    period: "大学院 / 2026.4 –",
    name: "URIAGE",
    tagline: "個人販売者の収支管理を、アプリで一元化",
    story:
      "自分が制作したハンドメイド作品をフリマアプリで販売する中で、売上から送料・梱包材・仕入れ原価を差し引いた実利益を把握しにくいという課題を感じ、AIを活用して売上管理アプリ URIAGE を企画・開発した。要件定義から設計・実装・運用まで一貫して行い、商品価格・送料・販売手数料・梱包費などを一元管理できるようにした。また、商品URLから商品情報を自動取得する機能を実装し、ユーザーが手入力する負担を減らせるよう工夫した。現在は自分のスマホで実際に運用しながら改善を重ね、売上管理を大きく効率化できている。今は App Store で公開する準備を進めている。",
    tags: ["Swift", "SwiftUI", "SwiftData", "iOS"],
    link: "https://note.com/mamezlf/n/n896d0dcde280",
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
    type: ["personal"],
  },
  {
    id: "kintai",
    period: "大学3年 / 2024.8 – 2024.11",
    name: "KNTY24 (KINTAI)",
    tagline: "開発を早く進める仕組みを、未経験チームの中で整備",
    story:
      "4人チームで行った勤怠管理アプリ開発の長期インターンシップで、React Native・TypeScriptを用いたアジャイル開発に携わった。私は実装だけでなく、タスク分配や進捗管理、コーディングルール策定など、PMに近い役割も担った。\n開始当初はチーム内に技術力や稼働時間の差があり、開発中に課題で行き詰まるメンバーもいた。そこで、メンバーが気軽に相談できる雰囲気づくりを意識し、進捗や困りごとを積極的に確認するようにした。次第にメンバー同士でも自然に質問や相談が行われるようになり、互いにサポートし合う文化が生まれた。\nまた、レビュー待ちや認識のずれによる手戻りが頻繁に発生していたため、Slackのログチャンネルを活用した情報共有の仕組みを整備し、コード実装から PR レビューまでのルールを明文化した。その結果、レビュー効率や進捗管理の精度が向上し、メンターから「品質とスピードの両立ができている」と評価をいただいた。",
    tags: ["React Native", "TypeScript", "Firebase", "Agile", "Jira", "GitHub"],
    type: ["internship", "team"],
  },
  {
    id: "wasecord",
    period: "大学3年 / 2024.7",
    name: "Wasecord",
    tagline: "履修経験を持つ先輩に、後輩が気軽に質問できる場",
    story:
      "Wasecordは、早稲田大学情報理工学科の学生向けに開発した授業連携Webアプリである。開発のきっかけは、自分たちが低学年の時に感じた「履修登録に関する情報の少なさ」だった。シラバスだけでは授業の難易度や学習方法が分かりづらく、「どの授業を履修すべきか」「どのように勉強すればよいか」を気軽に相談できる場がないことを課題として感じていた。\nそこで、履修経験のある先輩と後輩をつなぐプラットフォームを企画し、4人チームでゼロから開発した。授業ごとのグループチャットやDM機能を実装し、履修経験者から学習方法や授業情報を共有してもらえる仕組みを構築した。\n私は主にフロントエンド開発を担当し、ユーザーが直感的に利用できるUI設計や画面全体の一貫性を意識して実装を行った。チームで要件定義から設計・実装まで進め、一つのプロダクトを完成させた初めての経験となった。",
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
    type: ["team"],
  },
  {
    id: "lovepoem",
    period: "大学1年 / 2022",
    name: "LovePoem",
    tagline: "エンジニアになりたいと思った、あの夜",
    story:
      "LovePoemは、私がエンジニアを志すきっかけになった個人開発プロジェクトである。大学1年生の頃、K-POPダンスイベントの動画に登場したダンサーに強く惹かれ、推しの印象的なシーンを効率よく集めるためのツールをC言語で作成した。プログラミングによって自分の手間を減らせる体験を通じて、コードを書く楽しさを知った。\nその後、集めたシーンを見返すたびに動画を探し直す必要があることに面倒さを感じ、HTMLとCSSを独学しながら、シーンを一覧管理・再利用できるWebサイトを構築した。この経験を通じて、課題を発見し、それをプロダクトとして形にし、課題が改善されるところまで辿り着く一連のプロセスに大きな喜びを感じるようになり、エンジニアを目指す原点となった。",
    tags: ["HTML", "CSS", "JavaScript", "C"],
    link: "https://mamezlf.github.io/lovepoem/index.html",
    linkLabel: "Webサイトを見る",
    type: ["origin"],
  },
  {
    id: "curriculum",
    period: "大学4年 / 2025.3 – 2025.10",
    name: "Instructional Design for IT Training",
    tagline: "未経験者がゴールまで走り切れる、学習体験の設計",
    story:
      "文系・プログラミング未経験の学生向けに、Webアプリ開発をゼロから学べるIT研修カリキュラムを企画・設計した。HTML/CSS、TypeScript、React、Gitなどを学べる全60項目・約4,000枚の教材を制作し、理論に加え、実際に手を動かしながら段階的に学べるKUMON式の学習構造を設計した。\n特に、未経験者がどこでつまずきやすいかを分析し、変数やインデントなど経験者には当たり前となっている前提知識を細かく分解して教材化した。また、学習を継続しやすいようにチェックポイントや成功体験を配置し、学習者を意識しながら学習体験を設計した。\n完成後は文系出身の社員3名による検証を実施し、そのフィードバックを反映して改善を重ねた。現在は20名以上の学生が参加する研修として継続運用されている。",
    tags: ["UI/UX Design", "Full-Stack Engineering"],
    type: ["internship"],
  },
  {
    id: "training-support",
    period: "大学4年 / 2025.6 – 2025.12",
    name: "Training Support",
    tagline: "未経験者の学習過程に伴走し、教材と支援体制を改善",
    story:
      "未経験者向けIT研修の講師・学習支援を担当した。対象は、実運用前の社内テストに参加した社員と、実際に研修を受講する20名以上の学生で、質問対応・コードレビュー・面談を通じて学習状況を把握した。\n現場では受講者のつまずき方を観察し、学生ごとの理解度や取り組み方を記録した。そこで得られたフィードバックをもとに、教材の説明順序や演習内容を継続的に改善した。\nこの研修の価値は、学生が学習を完走することに加え、研修中に蓄積された学生に関する情報データを企业に提供し、采用判断に活用できるようにする点にあった。単に教えるだけでなく、学生の成长过程を可视化し、教材制作だけでは见えなかった学习者のリアルな课题を支援体制に反映させた。",
    tags: ["Code Review", "Mentoring", "Feedback Analysis", "Learning Support"],
    type: ["internship"],
  },
  {
    id: "bridgeapp",
    period: "大学4年 / 2025.10 – 2026.3",
    name: "Job Matching Platform",
    tagline: "「なぜ作るか」から考えた、初めての上流工程",
    story:
      "未経験学生向けIT研修で蓄積された学生データを活用し、学生と企業のミスマッチを減らすことを目的としたマッチングプラットフォームのAI駆動開発に参加した。既存の就職市場には、学生側には「自分を企業に正しく届けられない」「自分に合う場所を見つけられない」という課題があり、企業側には「即戦力が欲しいが、適した学生になかなか出会えない」という課題がある。\n私はこの課題に対して、学生と企業双方のニーズを整理し、サービスとして成立するマッチング体験を設計するため、AI駆動開発によるプロダクト開発に携わった。実務レベルの上流工程に本格的に関わるのは初めてだったため、「何を作るか」ではなく、「誰のどの課題を解決するのか」を考え抜くことを重視した。\nそのために、Lean Canvasを用いて課題・提供価値・収益構造を整理し、事業として成立する前提を構造化した。また、学生・企業双方のユーザーフローを設計し、サービス要件を画面設計や詳細設計へ落とし込み、開発チームが実装できる状態まで具体化した。作成した設計資料は、離脱後にもチーム内で継続的に活用されており、開発を進めるための基盤資産となっている。",
    tags: [
      "Product Engineering",
      "UI/UX Design",
      "System Design",
      "AI Driven Development",
    ],
    type: ["internship"],
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
  const [previewState, setPreviewState] = useState<LightboxState | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type.includes(activeFilter));

  return (
    <div id="projects" className={styles.projects}>
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="開発経験"
          subtitle="日常で気づいた違和感を課題として捉え、エンジニアリングで解消することに取り組んできました。"
        />

        {/* Plan 16: Filter tabs — Notion-style */}
        <FilterGroup<FilterKey>
          options={filterOptions}
          activeKey={activeFilter}
          onChange={setActiveFilter}
        />

        {/* Plan 12: Narrative card flow — no timeline nodes or vertical lines */}
        <div className={styles.list}>
          {filtered.map((project) => (
            <ExpandableCard
              key={project.id}
              id={project.id}
              period={project.period}
              typeLabels={project.type.map((t) => typeLabel[t])}
              title={project.name}
              subtitle={project.tagline}
              tags={project.tags}
              isExpanded={!!expanded[project.id]}
              onToggle={toggleExpand}
            >
              {project.story && <p className={styles.story}>{project.story}</p>}

              {/* Plan 15: Images */}
              {project.images && (
                <div className={styles.images}>
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={`${import.meta.env.BASE_URL}${img}`}
                      alt={`${project.name} screenshot ${idx + 1}`}
                      className={styles.thumbnail}
                      onClick={() =>
                        setPreviewState({
                          images: project.images!,
                          index: idx,
                          direction: null,
                        })
                      }
                    />
                  ))}
                </div>
              )}

              {project.link && (
                <ExternalLink href={project.link} className="project-link">
                  {project.linkLabel || "リンクを開く"} →
                </ExternalLink>
              )}
            </ExpandableCard>
          ))}
        </div>

        {/* Bottom philosophy */}
        <div className={styles.footer}>
          <p className={styles.quote}>
            使う人に寄り添ったプロダクトを作り続けたいです。
          </p>
        </div>
      </div>

      {/* Plan 15: Lightbox */}
      <Lightbox
        state={previewState}
        onClose={() => setPreviewState(null)}
        onChangeState={setPreviewState}
      />
    </div>
  );
};

export default Projects;
