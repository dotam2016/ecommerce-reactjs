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
		console.log(response, "createAsyncThunk");
	} catch (e) {
		console.log(e.response.data);
	}
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			console.log(action, "extraReducers");
			// state.username = action.payload.username;
			// state.token = action.payload.accessToken;
		});
	},
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
