import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333' || 'https://ecommerce-server-sz9l.onrender.com',
});