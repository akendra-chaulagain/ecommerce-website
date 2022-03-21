import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU0YTVkOGMxYWY4YTMwYzZiYmY4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzgyNzE1OCwiZXhwIjoxNjQ3OTEzNTU4fQ.F7MPW12nAVk1tQ9OQkqrtIRBLGc7z26mcqkt7Agag2o";


export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
