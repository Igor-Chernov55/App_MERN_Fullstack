import React, {useEffect} from 'react';
import {Formik} from "formik";
import {useAuthUserMutation, useCreatePostMutation} from "../../api/blogApiRTKQuery";

const AddPost = () => {
    const [submitPost, result] = useCreatePostMutation()

    useEffect(() => {
        console.log(window.localStorage.getItem('token'))
    },[])
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

    const handleSubmit = (data: any) => {
        try {
            submitPost(data)
        }
        catch (e) {

        }
    }

    return (
        <Formik
            initialValues={initialValue}
            onSubmit={values => {
                console.log(values)
                const data = new FormData()
                data.append('title', values.header)
                data.append('text', values.mainText)
                data.append('image', values.image)

                handleSubmit(data)
                console.log(result)
            }
        }
        >
            {({values, handleChange}: any) =>
                <form className='w-1/3 mx-auto py-10'>
                    <label className='flex items-center justify-center border-2 border-dotted cursor-grab text-white py-2 bg-blue-300 text-xs mt-2'>Прикрепить изображение <input
                        type="file" className='hidden'/>
                    </label>
                    <div className='flex object-cover py-2'>IMAGE</div>

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
