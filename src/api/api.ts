import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dashboard-time-tracking-site.netlify.app/data.json'
})