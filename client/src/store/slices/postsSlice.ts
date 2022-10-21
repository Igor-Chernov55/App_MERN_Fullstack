import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../api/blogApiAxios";

const initialState = {
        posts: [],
        popularPosts: [],
        loading: false
    }


export const createPost: any = createAsyncThunk('post/createPost',
    async (params) => {
        try {
            const {data} = await axios.post('/posts', params)

            return data
        } catch {

        }
    }
)

export const allPost: any = createAsyncThunk('post/allPost',
    async () => {
        try {
            const {data} = await axios.get('/posts')

            return data
        } catch {

        }
    }
)

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        //Create Post
        [createPost.pending]: (state) => {
            state.loading = true
        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false
            // @ts-ignore
            state.posts.push(action.payload)
        },
        [createPost.rejected]: (state) => {
            state.loading = false
        },
        // All Post
        [allPost.pending]: (state) => {
            state.loading = true
        },
        [allPost.fulfilled]: (state, action) => {
            state.posts = action.payload.posts
            state.popularPosts = action.payload.popularPosts
            state.loading = false
        },
        [createPost.rejected]: (state) => {
            state.loading = false
        },
    }
})

