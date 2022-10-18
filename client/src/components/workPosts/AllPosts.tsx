import React, {useLayoutEffect} from 'react';
import {useGetAllPostsQuery} from "../../api/blogApiRTKQuery";
import {skipToken} from "@reduxjs/toolkit/query";

const AllPosts = () => {
    const {data} = useGetAllPostsQuery(1)

    let arr:any = []
    useLayoutEffect(() => {

        arr.push(data?.posts)
        console.log(arr)
    },[])



    return (
        <div>
            {// @ts-ignore
                arr.map(m => {
                return (
                    <p>{m}</p>
                )
            })}
        </div>
    );
};

export default AllPosts;
