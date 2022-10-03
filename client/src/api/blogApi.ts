import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RegisterType} from "../store/slices/authSlice";

export  const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3002/api',
        // prepareHeaders: (headers) => {
        //     const token = window.localStorage.getItem('token')
        //     if (token) {
        //         headers.set('Authorization', `${token}`)
        //     }
        //     return headers
        // }
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: ({username, password}) => ({
                url: '/auth/register',
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: {username: username, password: password}
            })
        }),
        authUser: builder.mutation<string, RegisterType>({
            query: ({username, password}) => ({
                url: '/auth/login',
                method: 'POST',
                // headers: {
                //   'Content-Type': 'application/json'
                // },
                body: {username: username, password: password}
            })
        })
    })
})

export const {useRegisterUserMutation, useAuthUserMutation} = blogApi
