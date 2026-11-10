# 开发工具与排错

## 常用工具

| 工具 | 用途 |
| --- | --- |
| 终端 | 执行命令、查看输出 |
| curl | 独立测试 HTTP |
| 浏览器 DevTools → Network | 观察网络请求 |
| IDE | 编辑、运行、调试 |
| Git | 版本管理 |
| 日志与 Trace | 定位服务端处理过程 |

## 最小排查流程

1. 复现错误并记录预期结果。
2. 从 Network 中读取 URL、请求和响应。
3. 使用 curl 单独重放请求。
4. 根据请求 ID 查看服务端日志。
5. 记录根因、处理方法和验证结果。

```bash
curl -i https://httpbin.org/get
curl -s -o /dev/null -w '%{http_code}\n' https://httpbin.org/status/404
```

## 如何提问

不要只说“API 不行了”。写明目标、请求方法、实际状态码、预期状态码和已尝试的方法。

**注意：** 不分享生产密钥、完整鉴权头或敏感日志。
