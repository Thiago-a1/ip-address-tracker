import axios from 'axios';

const api = axios.create({
	baseURL: `
https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&`,
});

export default api;