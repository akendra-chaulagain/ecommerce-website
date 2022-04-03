import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk3MDA3NSwiZXhwIjoxNjQ5MDU2NDc1fQ.GpWAPgxjR9bSZp22mVgxAWx4DbFt2ZWDli8NYF7iwWQ";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
