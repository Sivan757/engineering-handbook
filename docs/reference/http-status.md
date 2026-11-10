---
title: HTTP 状态码速查
description: 常见 HTTP 状态码的含义与初步排查方向。
docType: reference
level: L1
status: published
---

# HTTP 状态码速查

**用途：** 排查 API 请求或设计接口时，快速定位状态码的常见含义。

| 状态码 | 含义 | 常见处理方向 |
| --- | --- | --- |
| 200 OK | 请求成功 | 核对业务数据 |
| 201 Created | 资源已创建 | 查返回资源或 Location |
| 204 No Content | 成功但无响应体 | 不要强行解析 JSON |
| 400 Bad Request | 请求语法或参数问题 | 核对格式和参数 |
| 401 Unauthorized | 未完成有效身份认证 | 检查认证信息 |
| 403 Forbidden | 已理解请求但拒绝执行 | 检查资源权限 |
| 404 Not Found | 目标资源不存在或不可见 | 检查 URL 和资源标识 |
| 409 Conflict | 请求与当前资源状态冲突 | 检查并发与版本 |
| 422 Unprocessable Content | 请求格式正确但无法处理内容 | 核对业务校验条件 |
| 429 Too Many Requests | 请求过于频繁 | 按限流策略重试 |
| 500 Internal Server Error | 服务内部发生意外错误 | 查询服务端日志 |
| 502 Bad Gateway | 网关收到无效上游响应 | 检查上游服务 |
| 503 Service Unavailable | 服务暂时不可用 | 检查服务状态或维护窗口 |
| 504 Gateway Timeout | 网关等待上游超时 | 检查耗时和超时设置 |

## 注意

- 4xx 通常表示客户端相关问题，5xx 通常表示服务端相关问题，但根因仍需结合上下文。
- `401` 不等于没有权限；`403` 更接近“身份已知但操作被拒绝”的常见场景。
- 具体服务可能还有自定义业务错误码，它们不等同于 HTTP 状态码。
- 部分系统出于安全原因用 `404` 隐藏资源存在性。

## 延伸阅读

[第一次调用 API](/start/first-api-call) · [API 错误排查](/start/troubleshoot-api)。

依据：[RFC 9110 HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)。
