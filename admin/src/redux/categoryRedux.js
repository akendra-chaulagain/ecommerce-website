import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categorys: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // create new category
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
    // delete
    deleteCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categorys.splice(
        state.categorys.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCategoryFailure: (state) => {
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
  deleteCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
} = categorySlice.actions;

export default categorySlice.reducer;
