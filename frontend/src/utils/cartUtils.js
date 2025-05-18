// If num = 12.3456, then num * 100 = 1234.56, and Math.round(1234.56) = 1235.
// toFixed(2) ensures that the result is always two decimal places, even if the last decimal places are zero.
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const calculateCartTotals = (state) => {
  // Calculate items price
  const itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => (acc += item.price * item.qty), 0)
  );

  // Calculate shipping price (If order is over $100 then free, else $10 shipping)
  const shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Calculate tax price (15% tax)
  const taxPrice = addDecimals(Number(0.15 * state.itemsPrice));

  // Calculate total price
  const totalPrice = addDecimals(
    Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)
  );

  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
