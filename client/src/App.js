import React, {useEffect} from 'react';
import {Layout} from "./components/Layout";
import {MainPage} from "./pages/MainPage";
import {PostsPage} from "./pages/PostsPage";
import {PostPage} from "./pages/PostPage";
import {AddPostPage} from "./pages/AddPostPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {EditPostPage} from "./pages/EditPostPage";
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {getMe} from "./redux/auth/authSlice";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])
    return (
        <>
            <Layout>
                <ToastContainer position={"bottom-center"}/>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"posts"} element={<PostsPage/>}/>
                    <Route path={":id"} element={<PostPage/>}/>
                    <Route path={":id/edit"} element={<EditPostPage/>}/>
                    <Route path={"new"} element={<AddPostPage/>}/>
                    <Route path={"register"} element={<RegisterPage/>}/>
                    <Route path={"login"} element={<LoginPage/>}/>

                </Routes>

            </Layout>
        </>
    );
};

export default App;