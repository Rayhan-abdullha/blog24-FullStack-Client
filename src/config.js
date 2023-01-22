import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://blog24-server-app.onrender.com/api/"
})