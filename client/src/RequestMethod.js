import axios from "axios";
const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
