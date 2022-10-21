import React, {useCallback, useLayoutEffect, useState} from 'react';
import Moment from "react-moment";
import  axios from '../../api/blogApiAxios'
import {Link, useParams} from "react-router-dom";
import {PostItemType} from "./PostItem";

const PagePost = () => {
   const [data, setPost] = useState(
            {
               imgUrl: '',
               title: '',
               username: '',
               text: '',
               views: '',
               comments: '',
               data: '',
               createdAt: '',
               _id: ''
           }

    )

    const params = useParams()

    const fetchUser = useCallback(async () => {
            const {data} = await axios.get(`/posts/${params.id}`)
        setPost(data)
    },[params.id])

    useLayoutEffect(() => {
        fetchUser()
    },[fetchUser])
    return (
        <div>
            <Link to={'/'} className={'flex py-2 px-4'}>
                Назад
            </Link>

            <div className="flex gap-10 py-8">
                <div className="w-2/3">
                    <div className="flex flex-col basis-1/4 flex-grow">
                        <div className="">
                            <div className={
                            data.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'
                        }>
                            {data.imgUrl && (
                                <img src={`http://localhost:3002/${data?.imgUrl}`}
                                     alt="img"
                                     className='object-cover w-full'/>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-between items-center'}>
                    <div className={'text-xs'}>Пользователь: {data.username}</div>
                    <div className={'text-xs'}>
                        дата:
                        <Moment date={data.createdAt} format='D MMM YYYY' />

                    </div>
                </div>
                <div className={'text-xl'}>{data.title}</div>
                <p className="text-xs pt-4">{data.text}</p>
                <div className={'flex gap-3 items-center mt-2'}>
                    <button className={'flex items-center justify-center gap-2 text-xs'}>
                        <span>{data.views}</span>
                    </button>
                    <button className={'flex items-center justify-center gap-2 text-xs'}>
                        <span>{data.comments?.length}</span>
                    </button>

                </div>

                <div className="w-1/3">comments</div>
            </div>
        </div>
    );
};

export default PagePost
