# Linear-inspired visual direction

Reference: user-provided screenshots of Linear's dark workspace, initiative table and roadmap.

## Why the previous direction missed
The original v0.2 preview relied on bright blue accents, cards, pill badges, and a spacious KPI-first dashboard. That is not the visual system demonstrated by the references.

## Visual grammar
- Dark charcoal rather than pure black: canvas `#0c0d0f`, sidebar `#111214`, panel `#151618`.
- Fine separators `#292a2e`; avoid stacked cards and heavy shadows.
- Compact 33px sidebar items, 55px toolbar, ~62px information-rich list rows.
- High-contrast primary text `#ededee`; muted metadata `#696a72`.
- Purple `#8d8af5` as a restrained interaction accent; green/amber/red only for meaningful status.
- Table hierarchy comes from typography, spacing, alignment and subtle hover states, not zebra striping.
- Timeline bars are quiet, milestone labels are secondary, and the timeline grid stays behind content.

## Design implementation
Open `preview/linear-inspired.html` in the browser or run `npm run preview` and navigate to `/preview/linear-inspired.html`. Switch between initiative list and roadmap, and between dark and light.

## Scope and limitations
This is a visual study **inspired by** Linear's interaction density and composition, not a copy of Linear's logos, proprietary icons, assets, source code or exact design tokens. It uses original placeholder symbols and sample Chinese AI R&D project data.

Before production use:
1. Convert the visual constants into the repository's semantic tokens.
2. Replace placeholder glyphs with a consistent licensed icon library.
3. Build real Vue 3 components, including keyboard interaction and accessibility tests.
4. Verify contrast, responsive behavior and motion in real browsers.
