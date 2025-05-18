import { createSlice } from '@reduxjs/toolkit';
import { calculateCartTotals } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === existItem._id ? item : cartItem
        );
      } else {
        state.cartItems.push(item);
      }

      const totals = calculateCartTotals(state);
      state.itemsPrice = totals.itemsPrice;
      state.shippingPrice = totals.shippingPrice;
      state.taxPrice = totals.taxPrice;
      state.totalPrice = totals.totalPrice;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      const totals = calculateCartTotals(state);
      state.itemsPrice = totals.itemsPrice;
      state.shippingPrice = totals.shippingPrice;
      state.taxPrice = totals.taxPrice;
      state.totalPrice = totals.totalPrice;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
