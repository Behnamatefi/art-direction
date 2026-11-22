#!/usr/bin/env node
/**
 * Lazy, allowlisted Codex skill installer.
 * No dependencies; does not execute a shell or accept an arbitrary repository.
 * Usage: node ensure-skill.mjs <name> [--scope global|project] [--dry-run] [--json]
 */
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const SOURCES = Object.freeze({
  anatomy: 'wheresryan22/anatomy',
  animate: 'emilkowalski/skills',
  'find-animation-opportunities': 'emilkowalski/skills',
  'animation-performance': 'emilkowalski/skills',
  'improve-animations': 'emilkowalski/skills',
  'review-animations': 'emilkowalski/skills',
  'remove-animations': 'emilkowalski/skills',
});

const args = process.argv.slice(2);
let name;
let scope = 'global';
let dryRun = false;
let json = false;
function fail(message, code = 2) {
  if (json) process.stdout.write(JSON.stringify({ status: 'error', skill: name ?? null, message }) + '\n');
  else process.stderr.write('art-direction: ' + message + '\n');
  process.exit(code);
}
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--dry-run') dryRun = true;
  else if (arg === '--json') json = true;
  else if (arg === '--scope') {
    scope = args[++i];
    if (!['project', 'global'].includes(scope)) fail('Scope must be global or project');
  } else if (!arg.startsWith('-') && !name) name = arg;
  else fail('Unrecognized argument: ' + arg);
}
if (!name || !Object.hasOwn(SOURCES, name)) {
  fail('Expected one allowlisted skill: ' + Object.keys(SOURCES).join(', '));
}

const home = homedir();
const paths = [
  join(process.cwd(), '.agents', 'skills', name, 'SKILL.md'),
  join(home, '.agents', 'skills', name, 'SKILL.md'),
  join(home, '.codex', 'skills', name, 'SKILL.md'),
];
if (process.env.CODEX_HOME) paths.push(join(resolve(process.env.CODEX_HOME), 'skills', name, 'SKILL.md'));
const installedPath = paths.find(p => existsSync(p));
const source = SOURCES[name];
function output(status, extra = {}) {
  const result = { status, skill: name, source, ...extra };
  if (json) process.stdout.write(JSON.stringify(result) + '\n');
  else process.stdout.write('art-direction: ' + name + ': ' + status + (result.path ? ' (' + result.path + ')' : '') + '\n');
}

if (installedPath) {
  output('already-installed', { path: installedPath });
  process.exit(0);
}
const command = ['--yes', 'skills@latest', 'add', source, '--skill', name, '--agent', 'codex', '--yes'];
if (scope === 'global') command.push('--global');
if (dryRun) {
  output('would-install', { command: ['npx', ...command], scope });
  process.exit(0);
}
const [major, minor] = process.versions.node.split('.').map(Number);
if (major < 22 || (major === 22 && minor < 20)) {
  fail('skills CLI currently requires Node.js 22.20+. Upgrade Node before automatic installation.');
}
const result = spawnSync('npx', command, {
  cwd: process.cwd(),
  env: { ...process.env, CI: '1' },
  encoding: 'utf8',
  timeout: 180000,
  maxBuffer: 1024 * 1024 * 3,
  shell: false,
});
if (result.error) fail('Installation process failed: ' + result.error.message);
if (result.status !== 0) {
  const err = (result.stderr || result.stdout || '').trim().slice(-1200);
  fail('Installation failed (exit ' + result.status + '): ' + err);
}
const after = paths.find(p => existsSync(p));
if (!after) {
  fail('Installer exited successfully, but no SKILL.md was found in expected Codex paths. Verify skill installation scope and discoverability.');
}
output('installed-now', { path: after, scope });
