import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU0YTVkOGMxYWY4YTMwYzZiYmY4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODg1NzkwOCwiZXhwIjoxNjQ4OTQ0MzA4fQ.g93OMXANV6G8rAqNas0B2Wh6F3gSuCuFpl9y7jdrIFw";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
