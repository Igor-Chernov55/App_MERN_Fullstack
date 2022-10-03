import React, {useState} from 'react';
import {Formik} from "formik";
import {Link} from "react-router-dom";
import {useRegisterUserMutation} from "../../api/blogApi";

const Registration = () => {
    const [data, {isError}] = useRegisterUserMutation()

    const registrationHandler = async (username: string, password: string) => {

        try {
            await data({username, password})
            isError && alert('ошибка')
        }
        catch (e) {
            console.log(e)
            alert('failed')
        }
    }


    return (

        <Formik
            initialValues={{login: '', password: ''}}
            onSubmit={(values) => {
                registrationHandler(values.login, values.password)

            }}
        >
            {({values, handleChange, handleSubmit}: any) => (
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col w-1/3 h-60 mx-auto mt-40'
                >
                    <h1 className='text-lg text-black text-center'>Регистрация</h1>
                    <label className='text-lm '>
                        Имя пользователя
                        <input
                            type="text"
                            placeholder='username'
                            className='mt-1  text-sm text-white w-full rounded outline-none bg-blue-300 px-2 py-1 '
                            onChange={handleChange}
                            name={'login'}
                            id={'login'}
                            value={values.login}
                        />
                    </label>
                    <label>
                        Пароль
                        <input
                            type="password"
                            placeholder='password'
                            className='mt-1 mb-2 text-sm w-full rounded outline-none bg-blue-300 px-2 py-1 '
                            onChange={handleChange}
                            name={'password'}
                            id={'password'}
                            value={values.password}
                        />
                    </label>
                    <div className='flex flex-col items-center'>
                        <button
                            type='submit'
                            className='w-40 bg-green-200 text-black rounded px-2 py-1 text-sm
                        hover:bg-blue-300 hover:text-white'
                        >
                            зарегистрироваться
                        </button>

                        <Link
                            to='/login'
                            className='text-sm text-blue-400 '
                        >
                            войти
                        </Link>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default Registration;
