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
        }
    }
})

