import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //   get all product
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //   delete product
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductFailure,
  getProductSuccess,
  getProductStart,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
} = userSlice.actions;

export default userSlice.reducer;
