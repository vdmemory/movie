import axios from "axios";
import { BASE_URL } from "../environment";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
