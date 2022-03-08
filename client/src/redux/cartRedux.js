import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    //   for increasing the cart number when add to cart is click
    addproduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    // remove cart
    removeproduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(
        (cart) => cart._id !== action.payload
      );
      state.total -= (action.payload.price * action.payload.quantity);
    },
  },
});

export const { addproduct, removeproduct } = cartSlice.actions;

export default cartSlice.reducer;
