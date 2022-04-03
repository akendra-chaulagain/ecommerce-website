import axios from "axios";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdkNjFmM2RlNjNjOGRkNTlmMzM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk1NjYyNSwiZXhwIjoxNjQ5MDQzMDI1fQ.cKM3HcnKjOqLP6q9X1MHNFICYTY1LnW00AyWx09yvus";
export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
