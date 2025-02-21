// src/redux/red_settings.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // Example setting
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;