# Cocos MCP Pro Working Rules

- Start with `cocos_ping` and `cocos_get_hierarchy`.
- Use only NIDs returned in the current session. Never guess or retain a stale NID.
- Inspect the target node before a write.
- Prefer one focused mutation per step.
- Read the node again after a write and verify the observable runtime result.
- For component removal, provide `expectedComponentType` when the expected type is known.
- On failure, stop repeating writes and run `cocos_diagnose`.
- In Store v0.2.0 RC7, a UI creation request can finish inside Creator after a timeout or disconnect. A timeout/disconnect error reporting `changed:false` does not prove that nothing changed or that rollback completed.
- After an unknown outcome, do not retry the mutation, automatically save, or blindly undo. Keep the current project and scene; inspect Creator, use read-only `cocos_search_nodes` / `cocos_inspect_node`, and check logs to establish the actual result and completion state first.
- Once a write is confirmed successful and the intended recovery target is the latest MCP write, use `cocos_mcp_undo_last` if restoration is needed, then verify the restored state. Do not substitute global editor Undo for an unidentified MCP transaction.
- Structured unknown-outcome reporting is implemented in the unreleased v0.3.0 candidate, not Store RC7. Do not wait for an `outcome:"unknown"` field before applying the timeout/disconnect rule above.
- Never expose project assets, credentials, or local discovery-file contents in chat or logs.
