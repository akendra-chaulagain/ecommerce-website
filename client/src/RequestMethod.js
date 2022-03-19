import axios from "axios";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU0YTVkOGMxYWY4YTMwYzZiYmY4NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDc2NjQ3NjQsImV4cCI6MTY0Nzc1MTE2NH0.FTZ8n6HnZRuri-acIUEqa5HeDRO_4UQVMUKuL2rjkY0";

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
