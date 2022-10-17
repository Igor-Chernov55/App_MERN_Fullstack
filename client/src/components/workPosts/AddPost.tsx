import React, {useEffect} from 'react';
import {Formik, useFormikContext} from "formik";
import {useAuthUserMutation, useCreatePostMutation} from "../../api/blogApiRTKQuery";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../utils/hooks";
import {createPost} from "../../store/slices/postsSlice";
import {toast} from "react-toastify";

const AddPost = () => {
    interface PostType {
        header:string,
        mainText: string,
        image: string
    }

    const initialValue: PostType = {
        header: '',
        mainText: '',
        image: ''
    }
    const [submitPost, result] = useCreatePostMutation()

    const hh =  (values: any) => {
        const data =  new FormData()
        data.append('title', values.header)
        data.append('text', values.mainText)
        data.append('image', values.image)

        submitPost(data)
        result && toast('Пост успешно добавлен')
    }



    const Handle = () => {
        // const {values, submitForm} = useFormikContext()
        //
        //
        // useEffect(() => {
        //
        //    if (values) hh(values)
        //
        // },[values, submitForm])

        return null
    }

    return (
        <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
                hh(values)
            }
        }
        >
            {({values, handleChange, handleSubmit}: any) =>
                <form className='w-1/3 mx-auto py-10' onSubmit={handleSubmit}>
                    <label className='flex items-center justify-center border-2 border-dotted cursor-grab text-white py-2 bg-blue-300 text-xs mt-2'>Прикрепить изображение <input
                        type="file"
                        id={'image'}
                        name={'image'}
                        className='hidden'/>
                    </label>
                    <div className='flex object-cover py-2'>IMAGE</div>
                    <Handle />
                    <label className='text-m text-black'>
                        Заголовок поста:
                        <input name={'header'} id={'header'} value={values.header}  onChange={handleChange} type="text" placeholder='Заголовок поста' className='mt-1 w-full rounded-lg bg-blue-300 py-2 px-2 text-xs outline-none placeholder:text-white text-white' />
                    </label>

                    <label className='text-m text-black '>
                        Текст поста:
                        <textarea id={'mainText'} name={'mainText'} onChange={handleChange} placeholder='Текст поста' className='mt-1 w-full rounded-lg bg-blue-300 py-2 px-2 resize-none h-40 text-xs outline-none text-white placeholder:text-white' />
                    </label>

                    <div className="flex gap-8 items-center justify-center mt-4 ">
                        <button type='submit' className="flex items-center bg-green-400 text-xs text-white rounded-sm py-2 px-4">
                            Добавить пост
                        </button>
                        <button className="flex items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4">
                            Отменить
                        </button>
                    </div>
                </form>
            }
        </Formik>
    );
};

export default AddPost;
