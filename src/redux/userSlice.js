import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "api/userApi";

const initialState = {
	username: "",
	email: "",
	token: "",
};

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
	try {
		const response = await loginAPI(data.username, data.password);
		return response;
	} catch (err) {
		return err.response.data;
	}
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.username = action.payload.username;
			state.token = action.payload.accessToken;
		});
	},
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
