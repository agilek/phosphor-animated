import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs } from '../animate.js';

test('parseArgs: positionals and defaults', () => {
  const a = parseArgs(['in', 'out']);
  assert.equal(a.inputDir, 'in');
  assert.equal(a.outputDir, 'out');
  assert.equal(a.duration, 1.5);
  assert.equal(a.stagger, 0.3);
  assert.equal(a.easing, 'ease-in-out');
});

test('parseArgs: --duration overrides default', () => {
  const a = parseArgs(['in', 'out', '--duration', '2s']);
  assert.equal(a.duration, 2);
});

test('parseArgs: --stagger overrides default', () => {
  const a = parseArgs(['in', 'out', '--stagger', '500ms']);
  assert.equal(a.stagger, 0.5);
});

test('parseArgs: --easing overrides default', () => {
  const a = parseArgs(['in', 'out', '--easing', 'linear']);
  assert.equal(a.easing, 'linear');
});

test('parseArgs: flags can precede positionals', () => {
  const a = parseArgs(['--duration', '3s', 'in', 'out']);
  assert.equal(a.inputDir, 'in');
  assert.equal(a.outputDir, 'out');
  assert.equal(a.duration, 3);
});

test('parseArgs: missing inputDir throws', () => {
  assert.throws(() => parseArgs([]), /inputDir/);
});

test('parseArgs: missing outputDir throws', () => {
  assert.throws(() => parseArgs(['in']), /outputDir/);
});

test('parseArgs: unknown flag throws', () => {
  assert.throws(() => parseArgs(['in', 'out', '--bogus', 'x']), /unknown flag/i);
});
