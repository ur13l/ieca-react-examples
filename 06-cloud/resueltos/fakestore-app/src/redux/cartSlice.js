import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    totalPrices: (state) => {
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);
    },
  },
});

export const { addToCart, removeFromCart, totalPrices } = cartSlice.actions;

export default cartSlice.reducer;
