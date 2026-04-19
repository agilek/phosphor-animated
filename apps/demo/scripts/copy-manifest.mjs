import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '..', '..', '..', 'core-main', 'src', 'icons.ts');
const dst = join(here, '..', 'src', 'icons-manifest.ts');

const body = await readFile(src, 'utf8');
const itemRe = /\{\s*name:\s*"([^"]+)",\s*pascal_name:\s*"([^"]+)",[\s\S]*?tags:\s*\[([\s\S]*?)\][\s\S]*?\}/g;
const items = [];
let m;
while ((m = itemRe.exec(body)) !== null) {
  const tagArray = m[3]
    .split(',')
    .map((t) => t.trim().replace(/^"|"$/g, ''))
    .filter(Boolean);
  items.push(`  { name: "${m[1]}", pascal_name: "${m[2]}", tags: ${JSON.stringify(tagArray)} }`);
}

const out = `// AUTO-GENERATED from core-main/src/icons.ts by scripts/copy-manifest.mjs. Do not edit.
export const icons = [
${items.join(',\n')}
];
`;
await writeFile(dst, out);
console.log(`✓ wrote ${items.length} icons to ${dst}`);
