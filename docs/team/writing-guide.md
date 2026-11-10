---
title: 写作规范与文章类型
description: 产研知识库的编辑原则、分类方法与发布标准。
docType: reference
level: L1
status: published
---

# 写作规范与文章类型

**写作目标：** 读者能理解一个问题、完成一项任务，或快速查询可信资料。

## 四种文章类型

使用 [Diátaxis](https://diataxis.fr/) 框架区分四种读者需求：

| 类型 | 读者问题 | 写作重点 | 示例 |
| --- | --- | --- | --- |
| Tutorial 教程 | 我刚接触，怎样学会？ | 前置条件、步骤、预期结果、练习 | [第一次调用 API](/start/first-api-call) |
| How-to 操作指南 | 我现在怎样解决问题？ | 适用条件、步骤、故障处理 | [排查 API 错误](/start/troubleshoot-api) |
| Reference 参考 | 我需要准确查到什么？ | 结构化信息、字段、表格、适用范围 | [HTTP 状态码速查](/reference/http-status) |
| Explanation 原理 | 它为什么这样工作？ | 因果关系、工作机制、取舍与限制 | [API 是什么](/start/api) |

同一个主题允许存在多种类型的文章，但不允许直接复制粘贴同一段内容。

## 难度等级

- **L1 入门：** 理解核心概念，跟随示例完成任务。
- **L2 实践：** 能独立应用、调试和排错。
- **L3 深入：** 能解释原理、限制和技术取舍。

等级是本项目的编辑约定，不是认证标准。

## 默认风格

- 中文优先，保留必要的英文技术原名。
- 标题明确说明问题，不使用“全面解析”“终极指南”等空泛表达。
- 开头先给出答案、结果或完成目标。
- 先定义陌生术语，再给出实例。
- 一个段落只讨论一个重点，适量使用表格和图示。
- 代码示例尽量最小、可执行，标明语言、依赖与版本。
- 实际测试结果和预期输出必须明确区分。
- 尽量引用官方文档、标准和原始资料，标明适用版本。
- 公开文档只使用脱敏示例，不公开组织内部信息。

## 新文章的 Frontmatter

~~~yaml
---
title: HTTP 状态码速查
description: 常见 HTTP 状态码与定位建议。
docType: reference
level: L1
status: published
---
~~~

`docType` 使用 `tutorial`、`how-to`、`reference`、`explanation`。 `status` 使用 `draft`、`proposed`、`published`、`deprecated`。

**发布状态与制度效力不同。** `published` 仅表示文章可以阅读；团队规范必须另行标明“建议稿”或“已采纳”。

旧文章不要求一次性补全元数据。修改时逐步迁移即可。

## 发布前验收

1. 读者、任务和文档类型明确。
2. 事实、示例、命令和版本准确。
3. 重要结论有可核对的参考来源。
4. 文章与相关知识点相互链接。
5. 不含密钥、客户数据或内部系统信息。
6. 构建通过，或明确记录未验证原因。

## 写作模板与自动化

仓库根目录 `templates/` 提供四类模板。`.agents/skills/` 提供文章生成与审核 Skills。

参考：[Google 技术文档风格指南](https://developers.google.com/style) · [Diátaxis](https://diataxis.fr/)。
