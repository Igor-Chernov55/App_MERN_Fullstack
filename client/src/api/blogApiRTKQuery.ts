import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RegisterType} from "../store/slices/authSlice";

export  const blogApiRTKQuery = createApi({
    reducerPath: 'blogApiRTKQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3002/api',
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: ({username, password}) => ({
                url: '/auth/register',
                method: 'POST',
                body: {username, password}
            })
        }),
        authUser: builder.mutation({
            query: ({username, password}) => ({
                url: '/auth/login',
                method: 'POST',
                body: {username, password}
            })
        }),
        getMe: builder.query<any, any>({
            query: () => '/auth/me'
        })
    })
})

export const {useRegisterUserMutation, useAuthUserMutation, useGetMeQuery} = blogApiRTKQuery
