import { writeFile, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { loadTokens, buildCss, root } from './core.mjs';

const output = resolve(root, 'styles/tokens.css');
const css = buildCss(await loadTokens());
if (process.argv.includes('--check')) {
  const existing = await readFile(output, 'utf8').catch(() => '');
  if (existing !== css) {
    console.error('Generated CSS is stale. Run npm run build and commit styles/tokens.css.');
    process.exitCode = 1;
  } else {
    console.log('CSS tokens are in sync.');
  }
} else {
  await writeFile(output, css);
  console.log('Generated styles/tokens.css');
}
