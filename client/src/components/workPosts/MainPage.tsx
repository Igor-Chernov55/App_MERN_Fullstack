import React from 'react';
import PostItem from "./PostItem";
import PopularPosts from "./PopularPosts";

export const MainPage = () => {
    return (
        <div className={'max-w-[900px] mx-auto py-10'}>
            <div className="flex justify-between gap-8">
                <div className="flex flex-col gap-10 basis-4/5">
                    <PostItem />
                </div>
                <div className="basis-1/5">
                    <p className="text-xs uppercase">
                        Популярное:
                    </p>
                    <PopularPosts />
                </div>
            </div>
        </div>
    );
};
