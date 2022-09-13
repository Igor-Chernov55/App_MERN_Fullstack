import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {

    const isAuth = false

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
                    <button className='bg-blue-300 px-4 '>Выйти</button>
                    :
                    <Link to={'/login'}>Войти</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
