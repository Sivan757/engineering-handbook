# API 是什么？

**一句话：** API（应用程序编程接口）是一个软件向另一个软件提供的调用方式和约定。

## 用外卖 App 理解

```text
用户打开“我的订单”
  ↓
App 发送 GET /api/orders
  ↓
服务器验证身份、查询数据库
  ↓
返回 JSON
  ↓
App 展示订单列表
```

页面不是 API。前后端约定的调用入口才是 API。

## API 的基本要素

- **URL**：请求到哪里。
- **Method**：读取、创建、修改或删除。
- **Parameters**：查询哪个资源。
- **Authorization**：调用方是否有权限。
- **Response**：返回数据和错误信息。

```http
GET /api/users/42 HTTP/1.1
Host: example.test
Authorization: Bearer <access-token>
```

```json
{"id":42,"name":"Example User"}
```

## API、文档与 SDK

| 名称 | 作用 |
| --- | --- |
| API | 软件之间的调用约定 |
| 接口文档 | 说明 API 如何调用 |
| SDK | 封装调用操作的工具包 |

## 练习

访问 `https://httpbin.org/get`，指出 URL、Headers 和返回内容。示例地址与 token 都不是公司真实凭据。

下一篇：[HTTP 请求与响应](/start/http)
