import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  clientname: "",
  email: "",
  password: "",
  first_name: "",
  last_name: "",

  role: "guest",
  address: {
    street: "",
    apartNo: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  },
  profile_picture: null,
  DoB: null,
  ageConfirmed: false,
  over18: false,
  terms: false,
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { key, value } = action.payload;

            if (key.startsWith('address.')) {
                const field = key.split('.')[1];
                state.address[field] = value;
            } else {
                state[key] = value;
            }
        },
        resetForm: () => initialState,
    },
});
export const loginClient = createAsyncThunk(
    'auth/loginClient',
    async ({ clientname, password }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                clientname,
                password,
            });
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data || err.message);
        }
    }
)
export const { updateField, resetForm } = signupSlice.actions;
export default signupSlice.reducer;