import axios from './axios.js';

export const loginRequest = user => axios.post(`/login`, user);

export const verifyToken = () => axios.get(`/auth/verify`);