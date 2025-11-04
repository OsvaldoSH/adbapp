import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.1.111:3001/api',
    timeout: 10000,
});