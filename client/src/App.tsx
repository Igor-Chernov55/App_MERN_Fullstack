import React from 'react';
import './App.css';
import Layout from "./layout/LayOut";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import AllPosts from "./components/workPosts/AllPosts";
import PagePost from "./components/workPosts/PagePost";
import EditPost from "./components/workPosts/EditPost";
import AddPost from "./components/workPosts/AddPost";
import Login from "./components/authorization/Login";
import Registration from "./components/authorization/Registration";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='posts' element={<AllPosts/>}/>
                <Route path=':id' element={<PagePost/>}/>
                <Route path=':id/edit' element={<EditPost/>}/>
                <Route path='newPost' element={<AddPost/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Registration/>}/>
            </Routes>
        </Layout>
    )
}

export default App

