import { configureStore } from '@reduxjs/toolkit'
import {blogApiRTKQuery} from "../api/blogApiRTKQuery";
import {authSlice} from "./slices/authSlice";
import {postsSlice} from "./slices/postsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        posts: postsSlice.reducer,
        [blogApiRTKQuery.reducerPath]: blogApiRTKQuery.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApiRTKQuery.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
