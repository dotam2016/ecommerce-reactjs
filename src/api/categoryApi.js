import API_Admin from "./adminAPI";

export const getCategoryAPI = async () => {
	const response = await API_Admin.get("categories");
	return response;
};

export const getCategoryByIdAPI = async (id) => {
	const response = await API_Admin.get(`categories/${id}`);
	return response;
};

export const editCategoryAPI = async (id, data) => {
	const response = await API_Admin.patch(`categories/${id}`, {
		...data,
	});
	return response;
};
