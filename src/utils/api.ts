import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ecommerce-server-sz9l.onrender.com/',
});