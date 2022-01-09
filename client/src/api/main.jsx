import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:3001" });

export const signIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
