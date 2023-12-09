import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { price: 0 },
  reducers: {
    addAllPrice: (state, action) => {
      state.price += action.payload;
    },
  },
});

export const { addCart, addAllPrice } = cartSlice.actions;
export default cartSlice.reducer;
