// src/redux/reducers.js
import clientReducer from './red_client';
import settingsReducer from './red_settings_theme';
import signupReducer from "../features/signup/signupSlice"
import { createSlice } from '@reduxjs/toolkit';

const lockSlice = createSlice({
  name: 'lock',
  initialState: { isLocked: false },
  reducers: {
    toggleLock: (state) => {
      state.isLocked = !state.isLocked;
    },
  },
});

export const { toggleLock } = lockSlice.actions;

const rootReducer = {
  
  client: clientReducer,
  settings: settingsReducer,
  lock: lockSlice.reducer,
  signup:signupReducer,

};

export default rootReducer;