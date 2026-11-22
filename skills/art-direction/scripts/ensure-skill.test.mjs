import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const script = fileURLToPath(new URL('./ensure-skill.mjs', import.meta.url));
function run(args, cwd, home) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd, encoding: 'utf8', env: { ...process.env, HOME: home, USERPROFILE: home },
  });
}
function fixture(fn) {
  const root = mkdtempSync(join(tmpdir(), 'art-direction-skill-'));
  const workspace = join(root, 'project');
  const home = join(root, 'home');
  mkdirSync(workspace); mkdirSync(home);
  try { fn(workspace, home); } finally { rmSync(root, { recursive: true, force: true }); }
}
test('rejects arbitrary repos or names without executing installation', () => fixture((cwd, home) => {
  const r = run(['../../untrusted', '--json'], cwd, home);
  assert.notEqual(r.status, 0);
  assert.match(r.stdout, /allowlisted/);
}));
test('plans lazy install of only selected approved skill', () => fixture((cwd, home) => {
  const r = run(['remove-animations', '--scope', 'project', '--dry-run', '--json'], cwd, home);
  assert.equal(r.status, 0, r.stderr);
  const j = JSON.parse(r.stdout);
  assert.equal(j.status, 'would-install');
  assert.equal(j.source, 'emilkowalski/skills');
  assert.deepEqual(j.command.slice(0, 4), ['npx', '--yes', 'skills@latest', 'add']);
  assert.ok(j.command.includes('remove-animations'));
  assert.ok(!j.command.includes('--global'));
}));
test('does not reinstall a skill already in project', () => fixture((cwd, home) => {
  const path = join(cwd, '.agents', 'skills', 'anatomy');
  mkdirSync(path, { recursive: true });
  writeFileSync(join(path, 'SKILL.md'), '# Anatomy\n');
  const r = run(['anatomy', '--json'], cwd, home);
  assert.equal(r.status, 0, r.stderr);
  assert.equal(JSON.parse(r.stdout).status, 'already-installed');
}));
test('global default is explicit and installation remains dry-run', () => fixture((cwd, home) => {
  const r = run(['animate', '--dry-run', '--json'], cwd, home);
  assert.equal(r.status, 0, r.stderr);
  const j = JSON.parse(r.stdout);
  assert.equal(j.scope, 'global');
  assert.ok(j.command.includes('--global'));
}));
