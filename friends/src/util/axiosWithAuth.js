import axios from 'axios';

export const BASE_URL = "http://localhost:5000";
const STORAGE_KEY = "access-token";

export const axiosWithAuth = () => {
	const token = localStorage.getItem(STORAGE_KEY);

	return axios.create({
		headers: {
			Authorization: token
		},
		baseURL: BASE_URL,
	})
};

export const saveToken = (token) => {
	localStorage.setItem(STORAGE_KEY, token);
};

export const hasToken = () => {
	return localStorage.getItem(STORAGE_KEY) !== null;
};

export const removeToken = () => {
	localStorage.removeItem(STORAGE_KEY);
};