# design-beauty

Project-level architecture model for [BeautyCustomerService](https://github.com/aces-org-zhuang/BeautyCustomerService), written as code with [LikeC4](https://likec4.dev).

This repo is the **project layer** of the ACES design-repo split. It is referenced by its own project repo as a submodule at `vendor/design/aces-design`, and it is aggregated by [`aces-architecture`](https://github.com/aces-org-zhuang/aces-architecture) for cross-project views.

## Scope

| Content | Location |
| --- | --- |
| This project's components, integrations, deployment | **Here** |
| Cross-project service map and dependency matrix | `aces-architecture` |
| Anything that must land in the same PR as code | Project repo `docs/` |

If a design decision changes together with code, it belongs in the project repo's `docs/`. Putting it here would let architecture lag behind code.

## Model contents

31 elements, 14 views, derived from the actual source layout — every element maps to a real path under `src/`.

### Element views

| View | Shows |
| --- | --- |
| `index` | Top-level systems, actors, external platforms |
| `context` | System context: customers, operators, WeChat Work, RAGFlow, LLM Wiki |
| `container` | HTTP ingress, orchestration, knowledge lifecycle, external adapters |
| `answerPath` | Message ingress through retrieval and policy to reply or handoff |
| `knowledgeLifecycle` | Scan, governance, sync, promotion, freshness alerting |
| `operatorSurface` | What the operator console depends on |

### Sequence and scenario views

| View | Shows |
| --- | --- |
| `chatToAnswer` | Full message-to-answer chain (diagram variant) |
| `retrievalSequence` | Customer question through retrieval (sequence variant) |
| `evaluationSequence` | Concurrent policy reads using `parallel` |
| `handoffSequence` | Escalation to a human operator |
| `knowledgeSyncSequence` | Knowledge promotion and sync into RAGFlow |
| `configGatedFlow` | Configuration gating that prevents fabricated results |

### Deployment views

| View | Shows |
| --- | --- |
| `localDeployment` | Single Node process, local JSON store, local RAGFlow and LLM Wiki |
| `wechatDeployment` | WeChat Work cloud boundary for callbacks and outbound messages |

## Usage

```bash
npm install
npm run dev          # likec4 serve — hot reload at http://localhost:5173
npm run validate     # likec4 validate
npm run build        # likec4 build -o ./dist
npm run format       # likec4 format
```

Requires Node satisfying the `engines` field in `package.json`. LikeC4 is pinned to an exact version on purpose: its DSL behavior changes across releases, and a floating range would make CI non-reproducible.

## Agent access

Point an MCP server at this repo so agents can query the model instead of reading `.c4` text:

```json
{
  "mcp": {
    "likec4": {
      "type": "local",
      "command": ["npx", "-y", "@likec4/mcp"],
      "enabled": true,
      "environment": { "LIKEC4_WORKSPACE": "." }
    }
  }
}
```

`@likec4/mcp` bundles its own LikeC4 kernel, so no local install is needed. It watches for file changes, so model edits are picked up without a restart.

## Version constraints

Model syntax is verified against the pinned LikeC4 version, not the latest published docs. In this version `variant sequence` and `parallel` are available, while `opt`, `loop`, `break`, `alt`, and `try` are **not**. Branching and error-handling diagrams therefore belong to Mermaid, not to this model.

Re-run `npm run validate` after upgrading LikeC4 before trusting any example in this repo.

## Update policy

Dependency, integration, or deployment changes must update this model **in the same PR** as the code change. The project repo pins this repo via submodule; after merging here, open a PR in the project repo to move the pointer.

CI does not build this model from the project repo, and this repo does not build the project. Each side builds independently.
