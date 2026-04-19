import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseDuration } from '../animate.js';

test('parseDuration: seconds suffix', () => {
  assert.equal(parseDuration('1.5s'), 1.5);
});

test('parseDuration: milliseconds suffix', () => {
  assert.equal(parseDuration('1500ms'), 1.5);
});

test('parseDuration: bare number treated as seconds', () => {
  assert.equal(parseDuration('2'), 2);
});

test('parseDuration: integer seconds', () => {
  assert.equal(parseDuration('1s'), 1);
});

test('parseDuration: whitespace tolerated', () => {
  assert.equal(parseDuration('  0.3s  '), 0.3);
});

test('parseDuration: invalid input throws', () => {
  assert.throws(() => parseDuration('abc'), /invalid duration/i);
});

test('parseDuration: empty string throws', () => {
  assert.throws(() => parseDuration(''), /invalid duration/i);
});
