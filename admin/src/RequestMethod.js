import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk4Njg3NCwiZXhwIjoxNjQ5MDczMjc0fQ.LgUoaPz1B4H-H8cDYvOzfo1JqiU816M24rY5r7ajrWg";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
