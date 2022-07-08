import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getCategoryAPI,
	getCategoryByIdAPI,
	createCategoryAPI,
	editCategoryAPI,
	deleteCategoryAPI,
} from "api/categoryApi";

const initialState = {
	data: [],
};

export const getCategory = createAsyncThunk("category/get", async () => {
	const response = await getCategoryAPI();
	return { data: response.data, isSucc: true };
});

export const getCategoryById = createAsyncThunk(
	"category/getById",
	async (id) => {
		const response = await getCategoryByIdAPI();
		return { data: response.data, isSucc: true };
	}
);

export const createCategory = createAsyncThunk(
	"category/create",
	async (data) => {
		const response = await createCategoryAPI(data);
		return response;
	}
);

export const updateCategory = createAsyncThunk(
	"category/update",
	async (data) => {
		const response = await editCategoryAPI(data.id, data);
		return response;
	}
);

export const deleteCategory = createAsyncThunk(
	"category/delete",
	async (id) => {
		const response = await deleteCategoryAPI(id);
		return response;
	}
);

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: {
		[getCategory.fulfilled]: (state, action) => {
			state.data = action.payload.data;
		},
		[updateCategory.fulfilled]: (state, action) => {
			const index = state.data.findIndex(
				(item) => item.id === action.payload.data.id
			);
			state.data[index] = action.payload.data;
		},
		[deleteCategory.fulfilled]: (state, action) => {},
		[createCategory.fulfilled]: (state, action) => {
			state.data.push(action.payload.data);
		},
	},
});

export default categorySlice.reducer;
