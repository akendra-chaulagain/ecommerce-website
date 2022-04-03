import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categorys: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // get all category
    getCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categorys=(action.payload);
    },
    getCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // create new product
    createCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categorys.push(action.payload);
    },
    createCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  createCategoryFailure,
  createCategoryStart,
  createCategorySuccess,
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
} = categorySlice.actions;

export default categorySlice.reducer;
