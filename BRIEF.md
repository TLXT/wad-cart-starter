# Brief for cartTotal

## Goal
Implement cartTotal(items, options) according to the starter README.

## Files the assistant may change
- src/cart.js
- test/cart.test.js

The harness has already been configured.
Do not modify other files during this implementation task.

## Stack and constraints
- Plain JavaScript with ES modules.
- No dependencies or devDependencies.
- Keep the named export cartTotal.
- Keep the starter's worked-example test.

## Input
items is an array of objects with:
- name
- price
- qty

options contains:
- vatRate
- freeShipFrom
- shipFee

## Contract
- subtotal is the sum of price multiplied by qty.
- VAT is subtotal multiplied by vatRate.
- Shipping is 0 when subtotal >= freeShipFrom.
- Otherwise, shipping is shipFee.
- Return subtotal + VAT + shipping, rounded to the nearest whole dong.
- Return a number.
- An empty cart returns 0 with no VAT or shipping.
- A negative price throws RangeError.
- A qty that is not a positive integer throws RangeError.
- The worked example returns 467400.

## Tests
Cover:
- The worked example.
- An empty cart.
- Shipping below, at, and above the threshold.
- A cart below the threshold before VAT but above it after VAT.
- A negative price.
- Zero, negative, and fractional quantities.
- The numeric return type.
- Rounding down and up.
- Rounding only the final total.
- A zero-price item with a positive quantity.

Each test should check one clearly identified behavior.

## Workflow
- Add tests and observe failures before implementing the matching behavior.
- Make small changes.
- Explain the changes for review.
- Do not delete or weaken tests to make them pass.

## Acceptance
- npm test passes.
- npm run check passes.
- The implementation matches the README.