# Project rules

## Stack
- Use plain JavaScript with ES modules.
- Use the built-in node:test and node:assert/strict modules.

## Commands
- Run tests: npm test
- Check formatting: npm run format:check
- Run the gate: npm run check

## Project files
- Implementation: src/cart.js
- Tests: test/cart.test.js
- Format checker: scripts/check-format.js
- CI workflow: .github/workflows/ci.yml

## Formatting
- Use spaces instead of literal tab characters.
- Do not leave trailing whitespace.
- End each checked text file with a newline.

## Never
- Never add dependencies or devDependencies.
- Never delete, skip, or weaken a test just to make it pass.
- Never swallow a required RangeError.
- Never change unrelated files during implementation.

## Workflow
- Read the README and brief before changing implementation code.
- Run the starter test before implementing cartTotal.
- Read every diff and inspect new files before accepting changes.
- Run the gate after implementation changes.
- Record assistant use honestly in AI-LOG.md.
