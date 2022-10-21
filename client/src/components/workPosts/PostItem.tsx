import React, {FC} from 'react';
import {findAllByDisplayValue} from "@testing-library/react";
import Moment from "react-moment";
import moment from 'moment';
import {Link} from "react-router-dom";

export interface PostItemType {
    post: {
        imgUrl: any,
        title: string,
        username: string,
        text: string,
        views: string,
        comments?: string,
        data: any,
        createdAt: any,
        _id: string
    }
}

const PostItem: FC<PostItemType> = ({post}) => {

    if (!post) {
       return <div className={'text-xl text-center py-10'}>Постов нет</div>
    }

    return (
        <Link to={`/${post._id}`}>
            <div className={'flex flex-col basis-1/4 flex-grow'}>
                <div className={
                    post.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'
                }>
                    {post.imgUrl && (
                        <img src={`http://localhost:3002/${post.imgUrl}`}
                             alt="img"
                             className='object-cover w-full'/>
                    )}
                </div>
                <div className={'flex justify-between items-center'}>
                    <div className={'text-xs'}>Пользователь: {post.username}</div>
                    <div className={'text-xs'}>
                        дата:
                        <Moment date={post.createdAt} format='D MMM YYYY'/>

                    </div>
                </div>
                <div className={'text-xl'}>{post.title}</div>
                <p className="text-xs pt-4">{post.text}</p>
                <div className={'flex gap-3 items-center mt-2'}>
                    <button className={'flex items-center justify-center gap-2 text-xs'}>
                        <span>{post.views}</span>
                    </button>
                    <button className={'flex items-center justify-center gap-2 text-xs'}>
                        <span>{post.comments?.length}</span>
                    </button>

                </div>
            </div>
        </Link>
    );
};

export default PostItem;
