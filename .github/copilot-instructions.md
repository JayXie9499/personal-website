## Project Overview

- **Project Name:** personal-website
- **Objective:** Digital business card and simple resume.
- **Architecture:** Svelte static site.

---

## Technical Stack and Environment

- **Language:** TypeScript 5.9
- **Frameworks & Libraries:** Svelte v5, SvelteKit v2, Tailwind CSS v4
- **Environment:** GitHub Pages

---

## Directory Structure

```text
personal-website/
├── e2e/                  # Playwright test files
├── src/
│   ├── lib/
│   ├── routes/
│   │   ├── +page.svelte
│   │   ├── +layout.svelte
│   │   └── layout.css
│   ├── app.d.ts
│   └── app.html
├── static/
│   ├── robot.txt
│   └── .nojekyll
├── package.json
├── svelte.config.js
├── vite.config.ts
├── playwright.config.ts
├── tsconfig.json
├── eslint.config.js
├── .prettierrc
├── .prettierignore
├── .npmrc
├── .gitignore
├── README.md
└── PLAN.md               # AI Agent planning document
```

---

## Design System

- **Typography Constraints:** Prohibit the use of standard or classic fonts (e.g., Roboto, Consolas) in main visual areas such as the Hero section. Select typography that demonstrates creativity and uniqueness to create a memorable visual impact.
- **Core Usage & Variables:**
- `background` (`#ffffff`): Full site background; pure white for a clean look.
- `foreground` (`#09090b`): Main text; extremely dark gray (not pure black) to reduce eye strain.
- `primary` (`#4f46e5`): Primary Call-To-Action buttons and key visual elements.
- `muted-foreground` (`#71717a`): Secondary information, tech tag backgrounds, or ghost buttons.
- `border` (`#e4e4e7`): Dividers and card borders; maintains low-interference visual separation.

- **Extended Variables:**
- `card`: `#ffffff`, `card-foreground`: `#09090b`
- `popover`: `#ffffff`, `popover-foreground`: `#09090b`
- `primary-foreground`: `#ffffff`
- `secondary`: `#f4f4f5`, `secondary-foreground`: `#18181b`
- `muted`: `#f4f4f5`
- `accent`: `#f4f4f5`, `accent-foreground`: `#18181b`
- `input`: `#e4e4e7`, `ring`: `#4f46e5`

---

## Coding Standards and Style

- **Naming Conventions:** camelCase
- **Formatting & Linting:** Prettier, ESLint
- **Documentation:** All comments must be written in English.

---

## Development and Testing Workflow

- **Testing Framework:** Playwright
- **Testing Scope:** UI interactions and standard user flows.
- **Local Development:** `pnpm dev`
- **Version Control:** Strict adherence to Conventional Commits specification.

---

## Error Handling and Logging

- **Exception Handling:** Display UI pop-up messages for errors. Silent errors are prohibited.
- **Logging:** Use native browser console APIs (`console.log`, `console.info`, `console.warn`, `console.error`).

---

## Agent-Specific Directives

- **Task Execution:** Divide development into distinct phases. Commit code using git commands upon completion of each phase.
- **Pre-commit Requirement:** Execute `pnpm format && pnpm lint` before every commit to ensure code quality and consistency.
- **Restricted Operations:** Strict prohibition on modifying or removing any files outside of the project directory and session directory.
