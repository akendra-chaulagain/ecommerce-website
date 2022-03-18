import axios from "axios";
import { loginfailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    alert("login success!");
    window.location.replace("/");
  } catch (error) {
    console.log(error);
    dispatch(loginfailure());
  }
};
