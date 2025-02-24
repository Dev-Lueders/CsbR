// src/redux/reducers.js
import { combineReducers } from '@reduxjs/toolkit';

// Example of user and settings reducers (replace with your actual reducers)
import userReducer from './red_user';  
import red_settings from './red_settings_theme';

// Define the initial state for the lock reducer
const initialState = { isLocked: false };

// Lock reducer to toggle the lock state
const lockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'lock/toggle':
      return { ...state, isLocked: !state.isLocked };
    default:
      return state;
  }
};

// Combine all reducers including the lockReducer
const rootReducer = combineReducers({
  user: userReducer,
  settings: red_settings,
  lock: lockReducer,  // Add the lockReducer here
});

export default rootReducer;