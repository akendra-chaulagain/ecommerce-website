import axios from "axios";
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGJmNGZiZGQxYjUwYzFkOGQxN2E2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTIwNTk3MCwiZXhwIjoxNjQ5MjkyMzcwfQ.T83lyvG8wfhxoVyccU4KnWghWbNkrXs2OmQ8GhvtisY";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
