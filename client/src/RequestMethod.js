import axios from "axios";
const Token = "";
export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
