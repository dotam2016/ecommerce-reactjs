import API_Admin from "./adminAPI";

// const LIMIT = 15;

export const getProductAPI = async (page = 1, limit) => {
	const response = await API_Admin.get(
		`products?_page=${page}&_limit=${limit}`
	);
	return response;
};

export const getProductByIdAPI = async (id) => {
	const response = await API_Admin.get(`products/${id}`);
	return response;
};

export const createProductAPI = async (data) => {
	const response = await API_Admin.post(`products`, data);
	return response;
};

export const editProductAPI = async (id, data) => {
	const response = await API_Admin.patch(`products/${id}`, {
		...data,
	});
	return response;
};

export const deleteProductAPI = async (id) => {
	const response = await API_Admin.delete(`products/${id}`);
	return response;
};
