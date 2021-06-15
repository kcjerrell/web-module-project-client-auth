import axios from 'axios';

export const BASE_URL = "http://localhost:5000";

export const axiosWithAuth = () => {
	const token = localStorage.getItem('access-token');

	return axios.create({
		headers: {
			Authorization: token
		},
		baseURL: BASE_URL,
	})
}

export const saveToken = (token) => {
	localStorage.setItem('access-token', token);
}
