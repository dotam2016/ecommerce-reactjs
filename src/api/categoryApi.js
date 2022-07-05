import API_Admin from "./adminAPI";

export const getCategoryAPI = async () => {
	const response = await API_Admin.get("categories");
	return response;
};
