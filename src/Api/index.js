import axios from "axios";

export const API = axios.create({
    baseURL: "https://644e615a1b4567f4d5861c34.mockapi.io/api",
    headers: {"Content-Type": "application/json"},
});