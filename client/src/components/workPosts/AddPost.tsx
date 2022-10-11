import React from 'react';
import {Formik} from "formik";

const AddPost = () => {
    return (
        <Formik
            initialValues={{}}
            onSubmit={values => {}}
        >
            {() =>
                <form className='w-1/3 mx-auto py-10'>
                    <label className='flex items-center justify-center border-2 border-dotted cursor-grab text-gray-300 py-2 bg-gray-500 text-xs mt-2'>Прикрепить изображение <input
                        type="file" className='hidden'/></label>
                    <div className='flex object-cover py-2'>IMAGE</div>

                    <label className='text-m text-black '> Заголовок поста: <input type="text" placeholder='Заголовок поста' className='mt-1 w-full rounded-lg bg-gray-400 py-1 px-2 text-xs outline-none placeholder:text-white text-white' /> </label>

                    <label className='text-m text-black '>Текст поста: <textarea placeholder='Текст поста' className='mt-1 w-full rounded-lg bg-gray-400 py-1 px-2 resize-none h-40 text-xs outline-none text-white placeholder:text-white' /> </label>

                    <div className="flex gap-8 items-center justify-center mt-4 ">
                        <button className="flex items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">Добавить пост</button>
                        <button className="flex items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4">Отменить</button>
                    </div>
                </form>
            }
        </Formik>



    );
};

export default AddPost;
