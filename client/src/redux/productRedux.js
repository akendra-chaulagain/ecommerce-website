import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // prouct reducer to get all products
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductfailure } =
  productSlice.actions;

export default productSlice.reducer;
