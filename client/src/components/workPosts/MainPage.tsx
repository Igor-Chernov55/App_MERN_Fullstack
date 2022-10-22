import React, {useEffect, useLayoutEffect} from 'react';
import PostItem from "./PostItem";
import PopularPosts from "./PopularPosts";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {allPost} from "../../store/slices/postsSlice";

export const MainPage = () => {
    const {posts, popularPosts} = useAppSelector(state => state.posts)
    const token = useAppSelector(state => state.auth.token)
    const dispatch = useAppDispatch()

    const auth = Boolean(token)

    useLayoutEffect(() => {
        dispatch(allPost())
    },[])

    useEffect(() => {
        dispatch(allPost())
    }, [dispatch])

    if (!posts.length) {
        return <div className={'text-xl text-center py-10'}>Постов нет</div>
    }

    {
       return auth ? <div className={'max-w-[900px] mx-auto py-10'}>
                <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-10 basis-4/5">
                        {posts?.map((post,key) => {
                            return (
                                <PostItem
                                    post={post}
                                    key={key}/>
                            )})
                        }
                    </div>
                    <div className="basis-1/5">
                        <p className="text-xs uppercase">
                            Популярное:
                        </p>
                        {
                            popularPosts?.map((post, key) => {
                                    return (
                                        <PopularPosts
                                            key={key}
                                            post={post}
                                        />
                                    )
                                }
                            )
                        }

                    </div>
                </div>
            </div>
           :
           <div className={'text-center text-lg'}>
               Войдите в систему или зарегестрируйтесь
           </div>


    }



};
