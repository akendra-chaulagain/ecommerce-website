import { createSlice } from "@reduxjs/toolkit";

export const allUserSlice = createSlice({
  name: "allUser",
  initialState: {
    allUsers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // get all user from database
    getAllUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllUserSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers = action.payload;
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
      state.allUsers.splice(
        state.allUsers.findIndex((item) => item._id === action.payload),
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
  getAllUserFailure,
  getAllUserStart,
  getAllUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} = allUserSlice.actions;

export default allUserSlice.reducer;
