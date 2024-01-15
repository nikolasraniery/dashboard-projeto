import axios from "axios";

export const api = axios.create({
    baseURL: 'http://65a57eff5a5ead21e3530bd7--fabulous-genie-edd6f2.netlify.app/data.json'
})