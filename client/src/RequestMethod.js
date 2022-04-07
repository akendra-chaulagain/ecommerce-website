import axios from "axios";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGJmNGZiZGQxYjUwYzFkOGQxN2E2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTM0MDUwOCwiZXhwIjoxNjQ5NDI2OTA4fQ.jCSxBHljKuUiz8tYNbmgClfuMIJqxz8AMfICWFMYywM";
export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
