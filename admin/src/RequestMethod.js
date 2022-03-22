import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU0YTVkOGMxYWY4YTMwYzZiYmY4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzk0OTU4OCwiZXhwIjoxNjQ4MDM1OTg4fQ.zMqu666QzpHUWK7_F-dbvTKFglzuAC-IuWKBT3cSIag";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
