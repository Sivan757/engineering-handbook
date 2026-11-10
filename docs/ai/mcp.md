---
title: MCP：连接模型应用与工具
description: 理解 MCP、Tool Calling、Server 和 Skills 各自的职责。
docType: explanation
level: L2
status: published
---

# MCP：连接模型应用与工具

**一句话：** MCP（Model Context Protocol，模型上下文协议）是一套开放接口规范，让 AI 应用以统一方式访问外部工具、资源和提示模板。

本篇以 **2026-07-28 MCP 规范** 为参考；不同客户端和服务端对该版本的支持情况可能不同。

## 为什么需要 MCP？

没有标准化连接方式时，每一种 AI 应用都要单独适配每种工具。

MCP 提供约定好的交互方式，减少重复对接成本，但仍然需要具体的服务端实现和权限管理。

## 核心角色

~~~text
用户
 ↓
AI 应用（Host）
 ├─ 模型
 └─ MCP Client
      ↓ 协议请求
    MCP Server
      ├─ Tools：可调用的操作
      ├─ Resources：可读取的资料
      └─ Prompts：可复用的提示模板
~~~

这张图只展示概念层，不表示所有产品都以完全相同的进程部署。

## MCP、Tool 与 API 的关系

- **API：** 软件功能的调用契约。
- **Tool Calling：** 模型决定请求调用哪项功能。
- **MCP：** AI 应用与外部能力交换工具、资源和提示信息的一种标准方式。
- **MCP Server：** 对外暴露工具或资料的服务。

MCP 不取代业务 API，也不负责替你的服务判断所有业务权限。

## 版本提醒

MCP 在 2026-07-28 版本中调整了协议交互和请求元数据，核心采用更偏无状态的设计。不要直接照搬旧教程中的初始化握手或会话处理代码。

**实施时：** 先确认客户端与 SDK 所支持的规范版本，再阅读对应版本的文档。

## 练习

假设要让 AI 查询公开演示的任务数据。画出“用户提问 → Host → MCP Client → MCP Server → 业务 API → 返回结果”的路径，并标出鉴权位置。

**完成标准：** 能说明 MCP Server 不等于大语言模型，Tool 也不等于 Skill。

下一篇：[Skills：复用任务方法](/ai/skills)。

参考：[MCP 2026-07-28 发布说明](https://blog.modelcontextprotocol.io/posts/2026-07-28/) · [MCP TypeScript SDK v2](https://ts.sdk.modelcontextprotocol.io/v2/)。
