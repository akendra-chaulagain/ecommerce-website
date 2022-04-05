import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGJmNGZiZGQxYjUwYzFkOGQxN2E2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTE0ODE3MiwiZXhwIjoxNjQ5MjM0NTcyfQ.Zfv1uGciAVtnDP5BzQe32VkGm1hgI6s4HnSm7GxG_Wk";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
