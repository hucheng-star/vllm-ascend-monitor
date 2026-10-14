# vLLM-Ascend 社区监控

本地监控 [vllm-project/vllm-ascend](https://github.com/vllm-project/vllm-ascend) 的版本说明和社区进展。

- 按模型做成树：每个模型下面，版本从近到远，再展开亮点、功能、性能、修复和已知问题。中文文档页有对应版本时用中文，否则用仓库 `release_notes.md` 原文。
- 每个上海自然日汇总 PR 和 Issue，并保留近 30 天起积累的历史进展，归到对应模型。每条 PR 带中文翻译。写入 `data/daily/` 和 `data/progress-history.md`。
- 桌面快捷方式会打开一个实时窗口。窗口开着时，后台每 10 分钟同步一次。

## 打开

双击桌面上的「vLLM-Ascend 社区监控」。登录 Windows 后也会自动打开。

每天 08:30 会再同步一次；监控窗口已开着时，这一次会走正在运行的服务。

## 数据位置

- `data/model-tree.md`：模型版本树全文
- `data/progress-history.md`：各模型历史进展，含 PR 中文翻译
- `data/state.json`：窗口使用的快照
- `data/release_notes.md`：最近一次拉到的英文版本说明原文

## 命令

```powershell
npm start
npm run refresh
powershell -File .\scripts\open-dashboard.ps1
powershell -File .\scripts\stop.ps1
```

页面地址是 http://127.0.0.1:8765/ 。如果设置了环境变量 `GITHUB_TOKEN`，同步会使用它，避免匿名接口的频率限制。
