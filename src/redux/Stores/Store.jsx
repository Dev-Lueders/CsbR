

import { configureStore, createSlice } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/reducers'; 


const Store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.NODE_ENV !== 'production',
})
export default Store;