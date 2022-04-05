import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTEzMjI1OCwiZXhwIjoxNjQ5MjE4NjU4fQ.B9XVk1RvbcGs3kGr8lxcN3WgpsYhknhcxBAepVh5LC4";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
