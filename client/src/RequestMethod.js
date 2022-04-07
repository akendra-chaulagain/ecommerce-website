import axios from "axios";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGJmNGZiZGQxYjUwYzFkOGQxN2E2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMzMTc0NCwiZXhwIjoxNjQ5NDE4MTQ0fQ.p5o4oJdXiy-b5ohGMQA-1HSzFJxvXBKg0guUXzVWJC8";
export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
