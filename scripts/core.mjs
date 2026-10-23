import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const readJson = async (path) => JSON.parse(await readFile(resolve(root, path), 'utf8'));
export const kebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
export const flatten = (obj, prefix = []) => Object.entries(obj).flatMap(([key, value]) =>
  value && typeof value === 'object' && !Array.isArray(value) && !('$value' in value)
    ? flatten(value, [...prefix, key])
    : [{ path: [...prefix, key], value: value && typeof value === 'object' && '$value' in value ? value.$value : value }]
);
export const cssName = (path) => '--ds-' + path.map(kebab).join('-');
export const declaration = (entry) => `  ${cssName(entry.path)}: ${entry.value === 'surface.subtle' ? 'var(--ds-surface-subtle)' : entry.value};`;
export async function loadTokens() {
  const [primitives, semantic, components] = await Promise.all([
    readJson('tokens/primitives.json'), readJson('tokens/semantic.json'), readJson('tokens/components.json')
  ]);
  return { primitives, semantic, components };
}
export function buildCss({ primitives, semantic, components }) {
  const global = [
    ...flatten(primitives).filter(x => !x.path.includes('$schema')),
    ...flatten(components).filter(x => !x.path.includes('shadow'))
  ];
  const shadows = flatten(components.shadow).map(x => ({ ...x, path: ['shadow', ...x.path.slice(1)] }));
  const theme = (name, selector) =>
    `${selector} {\n${flatten(semantic[name]).map(declaration).join('\n')}\n}`;
  return [
    '/* GENERATED FILE — npm run build. Do not edit directly. */',
    theme('light', ':root, [data-theme="light"]'),
    theme('dark', '[data-theme="dark"]'),
    ':root {\n' + [...global, ...shadows].map(declaration).join('\n') + '\n}',
    '@media (prefers-reduced-motion: reduce) {',
    '  :root { --ds-motion-duration-fast: 0ms; --ds-motion-duration-normal: 0ms; --ds-motion-duration-slow: 0ms; --ds-motion-duration-celebration: 0ms; }',
    '}',
    ''
  ].join('\n\n');
}
