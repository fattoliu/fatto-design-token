# Fatto Design Tokens

**Calm by default. Delight with purpose.**

A practical design-token foundation for modern enterprise dashboards and AI-native developer tools, inspired by our vehicle-management redesign.

**Current version: v0.2.0** · Node.js 20+ · Zero runtime dependencies · Light/Dark

## Quick start

```bash
git clone https://github.com/fattoliu/fatto-design-token.git
cd fatto-design-token
npm run validate  # check token values, theme parity and CSS naming
npm run build     # regenerate styles/tokens.css
npm test          # validate + ensure generated CSS is committed
npm run preview   # open http://127.0.0.1:4173
```

The playground is at `preview/index.html`. It previews the semantic palette, controls, dashboard metrics, table, search and light/dark theme. Demo data is fictional.

## Token architecture

| Layer | File | Purpose |
| --- | --- | --- |
| Primitive | `tokens/primitives.json` | Color palette, spacing, radius, font, motion |
| Semantic | `tokens/semantic.json` | Light/dark surface, text, border, action and status roles |
| Component | `tokens/components.json` | Layout, buttons, inputs, cards, tables, dialogs and navigation |
| Generated | `styles/tokens.css` | CSS custom properties for consumption |
| Preview | `preview/index.html` | Interactive design reference |

**The JSON files are the source of truth. Never hand-edit the generated CSS.**

## Integrate into Vue

Copy or import `styles/tokens.css` into your application entry:

```js
import './styles/tokens.css'
```

```css
.page { background: var(--ds-surface-canvas); color: var(--ds-text-primary); }
.card { background: var(--ds-surface-base); border: 1px solid var(--ds-border-default); border-radius: var(--ds-card-radius); }
.primary-button { background: var(--ds-action-primary); color: var(--ds-text-inverse); }
```

Set `data-theme="dark"` on the document root to switch theme. Theme switching is opt-in, not tied to OS settings.

## Quality gates

GitHub Actions runs `npm test` on pushes to `main` and pull requests. Checks cover:
- primitive formats and CSS variable collisions;
- semantic light/dark key parity;
- generated CSS freshness.

These are **structural checks**, not a full accessibility audit. Contrast, keyboard interaction, touch targets and visual regression still require dedicated testing.

## Design principles

1. **Calm by default:** quiet surfaces and intentional color.
2. **Content first:** hierarchy follows tasks.
3. **Progressive disclosure:** expose what matters now.
4. **Consistent but flexible:** share tokens, adapt layouts.
5. **Delight with purpose:** celebrate meaningful events, never obscure outcomes.

See [design principles](docs/design-principles.md) and [contribution guide](docs/contributing.md).

## Roadmap

- [x] **v0.1** — primitive, semantic and component foundations
- [x] **v0.2** — zero-dependency token build, validation, CI and interactive playground
- [ ] **v0.3** — Vue 3 reference components, states and accessibility tests
- [ ] **v0.4** — data-list, settings, AI Agent and workflow page patterns
- [ ] **v1.0** — stable release, versioning and visual regression

MIT licensed. Independent project; not affiliated with Linear, Vercel or Anthropic.
