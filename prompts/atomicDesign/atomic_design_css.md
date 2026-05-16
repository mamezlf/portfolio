你现在是一个 Frontend Refactoring Agent。

请帮我把当前集中在 `index.css` 的样式，
按照 Atomic Design 架构拆分到对应组件目录中。

目标：

- 每个组件拥有自己的样式文件
- 样式与组件 colocated
- 建立可维护的 Design System 结构
- 保持现有 UI 和行为不变

目录结构示例：

/components
  /atoms
    /Button
      Button.tsx
      Button.module.css

  /molecules
    /SearchBar
      SearchBar.tsx
      SearchBar.module.css

任务：

1. 分析 `index.css`
2. 识别样式属于哪个组件
3. 将样式迁移到对应组件目录
4. 自动更新 import
5. 删除 `index.css` 中已迁移内容

规则：

- 优先使用 CSS Modules
- 相同结构仅样式不同的组件使用 variant
- 不要创建无复用价值组件
- 不要修改 UI 或业务逻辑
- 全局文件只保留 reset、theme、token 等 truly global styles

请输出：

- 新的目录结构
- 每个组件拆分结果
- 剩余的全局样式
- 重构总结