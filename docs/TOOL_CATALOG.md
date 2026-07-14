# Tool Catalog

当前公开目录按工作流分组。准确参数以已安装版本向MCP客户端暴露的schema为准。

## 读取与定位

- `cocos_ping`
- `cocos_get_project_info`
- `cocos_get_current_scene_meta`
- `cocos_get_hierarchy`
- `cocos_search_nodes`
- `cocos_inspect_node`
- `cocos_list_assets`
- `cocos_get_prefab_info`
- `cocos_get_log_tail`
- `cocos_diagnose`

## 节点与层级写入

- `cocos_set_node_active`
- `cocos_set_node_name`
- `cocos_set_node_transform`
- `cocos_create_node`
- `cocos_delete_node`
- `cocos_reparent_node`
- `cocos_duplicate_node`
- `cocos_set_node_sibling_index`
- `cocos_instantiate_prefab`

## 组件与属性

- `cocos_add_component`
- `cocos_remove_component`
- `cocos_set_component_property`

## 保存与恢复

- `cocos_save_scene`
- `cocos_mcp_undo_last`
- `cocos_editor_undo`

推荐顺序始终是：读取层级、检视目标、小步写入、读取验证、必要时撤销。NID只在当前会话有效。
