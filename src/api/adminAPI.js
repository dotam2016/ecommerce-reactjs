import axios from "axios";
import { Cookies } from "react-cookie";

const getToken = () => {
	return new Cookies().get("token");
};

const API_Admin = axios.create({
	baseURL: process.env.REACT_APP_URL_API_ADMIN,
});

API_Admin.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response.status === 401) {
			console.log(error);
		}
	}
);

API_Admin.interceptors.request.use(
	(config) => {
		const token = getToken();

		if (!config.headers) {
			config.headers = {};
		}

		config.headers.Authorization = `Bearer ${token}`;

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default API_Admin;
