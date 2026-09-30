import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const standardOptions = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000,
};

test('empty cart returns zero', () => {
  assert.equal(cartTotal([], standardOptions), 0);
});

test('charges shipping below the threshold', () => {
  const items = [{ name: 'Item', price: 100000, qty: 1 }];

  assert.equal(cartTotal(items, standardOptions), 138000);
});

test('free shipping at the exact threshold', () => {
  const items = [{ name: 'Item', price: 500000, qty: 1 }];

  assert.equal(cartTotal(items, standardOptions), 540000);
});

test('free shipping above the threshold', () => {
  const items = [{ name: 'Item', price: 600000, qty: 1 }];

  assert.equal(cartTotal(items, standardOptions), 648000);
});

test('shipping threshold uses subtotal before VAT', () => {
  const items = [{ name: 'Item', price: 480000, qty: 1 }];

  assert.equal(cartTotal(items, standardOptions), 548400);
});

test('negative price throws RangeError', () => {
  const items = [{ name: 'Item', price: -1, qty: 1 }];

  assert.throws(() => cartTotal(items, standardOptions), RangeError);
});

for (const qty of [0, -1, 1.5]) {
  test(`invalid qty ${qty} throws RangeError`, () => {
    const items = [{ name: 'Item', price: 100000, qty }];

    assert.throws(() => cartTotal(items, standardOptions), RangeError);
  });
}

test('returns a number', () => {
  const items = [{ name: 'Item', price: 100000, qty: 1 }];

  assert.equal(typeof cartTotal(items, standardOptions), 'number');
});

test('rounds down below half a dong', () => {
  const items = [{ name: 'Item', price: 100.4, qty: 1 }];
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 };

  assert.equal(cartTotal(items, options), 100);
});

test('rounds up at half a dong', () => {
  const items = [{ name: 'Item', price: 100.5, qty: 1 }];
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 };

  assert.equal(cartTotal(items, options), 101);
});

test('rounds only the final total', () => {
  const items = [
    { name: 'First', price: 0.4, qty: 1 },
    { name: 'Second', price: 0.4, qty: 1 },
  ];
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 };

  assert.equal(cartTotal(items, options), 1);
});

test('zero price is valid and still charges shipping', () => {
  const items = [{ name: 'Gift', price: 0, qty: 1 }];

  assert.equal(cartTotal(items, standardOptions), 30000);
});
