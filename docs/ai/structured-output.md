---
title: 结构化输出与 JSON
description: 让 AI 结果符合字段约定，区分提示词格式要求和程序校验。
docType: explanation
level: L1
status: published
---

# 结构化输出与 JSON

**一句话：** 自然语言适合阅读，结构化输出适合程序处理；让模型“按 JSON 输出”并不自动保证输出合法或业务正确。

## 为什么需要结构化结果？

例如产品人员希望将反馈分类后交给研发工具：

~~~json
{
  "category": "usability",
  "priority": "medium",
  "summary": "用户找不到创建任务入口",
  "requiresHumanReview": true
}
~~~

程序需要知道每个字段是什么类型，能接受哪些值。

## 三层校验

| 层级 | 要验证什么 | 反例 |
| --- | --- | --- |
| 语法 | 是合法 JSON 吗？ | 缺少逗号 |
| 结构 | 字段、类型和枚举对吗？ | priority 为未知值 |
| 业务 | 结果符合事实和业务规则吗？ | 将无关反馈标为高优先级 |

三层缺一不可。即使提供 JSON Schema，也不能替代业务核验。

## 如何提出要求？

~~~text
把以下虚构用户反馈分类。
仅返回一个 JSON 对象：
{
  "category": "performance | usability | data",
  "summary": "字符串，最多 80 字",
  "needsReview": true
}
无证据时不要编造根因。
输入：“创建任务按钮很难找到。”
~~~

**预期：** 模型给出一个符合结构的候选结果，但不能保证稳定满足所有规则。

## 实际系统的建议

- 可用时采用模型服务支持的结构化输出机制（如 Schema 约束）。
- 服务端仍需执行 JSON 解析、字段类型、枚举与业务校验。
- 校验失败时返回可处理的错误，而不是直接写入数据库。
- 记录模型版本、输入版本与校验失败原因。

## 练习

设计一个反馈分类 JSON，包含 `id`、`category`、`summary` 和 `needsReview`。写出至少三条错误输入，并说明每条由哪个校验层拦截。

**完成标准：** 能区分“合法 JSON”与“可信业务数据”。

下一篇：[模型 API 与应用架构](/ai/model-api)。

参考：[OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)。
