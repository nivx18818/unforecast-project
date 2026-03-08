# Figma-to-Code Rules

These rules are mandatory for all Figma-driven implementation tasks in this repository.

## Project Context

- Framework: Next.js App Router + TypeScript
- Styling: Tailwind v4 + shadcn CSS variables in `src/app/globals.css`
- Product type: single-page invitation landing page
- Theme model: **single mode** for landing experience

## Required Figma Workflow (Do Not Skip)

1. Run `get_design_context` for the target node first.
2. If context is too large, run `get_metadata` and then fetch only required subnodes.
3. Run `get_screenshot` for visual parity checks.
4. Extract variable definitions and map them to semantic tokens.
5. Reuse project token architecture; do not replace architecture with raw utility-only styling.
6. Validate implementation against screenshot before completion.

## Component and File Rules

- Place reusable landing components in `src/components` (create folders by section when needed).
- Keep route entry composition in `src/app/page.tsx`.
- Use PascalCase component names.
- Use `cn` from `src/lib/utils.ts` for class merging.

## Styling and Token Rules

- IMPORTANT: Never hardcode colors in component code once a semantic token exists.
- IMPORTANT: Keep semantic CSS variables in `src/app/globals.css` as source of truth.
- IMPORTANT: Do not introduce a separate light mode for this invitation landing page.
- Typography roles:
  - Display/headline: Playfair Display
  - UI/body/button/nav: Be Vietnam Pro
- Keep spacing on 8pt scale with 4px micro spacing.
- Radius set for landing page: pill, 20, 32, 48.

## Effects Rules

- Use restrained effects from design:
  - dark overlays for readability
  - gold glows for emphasis
  - soft elevation shadows
  - optional glass panel blur for RSVP
- Avoid heavy animations and novelty effects.

## Asset Rules

- Use Figma MCP-provided image/SVG URLs directly while implementing.
- Do not add new icon libraries for assets already supplied by Figma.
- Prefer storing finalized assets under `public/` if they need to persist beyond MCP URL lifetime.

## Accessibility and Quality

- Ensure focus-visible states for all interactive controls.
- Preserve text contrast on dark backgrounds.
- Add aria labels for icon-only actions.
- Keep sections semantic and keyboard-navigable.

## Output Quality Bar

All Figma-based changes must satisfy:

- visual parity with frame `1:2`
- token-driven styling consistency
- reusable section/component structure
- no placeholder content unless explicitly requested
