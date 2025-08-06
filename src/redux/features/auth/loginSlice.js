//refactor after MVP complete then for DNA injection separate out success and fail states


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const loginClient = createAsyncThunk(
    'auth/loginClient',
    async ({ clientname, password }, thunkAPI) => {
        try {
            const response = await axios.post
                (`${import.meta.env.VITE_API_URL}/api/login`, {
                    clientname,
                    password,
                });
            return response.data;
        } catch (err) {
            console.error("Error in loginClient thunk:", err);

            if (err.response && err.response.data) {
                return thunkAPI.rejectWithValue(err.response.data);
            } else {
                return thunkAPI.rejectWithValue({ message: err.message || "Unknown error" });
            }
        }
    }
);


            


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        client: null,
        token: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginClient.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(loginClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.token;
                state.client = action.payload.clientname;
            })
            .addCase(loginClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Login failed';
            });
    },
});
export default loginSlice.reducer;