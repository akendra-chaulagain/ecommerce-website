import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categorys: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // get category
    getCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categorys = action.payload;
      state.error = false;
    },
    getCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
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
