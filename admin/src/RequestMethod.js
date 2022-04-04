import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTAzNDI5MSwiZXhwIjoxNjQ5MTIwNjkxfQ.7plpMpw-AFMUtc1IOy4OZT5wp1eS3oLcr6gRaAHDX5c";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
