import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductAPI, editProductAPI } from "api/productApi";

const initialState = {
	data: [],
	pagination: {},
	loading: "ide",
};

export const getProducts = createAsyncThunk(
	"products/getall",
	({ currentPage, pageLimit }) => {
		const response = getProductAPI(currentPage, pageLimit);
		return response;
	}
);

export const editProduct = createAsyncThunk("product/edit", ({ id, data }) => {
	const response = editProductAPI(id, data);
	return response;
});

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[getProducts.pending]: (state) => {
			state.loading = "pending";
		},
		[getProducts.fulfilled]: (state, action) => {
			state.loading = "succeeded";
			state.data = action.payload.data.data;
			state.pagination = action.payload.data.pagination;
		},
	},
});

export const getProductById = (state, productId) => {
	return state.data.find((product) => product.id === Number(productId));
};

export default productSlice.reducer;
