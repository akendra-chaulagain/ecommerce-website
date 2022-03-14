import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // user rteducer(for login)
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
    // update user
    // updateStart: (state) => {
    //   state.isFetching = true;
    // },
    // updateSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.currentUser[
    //     state.currentUser.findIndex((item) => item._id === action.payload.id)
    //   ] = action.payload.currentUser;
    // },
    // updatefailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginfailure,
  updateStart,
  updateSuccess,
  updatefailure,
} = userSlice.actions;

export default userSlice.reducer;
