---
title: 第一次调用 API
description: 使用 curl 调用公开 API，并识别请求与响应中的关键字段。
docType: tutorial
level: L1
status: published
---

# 第一次调用 API

**完成后你可以：** 使用终端发送 HTTP 请求，找到响应状态码、请求参数和 JSON 数据。

## 准备条件

- 一台可以访问互联网的电脑。
- 终端和 `curl`。macOS、较新 Windows 与多数 Linux 环境都可使用。
- 基础概念：[API 是什么](/start/api)。

本教程使用公开演示服务 `httpbin.org`，不要发送账号、密钥或真实业务信息。

## 第一步：发送 GET 请求

打开终端执行：

~~~bash
curl -i 'https://httpbin.org/get?topic=api'
~~~

`-i` 会同时显示响应头和响应体。

**预期结果：** 如果网络和演示服务正常，响应状态为 `200`，JSON 里 `args.topic` 的值为 `api`。服务可能调整响应头和输出字段，不需要与示例逐字相同。

## 第二步：理解输出

~~~json
{
  "args": {
    "topic": "api"
  },
  "url": "https://httpbin.org/get?topic=api"
}
~~~

这是示意片段，不是完整响应。

- `GET`：读取资源的 HTTP 方法。
- `/get`：请求路径。
- `topic=api`：URL 查询参数。
- `200`：表示请求成功的 HTTP 状态码。
- `args`：演示服务返回的参数集合。

## 第三步：观察失败

~~~bash
curl -i 'https://httpbin.org/status/404'
~~~

**预期结果：** HTTP 状态码为 `404`。这只演示状态码，不代表你访问了不存在的真实业务数据。

## 练习与验收

1. 将 `topic` 改成 `product`，找出对应 JSON 字段。
2. 去掉 `-i`，观察输出有什么不同。
3. 用一句话解释“请求”“响应”和“状态码”。

**完成标准：** 能独立说出请求方法、URL、查询参数、状态码及响应体的用途。

## 遇到错误时

DNS、代理或公开演示服务故障均会导致失败。这不一定是命令写错。请继续阅读 [如何排查 API 错误](/start/troubleshoot-api)。

参考：[curl 文档](https://curl.se/docs/) · [httpbin](https://httpbin.org/)。
