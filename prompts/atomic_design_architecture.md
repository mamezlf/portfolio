# Design System Architecture Plan

UI の視覚的パターンと振る舞い（ビジネスロジックを除く）を抽出し、Atomic Design Rule に基づいたコンポーネント設計を提案します。
「再利用性」「組み合わせ（Composition）」「バリアント（Variant）」を最優先とし、不必要な抽象化を避ける構造としています。

---

## 1. Atoms（原子）
**選定基準:** 最小単位の視覚要素。状態を持たず、いかなるドメインデータ（Project, Skill など）にも依存しない。

- **`Button`**
  - **Variants:** `primary` (Welcomeのボタン), `tab` (Projectsのフィルター), `icon` (Lightboxの矢印・閉じる)
  - **理由:** ネイティブの `<button>` をラップし、一貫したホバー・フォーカス・トランジションを提供する最小単位。
- **`Badge` / `Tag`**
  - **Variants:** `pill` (角丸最大: `.tag`), `rect` (微小な角丸: `.project-type-badge`), `core` (背景色あり: `.tag-core`)
  - **理由:** タグ、ステータス、カテゴリなどを視覚的に囲む最小要素。
- **`Eyebrow` (または `SectionLabel`)**
  - **Variants:** `default` (大文字Mono: `.section-label`, `.skills-heading`), `subtle` (Welcomeの上のテキスト)
  - **理由:** セクションやブロックの「見出しの上の小さな見出し」のパターンが全ページで散見されるため。
- **`ExternalLink`**
  - **Variants:** `inline` (テキスト内リンク: `.project-link`), `block` (プラットフォーム名+ハンドルのブロック: `.closing-text-link`)
  - **理由:** `target="_blank" rel="noopener noreferrer"` の振る舞いと、ホバー時の視覚効果を統一するため。
- **`Avatar`**
  - **理由:** `.bio-avatar`。単純な画像ラッパーだが、正円クリッピングやプレースホルダーの責務を持つ。

---

## 2. Molecules（分子）
**選定基準:** Atoms を組み合わせた再利用可能なパターン。状態を持たず（または最小限）、ドメインに依存しない。

- **`SectionHeader`**
  - **Composition:** `Eyebrow` + `h2.section-title` (+ 任意の `p.sub-title`)
  - **理由:** About, Projects, Closing 全てで使われている「ラベル + 大見出し + (サブテキスト)」のレイアウトを統一する機能的コンポーネント。
- **`KeyValueRow` (または `InfoRow`)**
  - **Composition:** `Label (Atom)` + `Value (Atom)`
  - **理由:** `.bio-info-item` (大学: 早稲田) や `.lang-item` (英語: ビジネス) のように、左右（または上下）にキーと値を並べるパターン。
- **`FilterGroup` (または `Tabs`)**
  - **Composition:** 複数の `Button variant="tab"`
  - **理由:** 選択肢の配列を受け取り、現在アクティブなものをハイライトする単一機能の UI。ドメイン（ProjectFilter）ではなく汎用タブとして実装。
- **`AccordionHeader`**
  - **Composition:** メタ情報 (期間・バッジ) + `h3` (タイトル) + 説明文 + `Badge`群 + `開閉インジケータ`
  - **理由:** Projectsのカードのヘッダー部分。クリック可能なエリアとしてまとまりがあり、汎用的な「詳細を開けるカードのヘッダー」として独立可能。

---

## 3. Organisms（有機体）
**選定基準:** ドメイン知識を持つ、または複雑な状態管理（Context, API, Hooks）を内包するコンポーネント。

- **`Lightbox`**
  - **責務:** 画像配列と初期Indexを受け取り、モーダル表示、左右アニメーション切り替え、キーボードイベント（Esc, 矢印）を自己管理する。
  - **理由:** 非常に複雑な UI ロジックと状態（`index`, `direction`）を持つため Organism。ただしドメイン（何の写真か）には依存しない。
- **`ExpandableCard`**
  - **Composition:** `AccordionHeader` + `Collapse (アニメーションラッパー)` + 任意の `children`
  - **責務:** 開閉状態（`isExpanded`）を管理し、コンテンツを展開する。
  - **理由:** 内部に状態を持ち、複雑なレイアウトを形成するため。
- **`ProjectListSection` (Domain Organism)**
  - **責務:** Projectのデータをマッピングし、`FilterGroup` の状態（`activeFilter`）を持ち、`ExpandableCard` と `Lightbox` を統合する。
  - **理由:** 明確に「Project」というドメインデータに依存し、複数の Molecules/Organisms を束ねるため。
- **`BioSection` / `SkillSection` (Domain Organisms)**
  - **責務:** ユーザーのプロフィール情報、スキルセットのデータを流し込み、複数の `KeyValueRow` や `Badge` をレイアウトする。

---

## 4. Templates（テンプレート）
**選定基準:** ページ全体のレイアウトや、各セクションの共通レイアウト構造。

- **`SectionTemplate`**
  - **責務:** `<section>` タグのラップ、`min-height: 100vh`、`.section-container` による最大幅とパディングの制約を提供する。
  - **理由:** 全てのセクション（Welcome, About, Projects, Closing）が同じコンテナ構造（`max-width: 900px` や `1100px`）を持っているため。これを Template 化することで、ビジネスロジックを含まずレイアウトのみを保証できる。

---

## 5. 抽象化のポイントと注意（Refactoring Agent としての視点）

1. **Variant-first の徹底:** 
   例えば「普通のタグ（丸い）」「コアスキルのタグ（背景色あり）」「プロジェクトタイプのバッジ（四角い）」を別々のコンポーネントにせず、一つの `<Badge variant="pill" | "rect" color="soft" | "outline" />` として統合すべきです。
2. **過度な抽象化の回避 (Premature Abstraction):**
   `Projects.tsx` の内部にある4段構成のストーリー（現状は1つの `story` string）などは、現時点で専用の Molecule にせず、単なる `<p>` または `children` として `ExpandableCard` に渡すべきです。UIパターンとして他で使い回されていないためです。
3. **ドメインの分離:**
   `FilterGroup` に `projects` のカテゴリをハードコードせず、`{ label: string, value: string }[]` を受け取る純粋な Molecule にすることで、将来別のリスト（例えばブログ記事のフィルタなど）でも再利用可能になります。
