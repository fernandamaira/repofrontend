import axios from "axios";
const baseURL = `${import.meta.env.development}`;
const api = axios.create({ baseURL: baseURL });

export default api;