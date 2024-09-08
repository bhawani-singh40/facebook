import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:2414' });

export const createChat = (data) => API.post('/createChat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/${firstId}/${secondId}`);
