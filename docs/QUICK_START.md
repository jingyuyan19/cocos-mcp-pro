# Quick Start

## v0.2.0 接入更新（2026-09-06）

这份说明面向从Cocos Store购买并下载v0.2.0 ZIP的用户。下面步骤覆盖旧版“解压后导入”和临时启动器配置说明；仓库中的旧版本验收记录仍只代表各自的历史范围。商店包已包含`dist`和运行依赖，**不需要运行`npm install`**，但本机仍需可用的Node.js。

[观看v0.2.0中文教程：安装、连接Trae、创建UI与整体撤销](https://www.bilibili.com/video/BV1MFb46FEso/)。教程用真实截图与工具回执讲解，不是连续桌面实录；本次UI任务设置`save=false`，保存流程不在本次演示范围。

## 环境

- 当前v0.2.0最终RC7验收范围为macOS与Cocos Creator 3.8.8，不据此外推为所有3.8.x补丁版本均已通过。
- 本次RC7发布矩阵已验证Node 18.20.8、20.19.5、22.22.0和24.14.0；这不是对任意Node版本的兼容承诺。
- 教程使用Trae国际版。只配置实际使用的客户端，以面板可选项为准；提供一键配置不代表所有客户端版本和使用场景均已验收。
- Windows RC7最终验收尚未完成，不是产品已被证实失败；[兼容矩阵](./COMPATIBILITY.md)和旧验收记录中的历史结果不能替代当前包的最终验收。

## 安装与连接

1. 保留从Cocos Store下载的原始ZIP，不先解压、不重新压缩，也不增加外层目录。
2. 在Creator打开“扩展 → 扩展管理器”，切到项目或全局扩展页，点击“导入”，直接选择原始ZIP，不选择解压后的目录。
3. 确认`cocos-mcp`版本为`0.2.0`且已启用，等待Creator完成首次资源处理。
4. 保持Creator和当前工程打开，从`Extension -> Cocos MCP -> Open MCP Panel`打开面板，确认服务运行中。
5. 运行“一键检测”。先处理Node、Bridge、WebSocket、Creator Scene中的第一个失败项，四层通过后再继续；此时客户端尚未配置不等于核心连接链路故障。
6. 对实际使用的客户端执行“一键配置”；本教程选择Trae国际版。让面板生成本机配置，不照抄视频端口或他人的路径。
7. 完全退出并重新打开客户端，使新配置生效；Trae只关闭窗口不等于完全重启。
8. 调用`cocos_ping`和`cocos_get_capabilities`，取得真实回执并确认插件版本为`0.2.0`，再调用`cocos_get_hierarchy`进行第一次只读场景验证。

v0.2.0配置直接记录Node和`bridge-cli.js`的绝对路径，并通过`--project`指定当前工程；不再让客户端执行临时`.sh`或`.cmd`启动器。写配置前会备份已有文件并校验，重新执行“一键配置”也会迁移旧版启动器条目。

仍连不上时，先修“一键检测”的第一个失败项，再重新配置、完全重启客户端并重新调用`cocos_ping`与`cocos_get_capabilities`。仍失败时运行`cocos_diagnose`并按`hints`处理；不要连续盲重试写操作。反馈时提供系统、Creator / 插件 / 客户端版本和第一个脱敏报错，不要贴API Key或完整配置文件。

[旧版安装教程（历史参考）](https://www.bilibili.com/video/BV17GNQ69EJP/)保留原链接；v0.2.0请优先按本页步骤和上方新教程操作。

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
