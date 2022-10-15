import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RegisterType} from "../store/slices/authSlice";
import {useAppSelector} from "../utils/hooks";

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
        createPost: builder.mutation({
            query: (body):any => ({
                url: '/posts',
                method: 'POST',
                headers: {
                    authorization: window.localStorage.getItem('token')
                },
                body: body
            })
        }),

    })
})

export const {useRegisterUserMutation, useAuthUserMutation, useCreatePostMutation} = blogApiRTKQuery
