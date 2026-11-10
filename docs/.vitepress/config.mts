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
      '/ai/': [
        {
          text: '课程总览',
          items: [{ text: '学习目标与路线', link: '/ai/' }]
        },
        {
          text: '第一阶段：建立认知',
          items: [
            { text: 'AI、机器学习与生成式 AI', link: '/ai/what-is-ai' },
            { text: '大语言模型如何工作', link: '/ai/llm' },
            { text: 'Token 与上下文窗口', link: '/ai/tokens-context' },
            { text: '能力、幻觉与局限', link: '/ai/limits' }
          ]
        },
        {
          text: '第二阶段：会用 AI',
          items: [
            { text: '提示词怎么写', link: '/ai/prompt' },
            { text: '提示词改写练习', link: '/ai/prompt-workshop' },
            { text: '结构化输出与 JSON', link: '/ai/structured-output' }
          ]
        },
        {
          text: '第三阶段：理解 AI 系统',
          items: [
            { text: '模型 API 与应用架构', link: '/ai/model-api' },
            { text: 'RAG：外部资料检索', link: '/ai/rag' },
            { text: 'Tool Calling', link: '/ai/tool-calling' },
            { text: 'Workflow 与 Agent', link: '/ai/agent' },
            { text: 'MCP：工具连接协议', link: '/ai/mcp' },
            { text: 'Skills：复用任务方法', link: '/ai/skills' }
          ]
        },
        {
          text: '第四阶段：可靠交付',
          items: [
            { text: '产品人员如何使用 AI', link: '/ai/product-practice' },
            { text: 'AI 辅助编程工作流', link: '/ai/coding' },
            { text: 'AI 输出如何评估', link: '/ai/evaluation' },
            { text: 'AI 数据安全与边界', link: '/ai/security' },
            { text: '综合实践与验收', link: '/ai/capstone' }
          ]
        }
      ],
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
