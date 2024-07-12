import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_BACKEND_URI}`,
});
export const UserSignUp = async (data) => API.post("/api/user/signup", data);
export const UserSignIn = async (data) => API.post("/api/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/api/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/api/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/api/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
