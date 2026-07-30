# 黄彬个人网站｜Bin Huang Portfolio

黄彬的中英双语研究工程个人网站，面向 LLM / Agent 技术实习、科研合作、未来博士申请与公开技术传播。

公开访问：[https://benny108.github.io](https://benny108.github.io)

## 网站定位

> 把 LLM 研究做成可运行系统，把技术方案推进到真实业务结果。

网站不是把简历内容搬到网页，而是用“问题—方法—个人贡献—结果—边界”展示：

- 多 Agent、RAG、医疗 AI 与知识工程研究；
- 企业 Agent、知识图谱和生成式 AI 推理优化；
- 技术方案到真实客户与商业验证的完整闭环；
- 知乎、B站和站内双语技术写作。

## 技术栈

- Astro + TypeScript + MDX
- Astro Content Collections
- 中英文独立路由：`/zh/`、`/en/`
- 静态构建 + Sites Worker 入口
- 无登录、无数据库、无统计脚本

## 本地开发

```bash
pnpm install
pnpm dev
```

默认开发地址由 Astro 输出。

## 验证与构建

```bash
pnpm validate:content
pnpm typecheck
pnpm test
```

构建结果位于 `dist/`：

- `dist/client/`：静态页面与公开资源
- `dist/server/index.js`：Sites Worker 入口
- `dist/.openai/hosting.json`：Sites 托管元数据

## 部署

- 源码仓库：`benny108/huang-bin-portfolio`
- 公开站点：GitHub Pages 根站点 `benny108.github.io`
- Sites：使用 `.openai/hosting.json` 关联站点，提交源码、打包构建产物、保存版本后再部署
- 公开站点不依赖数据库、登录或环境变量；发布前必须再次执行 `pnpm test`

## 新增或更新内容

内容位于 `src/content/`：

```text
src/content/
├── publications/
├── projects/
├── writing/
└── awards/
```

每个 slug 必须同时提供中英文文件：

```text
src/content/writing/zh/example.mdx
src/content/writing/en/example.mdx
```

执行 `pnpm validate:content` 会检查中英文配对。

## 论文状态规则

- `published`：已有出版社、DOI 或可靠公开证据；
- `accepted`：已有明确录用证据；
- `under_review`：已确认处于审稿流程；
- `manuscript`：无法公开确认录用或审稿状态；
- `shared_task`：共享任务系统或官方评测结果。

不在公开仓库中上传审稿稿件原文。

## 隐私与素材

- 不公开手机号、成绩单、学号、身份证号、内部 IP 或企业内部文件；
- 奖状只提交脱敏衍生图，不提交原件；
- 不公开客户身份、合同、业务 LoRA、内部路径与企业源代码；
- `private/`、`source-materials/`、带“原件/未脱敏”字样的内容已加入 `.gitignore`。

## 开源与版权

- 网站代码采用 [MIT License](./LICENSE)。
- 个人文字、研究内容、照片、奖状与品牌素材版权所有，未经许可不得复制或商用。
