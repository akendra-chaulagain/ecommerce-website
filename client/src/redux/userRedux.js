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
    // user registration
    loginfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // logout user
    logOutStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    logOutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = localStorage.removeItem("persist:root");
      state.error = false;
    },
    logOutfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginfailure,
  registerStart,
  registerSuccess,
  registerfailure,
  logOutStart,
  logOutSuccess,
  logOutfailure,
} = userSlice.actions;

export default userSlice.reducer;
