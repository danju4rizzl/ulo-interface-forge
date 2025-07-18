# Copilot & AI Agent Instructions for Ulo Interface Forge

## Project Overview

- **Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn-ui
- **Purpose:** Marketing/business profile webapp for Ulo, with modular sections and a focus on rapid UI iteration.
- **Entry Point:** `src/pages/Index.tsx` (assembles all main sections)

## Architecture & Patterns

- **Component Structure:**
  - All major UI sections are in `src/components/` (e.g., `Header`, `HeroSection`, `FeaturesSection`, etc.).
  - UI primitives and reusable elements are in `src/components/ui/` (e.g., `button.tsx`, `card.tsx`).
  - Data for sections is imported from `src/data/` (e.g., `heroContent`, `businessSlides`).
  - Types are defined in `src/types/`.
- **Styling:**
  - Uses Tailwind CSS utility classes throughout.
  - `cn` utility in `src/lib/utils.ts` merges class names (see usage in UI components).
- **Routing:**
  - Single-page app; main route is `Index.tsx`. Add new pages to `src/pages/` and update routing if needed.
- **shadcn-ui:**
  - UI primitives are adapted from shadcn-ui and Radix UI. Follow the pattern in `src/components/ui/` for new primitives.

## Developer Workflows

- **Install dependencies:** `npm i`
- **Start dev server:** `npm run dev` (runs on port 8080 by default)
- **Build for production:** `npm run build`
- **Preview build:** `npm run preview`
- **Lint:** `npm run lint`
- **Component tagging:** In dev mode, the `lovable-tagger` plugin is enabled (see `vite.config.ts`).

## Conventions & Best Practices

- **Imports:** Use `@/` alias for `src/` (see `vite.config.ts`).
- **Component Props:** Use TypeScript interfaces from `src/types/` for props/data.
- **UI Primitives:** Extend or compose primitives in `src/components/ui/` for consistency.
- **Data Flow:** Pass data as props from `src/data/` to section components.
- **Styling:** Prefer Tailwind utility classes; use `cn` for conditional classes.
- **No backend:** This is a static frontend project; all data is local or static.

## External Integrations

- **Lovable Platform:**
  - Project can be edited and published via [Lovable](https://lovable.dev/projects/0dfac752-fc58-4ae3-8475-701bfa63efd7).
  - For custom domains, see Lovable docs.
- **Radix UI:** Used for accessible UI primitives (see dependencies in `package.json`).

## Example: Adding a New Section

1. Create a new component in `src/components/`.
2. Add any new data to `src/data/` and types to `src/types/`.
3. Import and use the new section in `src/pages/Index.tsx`.

---

If any conventions or workflows are unclear, please ask for clarification or examples from the codebase.
