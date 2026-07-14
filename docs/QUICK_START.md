# Quick Start

这份说明面向从Cocos Store购买并下载ZIP的用户。商店包已包含运行依赖，**不需要运行`npm install`**。

## 环境

- Cocos Creator 3.8.x；当前完整验收版本为3.8.8。
- Cursor、Windsurf、Cline、Claude Code、Codex等支持MCP的客户端之一。
- macOS已完成完整验收；Windows验证状态见[兼容矩阵](./COMPATIBILITY.md)。

## 安装与连接

1. 从Cocos Store下载插件ZIP并解压。
2. 在Creator的扩展管理器中选择“导入扩展”，导入解压后的插件目录。
3. 启用`cocos-mcp`扩展，必要时重启Creator。
4. 打开`Extension -> Cocos MCP -> Open MCP Panel`。
5. 确认面板显示服务运行中，再点击目标客户端的“一键配置”。
6. 完全重启MCP客户端，使新配置生效。
7. 先调用`cocos_ping`，再调用`cocos_get_hierarchy`进行第一次只读验证。

[观看完整安装教程](https://www.bilibili.com/video/BV17GNQ69EJP/)

## 第一次安全写入

不要猜节点ID。先读取层级，拿到目标节点当前会话的NID，再做一个小改动：

1. `cocos_get_hierarchy`
2. `cocos_inspect_node`
3. 选择一个低风险写操作，例如重命名或单个标量属性。
4. 再次读取节点，确认运行态结果。
5. 如需恢复，调用`cocos_mcp_undo_last`并再次读取验证。

可把[规则模板](../examples/cursorrules.example.md)加入客户端规则，固定“先读、再改、再验证”的节奏。

## 购买入口

[前往Cocos Store](https://go.jimmyjing.dev/cocos/github/quickstart)
