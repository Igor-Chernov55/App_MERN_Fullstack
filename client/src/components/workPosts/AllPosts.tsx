import React, {useLayoutEffect} from 'react';
import {useGetAllPostsQuery} from "../../api/blogApiRTKQuery";
import {skipToken} from "@reduxjs/toolkit/query";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import axios from "axios";
import {allPost} from "../../store/slices/postsSlice";
import {MainPage} from "./MainPage";

const AllPosts = () => {

    return (
        <div>
            <MainPage />
        </div>
    );
};

export default AllPosts;
