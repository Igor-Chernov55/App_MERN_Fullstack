import React, {useLayoutEffect, useState} from 'react';
import axios from './../../api/blogApiAxios'
import {Link} from "react-router-dom";
import Moment from "react-moment";
import PostItem from "./PostItem";

const PostsUser = () => {
    const [data, setPost] = useState(
        [{
            imgUrl: '',
            title: '',
            username: '',
            text: '',
            views: '',
            comments: '',
            data: '',
            createdAt: '',
            _id: ''
        }]
    )
    const fetchMyPosts = async () => {
        try {
            const {data} = await axios.get('/posts/user/me')
            setPost(data)
            console.log(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useLayoutEffect(() => {
        fetchMyPosts()
    }, [])


    return <div className={'flex flex-col gap-8 justify-center items-center'}>
        <Link to={'/'} className={'flex py-2 px-4'}>
            Назад
        </Link>


        {data?.map(( data, key) => (
            <PostItem post={data} key={key} />
        ))
        }
        <div className="">
            comments
        </div>

    </div>

}

export default PostsUser;
