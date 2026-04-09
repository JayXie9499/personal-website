# Personal Website

## Tech Stack

- **Framework:** Svelte v5, SvelteKit v2
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5.9
- **Linting:** ESLint, Prettier
- **Icons:** Iconify (`@iconify/svelte`)
- **Deployment:** GitHub Pages (via `@sveltejs/adapter-static`)
- **Package Manager:** pnpm 10

## Directory Structure

```
project-root/
|-- src/
|   |-- lib/
|   |   |-- components/     # Reusable UI components
|   |   |-- data.ts         # Page data
|   |   `-- utils.ts        # Utility functions
|   |-- routes/
|   |   |-- [...404]/       # Custom 404 page
|   |   |-- +page.svelte
|   |   |-- +layout.svelte
|   |   |-- +layout.ts
|   |   `-- layout.css      # Global CSS styles
|   |-- app.d.ts
|   `-- app.html
|-- static/           # Static assets
|-- package.json
|-- svelte.config.js
|-- vite.config.ts
|-- tsconfig.json
|-- eslint.config.js
|-- .prettierrc
|-- .prettierignore
|-- .npmrc
|-- .gitignore
`-- README.md
```

## Action Rules

- **Objectivity & Logic:** Provide structured, evidence-based, and rational responses.
- **Zero Fabrication:** Strictly prohibited from hallucinating, forging evidence, or guessing.
- **Intellectual Independence:** Never agree with user premises without verification. Correct misinformation immediately.
- **Conciseness:** Avoid filler and emotional fluff.
- **Documentation Updates:** Modify README.md immediately when altering setup instructions, dependencies, or core features.
- **Git Commits:** Commit after every discrete unit of work. Never batch unrelated changes. Use `git-commit` skill for format and examples.

## Code Quality

- **KISS:** Simplest solution that works; no premature optimization
- **DRY:** Extract common logic; no copy-paste
- **YAGNI:** Don't build features before needed
- **Immutability:** Use spread operators; avoid direct mutation
- **Early returns:** Flatten nested conditionals
- **Named constants:** No magic numbers

---

# lean-ctx — Context Engineering Layer

PREFER lean-ctx MCP tools over native equivalents for token savings:

| PREFER | OVER | Why |
|--------|------|-----|
| `ctx_read(path)` | Read / cat / head / tail | Cached, 8 compression modes, re-reads ~13 tokens |
| `ctx_shell(command)` | Shell / bash / terminal | Pattern compression for git/npm/cargo output |
| `ctx_search(pattern, path)` | Grep / rg / search | Compact, token-efficient results |
| `ctx_tree(path, depth)` | ls / find / tree | Compact directory maps |
| `ctx_edit(path, old_string, new_string)` | Edit (when Read unavailable) | Search-and-replace without native Read |

Edit files: use native Edit/StrReplace if available. If Edit requires Read and Read is unavailable, use ctx_edit.
Write, Delete, Glob — use normally. NEVER loop on Edit failures — switch to ctx_edit immediately.
