import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoryAPI, getCategoryByIdAPI } from "api/categoryApi";

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

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		updateCategory: (state, action) => {
			let index = state.data.findIndex(
				(item) => item.id === action.payload.id
			);
			// state.data = action.payload;
			console.log(index);
		},
	},
	extraReducers: {
		[getCategory.fulfilled]: (state, action) => {
			state.data = action.payload.data;
		},
	},
});

export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;
