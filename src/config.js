import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://pure-coast-77675.herokuapp.com/api/"
})