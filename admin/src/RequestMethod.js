import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk0NjQxNywiZXhwIjoxNjQ5MDMyODE3fQ.H8aloRMzgMtHy9O8g3CMPUIJG7HQBSYu6HNmseIaGv0";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
