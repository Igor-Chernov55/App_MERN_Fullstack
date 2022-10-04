import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RegisterType} from "../store/slices/authSlice";

export  const blogApiRTKQuery = createApi({
    reducerPath: 'blogApiRTKQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3002/api',
        prepareHeaders: (headers) => {
            const token = window.localStorage.getItem('token')
            if (token) {
                headers.set('Authorization', `${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: ({username, password}) => ({
                url: '/auth/register',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {username, password}
            })
        }),
        authUser: builder.mutation({
            query: ({username, password}) => ({
                url: '/auth/login',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: {username, password}
            })
        })
    })
})

export const {useRegisterUserMutation, useAuthUserMutation} = blogApiRTKQuery
