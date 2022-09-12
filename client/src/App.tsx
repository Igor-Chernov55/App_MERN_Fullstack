import React from 'react';
import './App.css';
import Layout from "./layout/LayOut";
import {Routes, Route} from "react-router-dom";
import Main from "./navigation/Main";
import AllPosts from "./navigation/workPosts/AllPosts";
import PagePost from "./navigation/workPosts/PagePost";
import AddPost from "./navigation/workPosts/AddPost";
import Registration from "./navigation/authorization/Registration";
import Login from "./navigation/authorization/Login";
import EditPost from "./navigation/workPosts/EditPost";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='posts' element={<AllPosts/>}/>
            <Route path=':id' element={<PagePost/>}/>
            <Route path=':id/edit' element={<EditPost/>}/>
            <Route path='new' element={<AddPost/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Registration/>}/>
        </Routes>
    )
}

export default App

