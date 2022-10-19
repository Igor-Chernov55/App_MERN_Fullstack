import React from 'react';

const PostItem = () => {
    return (
        <div className={'flex flex-col basis-1/4 flex-grow'}>
             <div className="">
                 IMAGE
             </div>
            <div className={'flex justify-between items-center'}>
                <div className={'text-xs'}>USERNAME</div>
                <div className={'text-xs'}>DATA</div>
            </div>
            <div className={'text-xl'}></div>
            <p className="text-xs pt-4">POST TEXT</p>
            <div className={'flex gap-3 items-center mt-2'}>
                <button className={'flex items-center justify-center gap-2 text-xs'}>
                    <span>0</span>
                </button>
                <button className={'flex items-center justify-center gap-2 text-xs'}>
                    <span>0</span>
                </button>
            </div>
        </div>
    );
};

export default PostItem;
