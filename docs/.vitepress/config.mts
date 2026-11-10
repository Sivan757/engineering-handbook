import { defineConfig } from 'vitepress'

const repo = 'Sivan757/engineering-handbook'

export default defineConfig({
  lang: 'zh-CN',
  title: '工程知识库',
  description: '从入门概念到 AI 协作的团队工程手册',
  base: process.env.DOCS_BASE || '/engineering-handbook/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    siteTitle: '工程知识库',
    nav: [
      { text: '首页', link: '/' },
      { text: '新人入门', link: '/start/' },
      { text: 'AI 实践', link: '/ai/' },
      { text: '研发规范', link: '/standards/' },
      { text: '团队成长', link: '/team/' }
    ],
    sidebar: {
      '/start/': [{ text: '新人入门', items: [
        { text: '学习路径', link: '/start/' },
        { text: 'API 是什么', link: '/start/api' },
        { text: 'HTTP 请求与响应', link: '/start/http' },
        { text: '开发工具与排错', link: '/start/terminal' }
      ] }],
      '/ai/': [{ text: 'AI 实践', items: [
        { text: 'AI 基础概念', link: '/ai/' },
        { text: '提示词怎么写', link: '/ai/prompt' },
        { text: 'AI 编程工作流', link: '/ai/coding' },
        { text: 'AI 安全与边界', link: '/ai/security' }
      ] }],
      '/standards/': [{ text: '研发规范（建议稿）', items: [
        { text: '规范总览', link: '/standards/' },
        { text: 'Git 与 PR', link: '/standards/git' },
        { text: 'API 设计', link: '/standards/api-design' },
        { text: '测试与质量', link: '/standards/testing' },
        { text: '发布与回滚', link: '/standards/release' }
      ] }],
      '/team/': [{ text: '团队成长', items: [
        { text: '知识共享机制', link: '/team/' },
        { text: '四周培训计划', link: '/team/training' },
        { text: '文档贡献指南', link: '/team/contributing' }
      ] }],
      '/reference/': [{ text: '参考', items: [
        { text: '术语表', link: '/reference/glossary' },
        { text: '文档模板', link: '/reference/templates' }
      ] }]
    },
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最近更新' },
    socialLinks: [{ icon: 'github', link: `https://github.com/${repo}` }],
    editLink: { pattern: `https://github.com/${repo}/edit/main/docs/:path`, text: '编辑此页' },
    footer: {
      message: '先理解，再实践；先验证，再交付。',
      copyright: '开放知识分享 · 公开仓库请勿提交敏感资料'
    }
  }
})
