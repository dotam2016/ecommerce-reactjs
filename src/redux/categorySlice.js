import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoryAPI } from "api/categoryApi";

const initialState = {
	category: [],
};

export const getCategory = createAsyncThunk("category/get", async () => {
	const response = await getCategoryAPI();
	return { data: response.data, isSucc: true };
});

export const categorySlice = createSlice({
	name: "category",
	initialState,
	extraReducers: {
		[getCategory.fulfilled]: (state, action) => {
			state.category = action.payload.data;
		},
	},
});

export default categorySlice.reducer;
