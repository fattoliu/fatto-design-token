# Fatto Design Tokens

> Calm by default. Delight with purpose.

A design-token foundation for modern enterprise dashboards and AI-native developer platforms.

**Version:** 0.1.0 (foundation draft)

## Design principles
1. Calm by default — quiet surfaces and restrained accent colors.
2. Content first — hierarchy follows tasks and information.
3. Progressive disclosure — reveal complexity when useful.
4. Consistent but flexible — share tokens, adapt page patterns.
5. Delight with purpose — celebrate genuine wins without obscuring outcomes.

## Structure
- `tokens/primitives.json` — palette, spacing, typography, radii and motion.
- `tokens/semantic.json` — light/dark role-based colors.
- `tokens/components.json` — component dimensions and layout decisions.
- `styles/tokens.css` — ready-to-use CSS custom properties.
- `docs/` — principles and contribution guidelines.

## Vue usage
```js
import './styles/tokens.css'
```

```css
.page { background: var(--ds-surface-canvas); color: var(--ds-text-primary); }
.card { background: var(--ds-surface-base); border: 1px solid var(--ds-border-default); border-radius: var(--ds-radius-lg); }
.primary-button { background: var(--ds-action-primary); color: #fff; }
```

Set `data-theme="dark"` on the root HTML element to enable dark mode.

**Note:** Token JSON is the intended source of truth; CSS is manually synchronized in v0.1.0. Automated builds and validation are planned.

## Roadmap
- v0.2 — token build pipeline, validation and visual gallery
- v0.3 — Vue 3 reference components and accessibility states
- v0.4 — list, details, settings, AI agent and workflow page patterns
- v1.0 — stable versioned releases and visual regression checks

Inspired by a vehicle/driver management dashboard redesign. Not affiliated with Linear, Vercel or Anthropic.

MIT License.
