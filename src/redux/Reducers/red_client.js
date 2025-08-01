// src/redux/userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const clientSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setClient: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setClient } = clientSlice.actions;
export default clientSlice.reducer;