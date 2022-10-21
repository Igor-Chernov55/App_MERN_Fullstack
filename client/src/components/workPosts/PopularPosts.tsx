import React, {FC} from 'react';

type PopularPostsType = {
    post: {
        title: string
    }
}

const PopularPosts: FC<PopularPostsType> = ({post}: PopularPostsType) => {
    return (
        <div className={'my-1'}>
            <div className="flex text-xs hover:text-green-300">
                {post.title}
            </div>

        </div>
    );
};

export default PopularPosts;
