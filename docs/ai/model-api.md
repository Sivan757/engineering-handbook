---
title: 模型 API 与应用架构
description: 理解应用调用大模型的边界、消息流以及成本和失败处理。
docType: explanation
level: L2
status: published
---

# 模型 API 与应用架构

**一句话：** 模型 API 是应用调用模型能力的接口。应用负责输入组织、权限、错误处理和结果验证。

阅读前：理解 [API](/start/api) 和 [HTTP](/start/http)。

## 最小架构

~~~text
用户
 ↓
产品页面 / 开发工具
 ↓
业务后端（认证、限流、脱敏、记录调用）
 ↓
模型服务 API
 ↓
模型输出
 ↓
业务校验 / 人工审阅
 ↓
展示结果或执行后续业务逻辑
~~~

模型通常不会自动知道你系统中的实时用户状态。业务后端需要明确提供获准使用的上下文。

## 典型调用包含什么？

| 元素 | 用途 |
| --- | --- |
| 模型 | 选择服务端支持的模型标识 |
| 消息或输入 | 任务、上下文及输入数据 |
| 生成设置 | 控制输出量等行为，具体参数因服务而异 |
| 工具定义（可选） | 声明模型可请求的外部能力 |
| 鉴权 | 服务端安全地管理 API Key |
| 响应 | 文本、结构化内容、工具请求或错误 |

不同供应商的 API 请求格式不同。不要将这里的说明当成某个供应商的完整请求契约。

## 一个不依赖供应商的伪代码

~~~text
input = sanitize(userInput)
response = modelApi.generate({
  task: "将公开的虚构反馈分类",
  context: input,
  outputContract: feedbackSchema
})
validated = validate(response, feedbackSchema)
if validationFails(validated):
    return reviewRequired
return validated
~~~

这段是**架构伪代码**，不是可以直接执行的 SDK 示例。

## 四类工程风险

1. **可靠性：** 超时、重试、限流、模型不可用。
2. **安全性：** 凭据泄露、越权访问、敏感数据外发。
3. **可维护性：** 模型和提示词更新影响输出。
4. **成本：** 输入量、输出量、重复调用和工具执行。

## 练习

画一个“用户提交反馈，模型自动分类”的系统数据流。

**完成标准：** 在图中标出鉴权、脱敏、模型调用、JSON 校验和人工复核的位置。

下一篇：[RAG：让回答使用外部资料](/ai/rag)。

参考：[OpenAI API](https://developers.openai.com/api/docs/) · [Anthropic API](https://platform.claude.com/docs/en/api/overview)。
