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
|   |   |-- components/ # Reusable UI components
|   |   |-- data.ts # Page data
|   |   `-- utils.ts  # Utility functions
|   `-- routes/
|       |-- [...404]/ # Custom 404 page
|       `-- layout.css  # Global CSS styles
|-- static/           # Static assets
`-- svelte.config.js  # Svelte and SvelteKit configuration
```

## Action Rules

- **Documentation Updates:** Modify README.md immediately when altering setup instructions, dependencies, or core features.
- **Git Commits:** Commit after every discrete unit of work. Never batch unrelated changes. Use `git-commit` skill for format and examples.

---

# lean-ctx — Context Engineering Layer

PREFER lean-ctx MCP tools over native equivalents for token savings:

| PREFER                                   | OVER                         | Why                                              |
| ---------------------------------------- | ---------------------------- | ------------------------------------------------ |
| `ctx_read(path)`                         | Read / cat / head / tail     | Cached, 8 compression modes, re-reads ~13 tokens |
| `ctx_shell(command)`                     | Shell / bash / terminal      | Pattern compression for git/npm/cargo output     |
| `ctx_search(pattern, path)`              | Grep / rg / search           | Compact, token-efficient results                 |
| `ctx_tree(path, depth)`                  | ls / find / tree             | Compact directory maps                           |
| `ctx_edit(path, old_string, new_string)` | Edit (when Read unavailable) | Search-and-replace without native Read           |

Edit files: use native Edit/StrReplace if available. If Edit requires Read and Read is unavailable, use ctx_edit.
Write, Delete, Glob — use normally. NEVER loop on Edit failures — switch to ctx_edit immediately.
