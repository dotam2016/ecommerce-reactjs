import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, refreshTokenAPI } from "api/userApi";

const initialState = {
	id: "",
	username: "",
	email: "",
	token: "",
};

export const login = createAsyncThunk(
	"user/login",
	async ({ username, password }) => {
		try {
			const response = await loginAPI(username, password);
			return response;
		} catch (err) {
			return err.response.data;
		}
	}
);

export const refreshToken = createAsyncThunk(
	"user/refresh-token",
	async (data, thunkAPI) => {
		try {
			const response = await refreshTokenAPI(
				data.username,
				data.password,
				data.refreshToken
			);
			return response;
		} catch (err) {
			return err.response.data;
		}
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.id = action.payload.id;
			state.username = action.payload.username;
			state.token = action.payload.accessToken;
		});
	},
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
