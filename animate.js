#!/usr/bin/env node

export function parseDuration(str) {
  const m = String(str).trim().match(/^(\d+(?:\.\d+)?)(ms|s)?$/);
  if (!m) throw new Error(`Invalid duration: ${JSON.stringify(str)}`);
  const n = parseFloat(m[1]);
  return m[2] === 'ms' ? n / 1000 : n;
}
