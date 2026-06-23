import { cpSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const distDir = join(root, 'dist');
const docsDir = join(root, 'docs');

if (existsSync(docsDir)) {
  rmSync(docsDir, { recursive: true, force: true });
}

cpSync(distDir, docsDir, { recursive: true });
writeFileSync(join(docsDir, '.nojekyll'), '');
console.log('Prepared docs/ for GitVerse Pages');
