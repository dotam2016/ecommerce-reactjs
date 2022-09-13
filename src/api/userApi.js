import API_Admin from "./adminAPI";

export const loginAPI = async (username, password) => {
	return await API_Admin.post("auth/login", {
		username: username,
		password: password,
	}).then((response) => {
		return {
			id: response.data.id,
			username: username,
			accessToken: response.data.accessToken,
			refreshToken: response.data.refreshToken,
		};
	});
};

export const refreshTokenAPI = async (username, password, refreshToken) => {
	return await API_Admin.post("auth/token", {
		username: username,
		password: password,
		refreshToken: refreshToken,
	}).then((response) => {
		return {
			accessToken: response.data.accessToken,
			username: username,
			refreshToken: response.data.refreshToken,
		};
	});
};
