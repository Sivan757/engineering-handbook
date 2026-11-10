# Engineering Handbook · 工程知识库

使用 [VitePress](https://vitepress.dev/) 构建的中文团队工程知识库，面向新人入门、AI 编程、研发规范和团队知识分享。

文档网站：https://sivan757.github.io/engineering-handbook/

> **公开内容规则：** 不要提交密钥、账号、真实客户数据、公司未公开的项目资料或内部访问地址。公司专用的架构图、流程和运维手册应放在有访问控制的内部知识库。

## 内容

| 领域 | 主要内容 |
| --- | --- |
| [新人入门](docs/start/index.md) | API、HTTP、开发工具、问题排查 |
| [AI 实践](docs/ai/index.md) | AI 概念、提示词、AI 编程、信息安全 |
| [研发规范](docs/standards/index.md) | Git、PR、API 设计、测试、发布 |
| [团队成长](docs/team/index.md) | 四周训练计划、知识分享和文档共建 |
| [术语表](docs/reference/glossary.md) | 高频词汇与简明解释 |

## 本地运行

使用 Node.js 20+：

```bash
npm install
npm run docs:dev
```

构建和预览：

```bash
npm run docs:build
npm run docs:preview
```

## GitHub Pages

首次发布时在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

`main` 分支上的推送会触发 `.github/workflows/deploy-pages.yml`，构建并发布文档。

公开站点路径为 `/engineering-handbook/`。如果仓库改名，需要更新部署工作流中的 `DOCS_BASE`。

## 贡献方式

1. 使用 [文档模板](docs/reference/templates.md) 编写 Markdown。
2. 运行 `npm run docs:build`。
3. 通过 Pull Request 审核内容。
4. 合并后自动发布。

详细规则见 [贡献指南](docs/team/contributing.md)。

## 目录

```text
.github/
  workflows/
  ISSUE_TEMPLATE/
docs/
  .vitepress/
  start/
  ai/
  standards/
  team/
  reference/
```

首版目标是围绕实际问题持续沉淀，而不是一次性写完所有知识。