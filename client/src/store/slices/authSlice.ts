import {createSlice} from "@reduxjs/toolkit";

interface AuthSlice {
    user: null,
    token: null | string,
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

// export const registerUser: any = createAsyncThunk('auth/registerUser', async({username, password}: RegisterType) => {
//
//           const {data} = await axios.post('/auth/register', {username, password})
//
//             if (data) {
//                 window.localStorage.setItem('token', data.token)
//             }
//
// })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: state => {
            state.token = null
            window.localStorage.removeItem('token')
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    },
    // extraReducers: {
    //     [registerUser.pending]: (state) => {
    //         state.isLoading = true
    //         state.status = null
    //     },
    //     [registerUser.fulfilled]: (state, action) => {
    //         state.isLoading = false
    //         // state.status = action.payload.message
    //         // state.user = action.payload.user
    //         // state.token = action.payload.token
    //     },
    //     [registerUser.rejected]: (state, action) => {
    //         // state.status = action.payload.message
    //         state.isLoading = false
    //     },
    //
    // }
})

