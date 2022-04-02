import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // user reducer(for login)
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // get all user from database
    getAllUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    getAllUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // delete user
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.splice(
        state.currentUser.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginfailure,
  getAllUserFailure,
  getAllUserStart,
  getAllUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
