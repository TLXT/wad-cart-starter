export function cartTotal(items, options) {
  if (items.length === 0) {
    return 0;
  }

  const { vatRate, freeShipFrom, shipFee } = options;

  let subtotal = 0;

  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('price must be non-negative');
    }

    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('qty must be a positive integer');
    }

    subtotal += item.price * item.qty;
  }

  const vat = subtotal * vatRate;
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee;

  return Math.round(subtotal + vat + shipping);
}
