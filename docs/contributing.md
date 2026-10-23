# Contributing

## Workflow

1. Create a branch and open an issue describing the user problem.
2. Edit `tokens/primitives.json`, `tokens/semantic.json` or `tokens/components.json`.
3. Run `npm run validate && npm run build && npm test`.
4. Check the Light/Dark playground with `npm run preview`.
5. Open a pull request and explain the visual/behavioral change.
6. Update `CHANGELOG.md` for user-facing changes.

## Rules

- Prefer semantic roles to hardcoded colors in components.
- Keep Light/Dark token keys in sync.
- Add focus, disabled, loading, error and hover behavior when designing components.
- Respect reduced-motion preferences.
- Check real contrast and keyboard behavior; passing token validation is not an accessibility certification.
- Avoid adding dependencies without a concrete reason.

CSS naming: `--ds-{category}-{role}-{state}`.
Generated CSS is committed for easy use by existing Vue projects; **do not edit it manually**.
