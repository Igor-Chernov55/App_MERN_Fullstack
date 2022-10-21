import React, {useEffect} from 'react';
import './App.css';
import Layout from "./layout/LayOut";
import {Route, Routes} from "react-router-dom";
import AllPosts from "./components/workPosts/AllPosts";
import PagePost from "./components/workPosts/PagePost";
import EditPost from "./components/workPosts/EditPost";
import AddPost from "./components/workPosts/AddPost";
import Login from "./components/authorization/Login";
import Registration from "./components/authorization/Registration";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useAppDispatch} from "./utils/hooks";
import {authSlice} from "./store/slices/authSlice";
import {MainPage} from "./components/workPosts/MainPage";
import Main from "./components/Main";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authSlice.actions.setToken(window.localStorage.getItem('token')))
    },[])

    return (
        <Layout>
            <Routes>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Registration/>}/>
                <Route path='/' element={<MainPage/>}/>
                <Route path='posts' element={<Main/>}/>
                <Route path=':id' element={<PagePost/>}/>
                <Route path=':id/edit' element={<EditPost/>}/>
                <Route path='newPost' element={<AddPost/>}/>
            </Routes>
            <ToastContainer
                position="top-center"
            />
        </Layout>
    )
}

export default App

