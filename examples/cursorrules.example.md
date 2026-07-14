# Cocos MCP Pro Working Rules

- Start with `cocos_ping` and `cocos_get_hierarchy`.
- Use only NIDs returned in the current session. Never guess or retain a stale NID.
- Inspect the target node before a write.
- Prefer one focused mutation per step.
- Read the node again after a write and verify the observable runtime result.
- For component removal, provide `expectedComponentType` when the expected type is known.
- On failure, stop repeating writes and run `cocos_diagnose`.
- Use `cocos_mcp_undo_last` to recover the latest MCP write, then verify the restored state.
- Never expose project assets, credentials, or local discovery-file contents in chat or logs.
