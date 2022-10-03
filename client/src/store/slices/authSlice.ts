import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useRegisterUserMutation} from "../../api/blogApi";

interface AuthSlice {
    user: null,
    token: null,
    isLoading: boolean,
    status: null
}

export type RegisterType = {
    username: string
    password: string
}

const initialState: AuthSlice = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

export const registerUser = createAsyncThunk('auth/registerUser', async({username, password}: RegisterType) => {
        try {


        } catch (e) {
            console.log(e)
        }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

