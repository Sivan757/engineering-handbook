import { defineConfig } from 'vitepress'

const repo = 'Sivan757/engineering-handbook'

export default defineConfig({
  lang: 'zh-CN',
  title: '产研知识库',
  description: '面向产品、研发与测试的通识学习、工程实践和协作指南',
  base: process.env.DOCS_BASE || '/engineering-handbook/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    siteTitle: '产研知识库',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路径', link: '/learning/' },
      { text: '通识基础', link: '/start/' },
      { text: 'AI 素养', link: '/ai/' },
      { text: '产品与体验', link: '/product/' },
      { text: '研发规范', link: '/standards/' },
      { text: '团队协作', link: '/team/' }
    ],
    sidebar: {
      '/learning/': [{
        text: '按角色学习',
        items: [
          { text: '学习路径总览', link: '/learning/' },
          { text: '产品经理', link: '/learning/product' },
          { text: '研发工程师', link: '/learning/development' },
          { text: '测试与质量', link: '/learning/quality' },
          { text: 'AI 实践', link: '/learning/ai' }
        ]
      }],
      '/start/': [{
        text: '通识与新人入门',
        items: [
          { text: '起步路线', link: '/start/' },
          { text: 'API 是什么', link: '/start/api' },
          { text: '第一次调用 API', link: '/start/first-api-call' },
          { text: 'HTTP 请求与响应', link: '/start/http' },
          { text: '如何排查 API 错误', link: '/start/troubleshoot-api' },
          { text: '开发工具与排错', link: '/start/terminal' }
        ]
      }],
      '/ai/': [{
        text: 'AI 素养与实践',
        items: [
          { text: 'AI 基础概念', link: '/ai/' },
          { text: '提示词怎么写', link: '/ai/prompt' },
          { text: 'AI 编程工作流', link: '/ai/coding' },
          { text: 'AI 安全与边界', link: '/ai/security' }
        ]
      }],
      '/product/': [{
        text: '产品与体验',
        items: [
          { text: '专题总览', link: '/product/' },
          { text: '产品经理学习路径', link: '/learning/product' }
        ]
      }],
      '/standards/': [{
        text: '研发规范（建议稿）',
        items: [
          { text: '规范总览', link: '/standards/' },
          { text: 'Git 与 PR', link: '/standards/git' },
          { text: 'API 设计', link: '/standards/api-design' },
          { text: '测试与质量', link: '/standards/testing' },
          { text: '发布与回滚', link: '/standards/release' }
        ]
      }],
      '/team/': [{
        text: '团队协作与知识共建',
        items: [
          { text: '总览', link: '/team/' },
          { text: '四周培训计划', link: '/team/training' },
          { text: '内容建设路线图', link: '/team/roadmap' },
          { text: '写作规范与文章类型', link: '/team/writing-guide' },
          { text: '文档贡献指南', link: '/team/contributing' }
        ]
      }],
      '/reference/': [{
        text: '参考资料',
        items: [
          { text: '术语表', link: '/reference/glossary' },
          { text: 'HTTP 状态码速查', link: '/reference/http-status' },
          { text: '文档模板说明', link: '/reference/templates' }
        ]
      }]
    },
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最近更新' },
    socialLinks: [{ icon: 'github', link: `https://github.com/${repo}` }],
    editLink: {
      pattern: `https://github.com/${repo}/edit/main/docs/:path`,
      text: '编辑此页'
    },
    footer: {
      message: '先理解，再实践；先验证，再交付。',
      copyright: '公开知识分享 · 请勿提交敏感资料'
    }
  }
})

