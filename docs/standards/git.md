# Git 与 Pull Request

**目标：** 每次变更可追溯、可复现、可评审。

建议使用 `main`、`feat/<topic>`、`fix/<topic>`、`docs/<topic>` 等分支名。

## 操作练习

```bash
git switch -c docs/first-api-guide
git add docs/start/api.md
git commit -m "docs: explain API basics"
git push -u origin docs/first-api-guide
```

然后通过代码平台提交 Pull Request（GitLab 中称 Merge Request）。

## PR 包含

- 为什么修改？
- 影响哪些文件和行为？
- 用什么命令验证？
- 有什么兼容性、权限和上线风险？

作者先审查自己的代码差异。关键逻辑至少由一名其他工程师评审。
