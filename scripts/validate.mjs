import { loadTokens, flatten, cssName } from './core.mjs';
const { primitives, semantic, components } = await loadTokens();
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const hex = /^#[0-9a-fA-F]{6}$/;
const dim = /^\d+(\.\d+)?px$/;
const duration = /^\d+(\.\d+)?ms$/;
for (const {path, value} of flatten(primitives)) {
  if (path[0] === '$schema') continue;
  const parts = path.join('.');
  check(typeof value === 'string', `Invalid primitive: ${parts}`);
  if (path[0] === 'color') check(hex.test(value), `Invalid color: ${parts}`);
  if (path[0] === 'space' || path[0] === 'radius' || (path[0] === 'font' && path[1] === 'size')) check(dim.test(value), `Invalid dimension: ${parts}`);
  if (path[0] === 'motion') check(duration.test(value), `Invalid duration: ${parts}`);
}
const light = flatten(semantic.light);
const dark = flatten(semantic.dark);
const paths = (xs) => xs.map(x => x.path.join('.')).sort();
check(JSON.stringify(paths(light)) === JSON.stringify(paths(dark)), 'Light and dark theme keys differ.');
for (const theme of ['light','dark']) {
  for (const {path,value} of flatten(semantic[theme])) check(hex.test(value), `Invalid ${theme} color: ${path.join('.')}`);
}
for (const {path,value} of flatten(components)) {
  if (path[0] === 'shadow') continue;
  check(typeof value === 'string' && (dim.test(value) || value === 'surface.subtle'), `Invalid component value: ${path.join('.')}`);
}
const names = [...flatten(primitives), ...flatten(components), ...light].filter(x=>x.path[0]!=='$schema').map(x=>cssName(x.path));
check(new Set(names).size === names.length, 'Duplicate CSS variable names detected.');
if (errors.length) { errors.forEach(e=>console.error('✗',e)); process.exitCode=1; }
else console.log('✓ Tokens validated; light/dark parity and CSS names checked.');
