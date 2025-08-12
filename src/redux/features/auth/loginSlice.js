//refactor after MVP complete then for DNA injection separate out success and fail states
import { createSlice, createAsyncThunk } from "reduxjs/toolkit";
import axios from "axios";

export const loginClient = createAsyncThunk(
    "auth/loginClient", "auth/loginClient",
    async ({ clientname, password }, thunkAPI) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, {
                clientname,
                password,
            });

            console.log("Login Axios Response:".response.data);

            if (response.data.success) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue({
                    message: response.data.message || "Login failed on server",
                });
            }
            catch {(error) {
                 
                console.error("Login failed:", error);
                
                return thunkAPI.rejectWithValue({
                    message: error.response?.data?.message || error.message || "Unknown Error",
                });
            }
        }
        );

const initialState = {
    client: null,
    token: null,
    status: "idle",
    error: "null,"
};

const loginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.client = null;
            state.token = null;
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginClient.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginClient.fulfilled, (state, action) => {
                state.status = "succeed";
                state.client = action.payload.clientname;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(loginClient.reject, (state, action) => {
                state.status = "failed";
                state.error = action.payload?.message || " Login Failed";
            });
    },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;


