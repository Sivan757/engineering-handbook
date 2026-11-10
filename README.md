# Engineering Handbook · 工程知识库

基于 [VitePress](https://vitepress.dev/) 的中文团队工程知识库。

**在线文档：** https://sivan757.github.io/engineering-handbook/

## 内容导航

- [新人入门](docs/start/index.md)：API、HTTP、开发工具和排错。
- [AI 实践](docs/ai/index.md)：基础概念、提示词、AI 编程和安全。
- [研发规范](docs/standards/index.md)：Git、API 设计、测试和发布。
- [团队成长](docs/team/index.md)：培训计划、知识共享与共建。
- [术语表](docs/reference/glossary.md)。

## 本地开发

要求 Node.js 20+。

```bash
npm install
npm run docs:dev
npm run docs:build
```

## 发布

在 GitHub 仓库 Settings → Pages → Build and deployment 中选择 **GitHub Actions**。推送到 `main` 后由工作流自动构建和发布。

## 贡献

请参阅 [文档贡献指南](docs/team/contributing.md)。可以通过 Issue 提出知识点需求，通过 Pull Request 审核文章。

> **公开内容规则：** 不提交密钥、客户信息、内部地址、未公开代码和内部架构。公司内部运行手册应放在访问受控的独立知识库。

