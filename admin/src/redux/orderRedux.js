import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "order",
  initialState: {
    orders: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //   get all order
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
      state.error = false;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // delete order
    deleteOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getOrderFailure,
  getOrderStart,
  getOrderSuccess,
  deleteOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
} = userSlice.actions;

export default userSlice.reducer;
