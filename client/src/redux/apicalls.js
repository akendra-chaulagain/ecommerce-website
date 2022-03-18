import { loginfailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
// const Token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzMwMDQ4ZTEwYTU3MjlhNjk3Yjk5NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzU3OTgzNCwiZXhwIjoxNjQ3NzUyNjM0fQ.og-PLsDV9dqHvsmN993jUU6bQXx_jHtJzBHnNVeFgbg";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res);
    alert("login success");
  } catch (error) {
    dispatch(loginfailure());
    console.log("login failure" + error);
  }
};
