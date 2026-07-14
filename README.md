[English](./README.en.md)

# Cocos MCP Pro

让AI更安全地操作Cocos Creator场景：**先读真实层级，再做受控写入；结果可验证，改动可撤销，危险操作有护栏。**

[购买Cocos MCP Pro](https://go.jimmyjing.dev/cocos/github/readme) · [观看核心演示](https://www.bilibili.com/video/BV1MHMa6oEjW/) · [观看安装教程](https://www.bilibili.com/video/BV17GNQ69EJP/)

**兼容范围：**面向Cocos Creator 3.8.x，当前高强度运行验收环境为3.8.8；公开版本记录为v0.1.1。

![Cocos MCP Pro安装与真实Creator界面](./assets/install-tutorial-cover.png)

> 这是Cocos MCP Pro的官方文档、配置示例与公开验收记录仓库。本仓库不包含商业产品核心源码或二进制；开源许可仅适用于明确标注的公开材料。

## 它解决什么

很多Cocos自动化问题并不是“代码写不出来”，而是AI拿错节点、写完没有真正生效、组件下标漂移后误删，或者改坏后很难恢复。

Cocos MCP Pro把工作流收紧为：

1. 读取Creator运行态层级，使用会话短ID（NID）定位目标。
2. 对高频操作执行小步写入，并读取运行态结果作为回执。
3. 删除组件前可用`expectedComponentType`校验类型。
4. 关键写入进入撤销链，可用`cocos_mcp_undo_last`恢复。
5. 失败时用`cocos_diagnose`返回可执行的排查提示。

## 从这里开始

- [Quick Start：从商店ZIP到第一次连接](./docs/QUICK_START.md)
- [故障排查](./docs/TROUBLESHOOTING.md)
- [安全模型](./docs/SECURITY_MODEL.md)
- [工具目录](./docs/TOOL_CATALOG.md)
- [兼容矩阵](./docs/COMPATIBILITY.md)
- [常见问题](./docs/FAQ.md)
- [公开验收记录](./docs/ACCEPTANCE.md)
- [Changelog](./CHANGELOG.md)

## 真实Creator界面

![Cocos Creator扩展管理器中的Cocos MCP Pro](./assets/creator-extension-manager.png)

## 公开边界

本仓库接受文档、翻译、脱敏示例和验收说明的PR。核心功能需求请提交Issue，由私有产品仓库排期；由于核心源码不在这里，不接受指向不存在源码的核心实现PR。

需要帮助时，请优先提交带环境信息的Issue。安全问题不要公开披露，请阅读[安全披露说明](./SECURITY.md)。

## 许可

配置模板和公开检查脚本采用MIT许可；文档和公开图片采用CC BY 4.0。`Cocos MCP Pro`名称、Logo与商业源码不在上述授权范围内，详见[商标说明](./TRADEMARKS.md)。
