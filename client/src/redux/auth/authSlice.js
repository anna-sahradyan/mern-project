import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({username, password}) => {
        try {
            const {data} = await axios.post('/auth/register', {
                username,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
);
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                username,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        status: null,
        isLoading: false,

    },
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [registerUser.rejectWithValue]: (state, action) => {
            state.status = action.payload.message;
            state.isLoading = false;
        },
        //!LOGIN
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejectWithValue]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },
    }
});


export default authSlice.reducer;
