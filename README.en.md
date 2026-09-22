# Cocos MCP Pro

[中文说明](./README.md)

Make AI-driven Cocos Creator scene editing safer: **inspect real runtime state, apply guarded changes, verify the result, and keep a recovery path.**

[Buy Cocos MCP Pro](https://go.jimmyjing.dev/cocos/github/readme) · [Watch the feature overview](https://www.bilibili.com/video/BV1rVb46JEB8/) · [Watch the installation guide](https://www.bilibili.com/video/BV1MFb46FEso/)

**Current store release: v0.2.0 (RC7).** Current acceptance covers macOS and Cocos Creator 3.8.8. Windows and other Creator patch versions have not completed equivalent acceptance. The v0.3.0 candidate is not released.

**Known issue:** after an RC7 UI creation request times out, Creator may still complete it. A timeout receipt containing `changed:false` does not prove the scene is unchanged. Inspect the actual result before retrying or undoing; see the [timeout guidance (Chinese)](./docs/FAQ.md#rc7-timeout).

![Cocos MCP Pro installation in Cocos Creator](./assets/install-tutorial-cover.png)

> This is the official documentation, examples, and public acceptance-record repository. It does not include the commercial core source or product binary; open licenses apply only to the public materials explicitly identified here.

## Why It Exists

The risky part of editor automation is rarely generating code. It is selecting the wrong node, trusting a false success response, deleting the wrong component after index drift, or having no dependable recovery path.

Cocos MCP Pro uses a tighter workflow:

1. Read the live Creator hierarchy and target nodes through session-scoped NIDs.
2. Apply focused writes and verify observable runtime state.
3. Guard component removal with `expectedComponentType` when needed.
4. Use `cocos_mcp_undo_last` for supported operations after confirming their outcome and undo target. Reconcile unknown outcomes first.
5. Return actionable diagnostics through `cocos_diagnose`.

## Start Here

- [Quick Start](./docs/QUICK_START.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)
- [Security model](./docs/SECURITY_MODEL.md)
- [Tool catalog](./docs/TOOL_CATALOG.md)
- [Compatibility matrix](./docs/COMPATIBILITY.md)
- [FAQ](./docs/FAQ.md)
- [Public acceptance record](./docs/ACCEPTANCE.md)
- [Changelog](./CHANGELOG.md)

## Real Creator Interface

![Cocos MCP Pro in the Cocos Creator Extension Manager](./assets/creator-extension-manager.png)

Documentation, translations, redacted examples, and acceptance-evidence pull requests are welcome. Core feature requests should be filed as Issues for planning in the private product repository.

Templates and public validation scripts are MIT licensed. Documentation and public images are licensed under CC BY 4.0. The product name, logo, and commercial source are excluded; see [Trademarks](./TRADEMARKS.md).
