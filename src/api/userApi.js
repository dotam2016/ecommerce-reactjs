import API_Admin from "./adminAPI";

export const loginAPI = async (username, password) => {
	return await API_Admin.post("auth/login", {
		username: username,
		password: password,
	}).then((response) => {
		return {
			accessToken: response.data.accessToken,
			username: username,
			refreshToken: response.data.refreshToken,
		};
	});
};
