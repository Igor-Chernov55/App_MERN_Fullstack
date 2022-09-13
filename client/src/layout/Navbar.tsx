import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeLink = {
        color: 'yellow'
    }


    return (
        <div className='flex py-3 px-2 justify-between items-center'>
            <span className='flex justify-center items-center  '>
                Лого
            </span>
            <ul className="flex gap-8">
                <li>
                    <NavLink
                        to={'/'}
                        className='text-sx text-blue-400 hover:text-green-300'
                        // @ts-ignore
                        // style={({isActive}) =>  isActive ? activeLink : ''}
                    >
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/posts'}
                        className='text-sx text-blue-400 hover:text-green-300'
                        // // @ts-ignore
                        // style={({isActive}) =>  isActive ? activeLink : ''}
                    >
                        Мои посты
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/newPost'}
                        className='text-sx text-blue-400 hover:text-green-300'
                        // // @ts-ignore
                        // style={({isActive}) =>  isActive ? activeLink : ''}
                    >
                        Добавить новый пост
                    </NavLink>
                </li>
            </ul>
            <div className="flex justify-center items-center ">
                <button className='bg-blue-300 px-4 '>Войти</button>
            </div>
        </div>
    );
};

export default Navbar;
