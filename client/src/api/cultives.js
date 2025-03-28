import axios from './axios.js';

export const getCultivesRequest = () => axios.get("/registros");

export const getCultiveRequest = (id) => axios.get(`/registros/${id}`);

export const createCultiveRequest = (cultive) => axios.post("/registros", cultive);

export const updateCultiveRequest = (cultive) => axios.put(`/registros/${cultive.id}`, cultive);

export const deleteCultiveRequest = (id) => axios.delete(`/registros/${id}`);