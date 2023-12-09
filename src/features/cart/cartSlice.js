import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { price: 0, quantity: 0 },
  reducers: {
    addAllPrice: (state, action) => {
      state.quantity += 1;
      state.price += action.payload;
    },
  },
});

export const { addCart, addAllPrice } = cartSlice.actions;
export default cartSlice.reducer;
