# Compatibility Matrix

## 当前商店版本：v0.2.0（RC7）

| 项目 | 当前已核实范围 |
| --- | --- |
| Creator / 系统 | macOS、Creator 3.8.8；不外推为其他3.8.x补丁版本或Windows已验收 |
| Node.js | RC7发布矩阵验证过18.20.8、20.19.5、22.22.0、24.14.0 |
| AI客户端 | 面板配置入口不等于各客户端全部版本及任务已验收；按[Quick Start](./QUICK_START.md)确认实际连接和版本回执 |
| 已知限制 | [UI创建超时后的结果核对](./FAQ.md#rc7-timeout)；v0.3.0候选的修复及新增能力尚未发布 |

## 历史基线：v0.1.1

下表只记录旧版本验收，不代替当前RC7的验证范围。

| 项目 | 状态 | 说明 |
| --- | --- | --- |
| Cocos Creator 3.8.8 | 完整验收 | macOS下完成干净安装与30项运行态检查 |
| Cocos Creator其他3.8.x | 预期兼容 | 小版本IPC可能存在差异，尚未逐个完成同等级验收 |
| macOS | 已验证 | v0.1.1完整验收环境 |
| Windows | 待完整验收 | 不应把macOS结果外推为Windows已验证 |
| Cursor / Windsurf | 支持 | 面板提供配置入口，仍需重启客户端 |
| Claude Code / Codex | 支持 | 使用面板生成的启动方式或对应MCP配置 |
| 图片与字体资源写入 | 有条件支持 | 资源需在Creator运行态可见或已加载 |

问题报告请同时提供Creator的完整版本号，不要只写“3.8”。
