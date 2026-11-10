---
title: Skills：复用任务方法
description: 说明 Agent Skills 的目录规范、渐进加载机制与适用场景。
docType: explanation
level: L2
status: published
---

# Skills：复用任务方法

**一句话：** Agent Skill 将一个任务的步骤、约束和可选资源组织在一起，让兼容的 AI 工具在需要时复用这套做法。

这里介绍的是采用 `SKILL.md` 约定的 **Agent Skills**。不同产品也可能把其他功能叫作“Skill”，不能认为它们完全通用。

## 为什么需要 Skill？

例如团队反复写技术文档，每次都要重复说明：

- 写作对象是新人还是高级工程师。
- 文章属于教程、指南、参考还是原理。
- 必须提供示例、练习和来源。
- 不能公开敏感信息。

把这些规则写成 Skill，可以降低重复沟通成本。

## 一个目录示例

~~~text
engineering-doc-writer/
├── SKILL.md
├── references/
│   └── style-guide.md
└── assets/
    └── tutorial-template.md
~~~

`SKILL.md` 的 Frontmatter 通常包含 `name`、`description`，正文写使用方法和约束。其他资源按需加载。

## Skill 与相似概念

| 概念 | 主要作用 |
| --- | --- |
| Prompt | 某一次请求的任务说明 |
| Skill | 可复用的任务做法、说明和资源 |
| Tool | 实际可调用的外部操作 |
| MCP | AI 应用连接工具与资源的协议 |
| Agent | 根据目标动态推进任务的执行系统 |

Skill 可以指导 Agent 调用 Tool，但 Skill 本身不是获得外部权限的凭据。

## 一个简化 SKILL.md

~~~md
---
name: support-ticket-writer
description: 将脱敏反馈整理为结构化工单。
---

# 工单写作流程

1. 识别用户现象和预期结果。
2. 区分事实、推测和待确认事项。
3. 输出摘要、复现步骤及验收条件。
4. 不杜撰日志或未提供的业务背景。
~~~

## 设计时注意

- 每个 Skill 只解决一类明确任务。
- 描述触发条件，避免多个 Skill 难以区分。
- 让需要的参考资料按需加载，避免把所有内容堆进一个文件。
- 引入第三方 Skill 前审查其脚本、权限和依赖。
- Skill 的结果仍需测试或人工核对。

## 练习

将“把用户反馈变成工单”的过程写成一个 10 行左右的 Skill 草案。

**完成标准：** 其他读者能判断什么时候使用、如何执行、什么结果算完成。

下一篇：[产品人员如何使用 AI](/ai/product-practice)。

参考：[Agent Skills 规范](https://agentskills.io/specification) · [Agent Skills GitHub](https://github.com/agentskills/agentskills)。
