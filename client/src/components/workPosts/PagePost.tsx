import React, {useCallback, useLayoutEffect, useState} from 'react';
import Moment from "react-moment";
import axios from '../../api/blogApiAxios'
import {Link, useParams} from "react-router-dom";

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
    }, [params.id])

    useLayoutEffect(() => {
        fetchUser()
    }, [fetchUser])
    return (
        <div className={'flex justify-center'}>
            <Link to={'/'} className={'flex  flex-row py-2 px-4'}>
                Назад
            </Link>

            <div className="flex flex-col max-w-[1200px] px-3 py-3">
                <div className="">
                    <div className="flex flex-col basis-1/4 flex-grow">
                        <div className={
                            data.imgUrl ? 'flex rounded-sm h-80 w-full' : 'flex rounded-sm'
                        }>
                            {data.imgUrl && (
                                <img src={`http://localhost:3002/${data?.imgUrl}`}
                                     alt="img"
                                     className='object-cover'/>
                            )}
                        </div>
                    </div>
                </div>
                <div className={'flex justify-between items-center'}>
                    <div className={'text-xs'}>
                        Пользователь: {data.username}
                    </div>
                    <div className={'text-xs'}>
                        дата:
                        <Moment date={data.createdAt} format='D MMM YYYY'/>
                    </div>
                </div>
                <div className={'text-xl'}>{data.title}</div>
                <p className="text-xs mt-4">{data.text}</p>
                <div className={'flex gap-3 items-center mt-2'}>
                    <button className={'flex items-center justify-center gap-2 text-xs'}>
                        <span>{data.views}</span>
                    </button>
                    <button className={'flex items-center justify-center gap-2 text-xs'}>
                        <span>{data.comments?.length}</span>
                    </button>
                </div>

            </div>
            <div className="">
                comments
            </div>

        </div>
    );
};

export default PagePost
