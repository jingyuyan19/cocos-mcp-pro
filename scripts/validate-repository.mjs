#!/usr/bin/env node

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const maxBytes = 5 * 1024 * 1024;
const allowedEmail = 'jimmymjing@gmail.com';
const files = execFileSync('git', ['ls-files', '-z'])
  .toString('utf8')
  .split('\0')
  .filter(Boolean);
const failures = [];
const patterns = [
  ['OpenAI-style API key', /\bsk-(?:proj-)?[A-Za-z0-9_-]{24,}\b/g],
  ['MiniMax subscription key', /\bsk-cp-[A-Za-z0-9_-]{24,}\b/g],
  ['GitHub token', /\bgh[pousr]_[A-Za-z0-9]{30,}\b/g],
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g],
  ['macOS user path', /\/Users\/[A-Za-z0-9._-]+\//g],
  ['Windows user path', /[A-Za-z]:\\Users\\[^\\\s]+\\/g],
];

for (const file of files) {
  const stat = fs.statSync(file);
  if (stat.size > maxBytes) failures.push(`${file}: exceeds 5 MB`);
  if (path.extname(file).toLowerCase() === '.json') {
    try {
      JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (error) {
      failures.push(`${file}: invalid JSON (${error.message})`);
    }
  }
  const buffer = fs.readFileSync(file);
  if (buffer.subarray(0, Math.min(buffer.length, 8192)).includes(0)) continue;
  const text = buffer.toString('utf8');
  for (const [label, regex] of patterns) {
    regex.lastIndex = 0;
    if (regex.test(text)) failures.push(`${file}: contains ${label}`);
  }
  const emails = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [];
  for (const email of new Set(emails.map((value) => value.toLowerCase()))) {
    if (email !== allowedEmail) failures.push(`${file}: unexpected email ${email}`);
  }
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}
console.log(`Validated ${files.length} public files.`);
