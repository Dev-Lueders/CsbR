// There will be 2 stores one for the components and one for the pages to reduce the amount of code in one file trying to keep it simple modular and responsive

import { configureStore, createSlice } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/reducers';


const store = configureStore({
    reducer: rootReducer,
})
export default store;
