import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import openapiTS, { astToString } from 'openapi-typescript';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'src/api/schema.d.ts');
const sibling = resolve(root, '../back-end-portfolio/openapi.json');
const remote =
  'https://raw.githubusercontent.com/DevLaneSousa/back-end-portfolio/main/openapi.json';

const source = process.env.API_CONTRACT ?? (existsSync(sibling) ? sibling : remote);
const url = /^https?:\/\//.test(source) ? new URL(source) : pathToFileURL(resolve(root, source));

const ast = await openapiTS(url, { alphabetize: true });
const banner = `/* Gerado por "pnpm api:types" a partir de ${source.startsWith('http') ? source : 'back-end-portfolio/openapi.json'}. Não edite à mão. */\n\n`;

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, banner + astToString(ast));
console.log(`Tipos da API atualizados em src/api/schema.d.ts (fonte: ${source})`);
