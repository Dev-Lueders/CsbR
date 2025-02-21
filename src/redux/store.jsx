import { configureStore, createSlice } from '@reduxjs/toolkit';
import rootReducer from './Reducers/reducers';


const store = configureStore({
    reducer: rootReducer,
})
export default store;
