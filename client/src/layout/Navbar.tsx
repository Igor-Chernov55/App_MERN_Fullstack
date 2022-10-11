import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../utils/hooks";
import {authSlice} from "../store/slices/authSlice";
import {toast} from "react-toastify";

const Navbar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const token = useAppSelector(state => state.auth.token)

    const isAuth = Boolean(token)

    return (
        <div className='flex py-3 px-2 justify-between items-center'>
            <span className='flex justify-center items-center  '>
                Лого
            </span>

            {isAuth && <nav>
                <ul className="flex gap-8">
                    <li>
                        <NavLink
                            to={'/'}
                            className='text-sx text-blue-400 hover:text-green-300'
                            style={({isActive}) => ({color: isActive ? 'brown' : undefined})}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/posts'}
                            className='text-sx text-blue-400 hover:text-green-300'
                            style={({isActive}) => ({color: isActive ? 'brown' : undefined})}
                        >
                            Мои посты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/newPost'}
                            className='text-sx text-blue-400 hover:text-green-300'
                            style={({isActive}) => ({color: isActive ? 'brown' : undefined})}
                        >
                            Добавить новый пост
                        </NavLink>
                    </li>
                </ul>
            </nav>}

            <div className="flex justify-center items-center ">
                {isAuth ?
                    <button
                        className='bg-blue-300 px-4 '
                        onClick={() => {
                            dispatch(authSlice.actions.logOut())
                            navigate('/login')
                            toast('Выход из профиля')
                        }
                        }
                    >Выйти</button>
                    :
                    <Link to={'/login'}>Войти</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
