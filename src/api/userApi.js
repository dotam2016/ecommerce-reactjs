import axios from "axios";

const userAPI = axios.create({
	baseURL: process.env.REACT_APP_URL_API_ADMIN,
});

export const loginAPI = async (username, password) => {
	return await userAPI
		.post("auth/login", {
			username: username,
			password: password,
		})
		.then((response) => {
			return {
				accessToken: response.data.accessToken,
				username: username,
			};
		});
};
export default userAPI;
