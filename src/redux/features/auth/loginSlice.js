// src/redux/features/auth/loginSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * POST /api/login
 * body: { clientname, password, remember }
 * success: { success:true, token, client:{ id, clientname } }
 */
export const loginClient = createAsyncThunk(
  "auth/loginClient",
  async ({ clientname, password, remember = false }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API}/api/login`,
        { clientname, password, remember },
        { withCredentials: false }
      );
      if (!data?.success) {
        return rejectWithValue({ message: data?.message || "Login failed" });
      }
      return data; // -> { success, token, client }
    } catch (err) {
      return rejectWithValue({
        message: err?.response?.data?.message || err.message || "Login failed",
      });
    }
  }
);

/**
 * POST /api/logout
 * body: { clientname }  (or omit if your server reads from token)
 */
export const logoutClient = createAsyncThunk(
  "auth/logoutClient",
  async ({ clientname }, { rejectWithValue }) => {
    try {
      await axios.post(
        `${API}/api/logout`,
        { clientname },
        { withCredentials: true }
      );
      return { success: true };
    } catch (err) {
      return rejectWithValue({
        message: err?.response?.data?.message || err.message || "Logout failed",
      });
    }
  }
);

const initialState = {
  client: null, // { id, clientname }
  token: null, // 15m access token
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    hydrate(state) {
      try {
        const raw = localStorage.getItem("csbr_auth");
        if (raw) {
          const parsed = JSON.parse(raw);
          state.client = parsed.client || null;
          state.token = parsed.token || null;
        }
      } catch {
        // ignore bad localStorage
      }
    },
    localLogout(state) {
      state.clientname = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("csbr_auth");
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginClient.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginClient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.client = action.payload.client;
        state.token = action.payload.token;
        state.error = null;
        // persist for refresh
        localStorage.setItem(
          "csbr_auth",
          JSON.stringify({ client: state.client, token: state.token })
        );
      })
      .addCase(loginClient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Login failed";
      })
      // LOGOUT
      .addCase(logoutClient.fulfilled, (state) => {
        state.client = null;
        state.token = null;
        state.status = "idle";
        state.error = null;
        localStorage.removeItem("csbr_auth");
      })
      .addCase(logoutClient.rejected, (state, action) => {
        // even if server logout fails, clear local state
        state.client = null;
        state.token = null;
        state.status = "idle";
        state.error = action.payload?.message || null;
        localStorage.removeItem("csbr_auth");
      });
  },
});

export const { hydrate, localLogout } = authSlice.actions;
export default authSlice.reducer;
