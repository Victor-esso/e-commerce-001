// scripts/sync-aliases.mjs
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const aliasesPath = path.join(projectRoot, 'aliases.json');
const tsconfigPath = path.join(projectRoot, 'tsconfig.json');
const viteConfigPath = path.join(projectRoot, 'vite.config.ts'); // or .js if needed

// Read alias definitions
let aliases;
try {
  const aliasesContent = await fs.readFile(aliasesPath, 'utf-8');
  aliases = JSON.parse(aliasesContent);
} catch (err) {
  console.error('❌ Failed to read aliases.json:', err.message);
  process.exit(1);
}

// === Update tsconfig.json paths ===
const tsconfig = JSON.parse(await fs.readFile(tsconfigPath, 'utf-8'));
tsconfig.compilerOptions = tsconfig.compilerOptions || {};
tsconfig.compilerOptions.paths = {};

for (const [alias, target] of Object.entries(aliases)) {
  tsconfig.compilerOptions.paths[`${alias}/*`] = [`${target}/*`];
}

await fs.writeFile(tsconfigPath, JSON.stringify(tsconfig, null, 2));
console.log('✅ tsconfig.json updated');

// === Update vite.config.ts ===
let viteConfig = await fs.readFile(viteConfigPath, 'utf-8');

const newAliasBlock = Object.entries(aliases)
  .map(([key, value]) => `      { find: '${key}', replacement: path.resolve(__dirname, '${value}') }`)
  .join(',\n');

viteConfig = viteConfig.replace(
  /alias:\s*\[([\s\S]*?)\]/m,
  `alias: [\n${newAliasBlock}\n    ]`
);

await fs.writeFile(viteConfigPath, viteConfig);
console.log('✅ vite.config.ts updated');
