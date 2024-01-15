import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dashboard-time-tracking-site.netlify.app/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});