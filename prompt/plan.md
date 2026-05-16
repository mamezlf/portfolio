🎨 设计系统层（CSS Token & Typography）
计划 01 — 重构 CSS Design Tokens 重新调校 index.css 中的 :root 变量：将背景色改为更温暖的米白（#f8f7f4），文字色改为深灰而非纯黑（#2c2b28），引入更精细的 spacing scale，统一 --ease 曲线，删除多余的 accent 变量。

计划 02 — 精化字体系统 将字体组合从 Sora+NotoSansJP 替换为更有编辑感的方案（如 Lora 或 Instrument Serif 做标题，Inter 做正文），调整各级标题的 line-height、letter-spacing、font-weight，使整体阅读节奏更平静。

计划 03 — 统一动画系统 将所有 fadeUp 动画的幅度从 16px 降至 10px，时长延长至 0.9s，删除 pulse 动画（过于活跃），只保留进入时的单次淡入，禁止所有 hover 的 translateY(-2px) 位移效果（改为仅 opacity/border 变化）。

🏠 Hero Section（Welcome.tsx）
计划 04 — 重构 Hero 布局结构 删除 blob 背景（过于装饰性），将 Hero 从 min-height: 100vh 调整为更收敛的尺寸，采用左对齐而非居中布局，使页面更具编辑感（参考 Scandinavian editorial 风格）。

计划 05 — 重写 Hero 文案层级 调整 eyebrow 文字为更 quiet 的表达，主标题保持日文但调整排版，减少 quote block 的视觉权重（去掉引号装饰），让 philosophy 作为副标题自然流出，而非放在 card 盒子里。

计划 06 — 简化 Hero CTA 与 scroll 指示器 将两个按钮精简为一个主要动作，scroll 指示器改为更简约的表达（一条细线即可），去除 ChevronDown icon，整体减少 Hero 的信息密度。

👤 About Section（About.tsx）
计划 07 — 重构 About 整体布局 将两列 grid 改为更有呼吸感的单列叙事流，或调整 grid 比例为 5fr 4fr，左侧 Bio 区域优先呈现"人"而非"简历"。

计划 08 — 优化 Bio 卡片与头像区 头像区去掉 card border，改为更自然的展示；Bio 文字改为段落式叙事，减少 accent-text 的强调用法（过于刻意），让个性自然流露。

计划 09 — 重设计 Skills 技术栈展示 将 skills-block 的卡片感降低（去掉 box-shadow），改为带细线分隔的简洁列表，Core Stack 的 tag 视觉权重降低，整体对齐 MUJI 式简约。

计划 10 — 重构语言能力展示 语言列表的彩色 dot 改为更克制的中性色或去除，level 信息排版改为更具层次感的方式，减少视觉噪点。

计划 11 — 优化研究卡片（Research Card） Research Card 去掉 icon（BookOpen 图标过于 dashboard-style），改为带细线左边框的引用块样式，链接样式改为低调的 underline。

📁 Projects Section（Projects.tsx）
计划 12 — 废弃 Timeline 布局，改为叙事卡片流 当前的 timeline（icon node + 竖线 + card）视觉噪点过多。改为纯净的垂直叙事卡片流，每个 project 用水平细线分隔，去掉 timeline node icon。

计划 13 — 重写 Project Card 结构（Problem→Action→Outcome→Reflection） 将现有的 story（大段独白）+ highlights（bullet points）结构，重构为 design.md 要求的四段式叙事结构：Problem / Action / Outcome / Reflection，每段带小标题。

计划 14 — 精化 Project Card 视觉设计 降低 card 的 border 存在感，去掉 box-shadow: 0 8px 24px（hover 时阴影太重），expand 按钮改为更有设计感的展开方式，project name 字号调整。

计划 15 — 优化 Project 图片预览（Lightbox） Lightbox 样式优化：背景蒙版更柔和，关闭按钮位置调整，导航按钮改为更简约的 ← → 样式，图片容器加 border-radius。

计划 16 — 添加 Project 类型过滤器（可选 Layer 1 扫描功能） 在 Projects 顶部加入轻量级的类型筛选 tab（全部 / 个人开发 / インターン / チーム開発），帮助 HR 快速扫描分类。样式参考 Notion 的 filter tab。

📩 Closing Section（Closing.tsx）
计划 17 — 重构 Closing 布局与文案 去掉 closing-bg-glow（人工光晕效果），重写 closing title 使其更温暖自然（当前「何かを作りませんか」已经很好，微调排版），整体改为更宁静的收尾感。

计划 18 — 优化 Contact Links 展示 closing-link 卡片去掉厚重的 border box，改为带细线的 inline link 组，去掉 FileText / GitBranch 图标（太多 icon），用文字标识代替。

🧭 Nav（App.tsx）
计划 19 — 精化导航栏细节 Logo ZLF 改为更有设计感的表达（如 Zhang Lingfang 或 ZLF ·），nav link 的 active 状态改为底部细线而非 background fill，整体 nav 高度略微压缩。

🌐 全局优化
计划 20 — 全站 Spacing & Rhythm 调整 审查所有 section 的 padding-top/bottom，统一节奏感，确保段落之间的呼吸空间一致，消除过于拥挤或过于松散的区域。

计划 21 — 响应式与可读性优化 检查移动端断点，确保 about-grid、project cards、hero 在小屏下的降级体验，文字大小和行高在移动端保持可读性。

计划 22 — 最终 Polish：去除视觉噪点 全局扫描并删除：所有不必要的 !important、inline style 的 background: transparent 等临时修复、过多的 decorative divider，确保 CSS 类命名语义清晰一致。