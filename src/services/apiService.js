import axios from "axios";

const api = axios.create({
    baseURL: "https://boutique-hotel.helmuth-lammer.at/api/v1",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
})

export default api;