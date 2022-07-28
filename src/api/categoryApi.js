import API_Admin from "./adminAPI";

export const getCategoryAPI = async () => {
	const response = await API_Admin.get("categories");
	return response;
};

export const getCategoryByIdAPI = async (id) => {
	const response = await API_Admin.get(`categories/${id}`);
	return response;
};

export const createCategoryAPI = async (data) => {
	const response = await API_Admin.post(`categories`, data);
	return response;
};

export const editCategoryAPI = async (id, data) => {
	const response = await API_Admin.patch(`categories/${id}`, {
		...data,
	});
	return response;
};

export const deleteCategoryAPI = async (id) => {
	const response = await API_Admin.delete(`categories/${id}`);
	return response;
};
