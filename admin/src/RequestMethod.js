import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTA1Njg4MSwiZXhwIjoxNjQ5MTQzMjgxfQ.Q54WIRTqgyKoM9eBCDO4oMP7mOOgQLyEYj46_RSePQI";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
