import React, {useEffect} from 'react';
import {Formik} from "formik";
import {Link} from "react-router-dom";
import {useRegisterUserMutation} from "../../api/blogApiRTKQuery";
import {toast} from "react-toastify";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {authSlice} from "../../store/slices/authSlice";

const Registration = () => {
    const [submit, result ] = useRegisterUserMutation()
    const dispatch = useAppDispatch()
    const token = useAppSelector(state => state.auth.token)

    useEffect(() => {
        toast(result?.data?.message)
        console.log('token', token)
    }, [result])

    const hh = (username: string, password: string) => {
        try {
            submit({username, password})
            result.data.token && window.localStorage.setItem('token', result.data.token);
            dispatch(authSlice.actions.setToken(result.data.token))
        } catch {

        }
    }

    return (
        <Formik
            initialValues={{login: '', password: ''}}
            onSubmit={(values) => {
                hh(values.login, values.password)
                values.login = ''
                values.password = ''
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
