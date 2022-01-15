import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:3001" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signIn = (formData) => API.post("/users/login", formData);
export const signUp = (formData) => API.post("/users/register", formData);
