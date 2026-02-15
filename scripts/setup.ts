#!/usr/bin/env npx tsx

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as readline from 'node:readline/promises';

const ROOT = path.resolve(import.meta.dirname, '..');
const GAME_CONFIG_PATH = path.join(ROOT, 'src', 'game.config.ts');
const PACKAGE_JSON_PATH = path.join(ROOT, 'package.json');
const INDEX_HTML_PATH = path.join(ROOT, 'index.html');

// ── Helpers ──────────────────────────────────────────────────────────────────

function readText(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

function writeText(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, 'utf-8');
}

/** Extract a string value from game.config.ts by key (e.g. name: 'Foo') */
function extractConfigValue(source: string, key: string): string {
  const re = new RegExp(`${key}:\\s*['"](.+?)['"]`);
  return source.match(re)?.[1] ?? '';
}

/** Replace a string value in game.config.ts by key */
function replaceConfigValue(source: string, key: string, newValue: string): string {
  const re = new RegExp(`(${key}:\\s*)(['"])(.+?)\\2`);
  return source.replace(re, `$1$2${newValue}$2`);
}

/** Replace a meta tag's content attribute in HTML */
function replaceMetaContent(html: string, selector: string, newContent: string): string {
  // selector is either  name="..."  or  property="..."
  const re = new RegExp(`(<meta\\s+${selector}\\s+content=")([^"]*)(")`, 'i');
  const altRe = new RegExp(`(<meta\\s+content=")([^"]*("\\s+${selector}))`, 'i');
  if (re.test(html)) {
    return html.replace(re, `$1${newContent}$3`);
  }
  return html.replace(altRe, `$1${newContent}$3`);
}

/** Replace <title>...</title> in HTML */
function replaceTitle(html: string, newTitle: string): string {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${newTitle}</title>`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Graceful Ctrl+C
  rl.on('close', () => {
    console.log('\n');
  });
  process.on('SIGINT', () => {
    console.log('\n\n⚠️  Setup cancelled.');
    rl.close();
    process.exit(0);
  });

  console.log('\n🎮  React Game Base — Interactive Setup\n');
  console.log('Press Enter to keep the current value shown in [brackets].\n');

  // Read current values
  const configSource = readText(GAME_CONFIG_PATH);
  const pkgJson = JSON.parse(readText(PACKAGE_JSON_PATH));

  const currentName = extractConfigValue(configSource, 'name');
  const currentAuthor = extractConfigValue(configSource, 'author');
  const currentDescription = extractConfigValue(configSource, 'description');

  // Prompt for values
  const gameName = (await rl.question(`Game name [${currentName}]: `)).trim() || currentName;
  const author = (await rl.question(`Author [${currentAuthor}]: `)).trim() || currentAuthor;
  const description = (await rl.question(`Description [${currentDescription}]: `)).trim() || currentDescription;

  rl.close();

  // Track changes
  const changes: string[] = [];

  // ── 1. Update src/game.config.ts ──────────────────────────────────────────
  let newConfig = configSource;
  if (gameName !== currentName) {
    newConfig = replaceConfigValue(newConfig, 'name', gameName);
  }
  if (author !== currentAuthor) {
    newConfig = replaceConfigValue(newConfig, 'author', author);
  }
  if (description !== currentDescription) {
    newConfig = replaceConfigValue(newConfig, 'description', description);
  }
  if (newConfig !== configSource) {
    writeText(GAME_CONFIG_PATH, newConfig);
    changes.push('src/game.config.ts');
  }

  // ── 2. Update package.json ────────────────────────────────────────────────
  const slugName = gameName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  let pkgChanged = false;
  if (pkgJson.name !== slugName) {
    pkgJson.name = slugName;
    pkgChanged = true;
  }
  if (pkgJson.description !== description) {
    pkgJson.description = description;
    pkgChanged = true;
  }
  if (pkgJson.author !== author) {
    pkgJson.author = author;
    pkgChanged = true;
  }
  if (pkgChanged) {
    writeText(PACKAGE_JSON_PATH, JSON.stringify(pkgJson, null, 2) + '\n');
    changes.push('package.json');
  }

  // ── 3. Update index.html ──────────────────────────────────────────────────
  let html = readText(INDEX_HTML_PATH);
  const originalHtml = html;

  html = replaceTitle(html, gameName);
  html = replaceMetaContent(html, 'name="description"', description);
  html = replaceMetaContent(html, 'property="og:title"', gameName);
  html = replaceMetaContent(html, 'property="og:description"', description);

  if (html !== originalHtml) {
    writeText(INDEX_HTML_PATH, html);
    changes.push('index.html');
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log('\n✅  Setup complete!\n');
  console.log('  Game name:    ' + gameName);
  console.log('  Author:       ' + author);
  console.log('  Description:  ' + description);

  if (changes.length > 0) {
    console.log('\n  Updated files:');
    for (const file of changes) {
      console.log(`    • ${file}`);
    }
  } else {
    console.log('\n  No files were changed (values unchanged).');
  }

  console.log('');
}

main().catch((err) => {
  console.error('❌  Setup failed:', err);
  process.exit(1);
});
