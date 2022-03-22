import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU0YTVkOGMxYWY4YTMwYzZiYmY4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzkzODcyOCwiZXhwIjoxNjQ4MDI1MTI4fQ.Pupjb-1n8vahFNkR-UsDM6vqfXxpzrwt9NcFNF8P8Ok";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
