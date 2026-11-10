# 产研知识库 · Product & Engineering Handbook

面向产品、研发、测试及 AI 实践人员的开放中文知识库。

**在线文档：** https://sivan757.github.io/engineering-handbook/

## 主要入口

- [按角色学习](docs/learning/index.md)：产品经理、研发、测试与 AI 实践。
- [通识基础](docs/start/index.md)：API、HTTP、接口调试。
- [AI 素养](docs/ai/index.md)：大语言模型、提示词、AI 编程。
- [产品与体验](docs/product/index.md)：需求、原型与产品验证的建设计划。
- [研发实践](docs/standards/index.md)：Git、API 设计、测试和发布。
- [团队知识共建](docs/team/index.md)：写作规范、建设路线图和协作。

## 本地开发

需要 Node.js 20+。

~~~bash
npm install
npm run docs:dev
npm run docs:build
~~~

GitHub Pages 使用 `.github/workflows/deploy-pages.yml` 自动发布。仓库 Settings → Pages 中的 Source 选择 **GitHub Actions**。

## 贡献文档

- [写作规范](docs/team/writing-guide.md)
- [内容建设路线图](docs/team/roadmap.md)
- [文档模板](templates/)
- [贡献指南](docs/team/contributing.md)
- [Agent 写作与审查规则](AGENTS.md)

提交 PR 前执行构建，并在描述中记录真实验证结果。

> **公开内容边界：** 不提交密钥、生产地址、客户数据、未公开源码或公司内部架构。团队内部资料需要独立、受控的存储位置。

