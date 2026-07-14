# Public Acceptance Record: v0.1.1 Baseline

- 验收日期：2026-07-11
- 环境：macOS、Cocos Creator 3.8.8、Node.js 22.22.0
- 本地最终验收基线SHA-256：`58c0564bd84d35200b768c23e47d0cf09d182842b92361d02b6c1d5f4b304399`

## 结论

该基线通过macOS与Creator 3.8.8核心工作流验收。此记录**不宣称**该本地ZIP与Cocos Store当前下载包逐字节一致；只有在实际商店上传包哈希得到确认后，后续版本才会使用标准正式版本标签。

## 已通过

- 正常多行CommonJS输出，`methods.openPanel`可加载。
- 运行依赖`ws`随包分发，不引用私有workspace包。
- 干净ZIP安装后扩展、面板、本机WebSocket服务正常启动。
- MCP初始化、工具目录、ping、工程信息、层级、inspect与diagnose。
- 无效NID拒绝、运行态重命名回读、transform写入与精确撤销。
- 组件添加、标量属性写入、类型护栏删除及对应撤销。
- 节点复制、层级顺序、确认删除、场景保存和撤销清理。
- 非法握手令牌和不支持协议版本被拒绝。

最终干净安装运行态验收共30项检查通过。

## 尚未覆盖

- Windows完整干净安装与写入验收。
- 至少一个额外Creator 3.8.x补丁版本的同等级回归。
- SpriteFrame与Font正向资源赋值夹具。
- 隔离用户目录下的一键客户端配置测试。
