import { readFileSync } from 'node:fs';

const files = [
  'src/cart.js',
  'test/cart.test.js',
  'scripts/check-format.js',
  'package.json',
  '.github/workflows/ci.yml',
];

let failed = false;

for (const file of files) {
  const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const lines = text.split('\n');

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (line.includes('\t')) {
      console.error(`${file}:${index + 1}: tab character found`);
      failed = true;
    }

    if (/[ \t]+$/.test(line)) {
      console.error(`${file}:${index + 1}: trailing whitespace found`);
      failed = true;
    }
  }

  if (text.length > 0 && !text.endsWith('\n')) {
    console.error(`${file}: missing final newline`);
    failed = true;
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log('Format check passed.');
}

