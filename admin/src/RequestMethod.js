import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODg3NTEyNCwiZXhwIjoxNjQ4OTYxNTI0fQ.TNorvPVFPIc4nPHkkZr7M-Vb--zDimpikKZY0l1eDY0";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
