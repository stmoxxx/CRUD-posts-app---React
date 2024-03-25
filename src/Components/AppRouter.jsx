import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
            <Routes>
                <Route path={'/posts'}>
                    <Route index element={<Posts/>}/>
                    <Route path=":id" element={<PostIdPage/>}/>
                </Route>
                <Route path="/about" element={<About/>}/>
                <Route path='*' element={<Posts/>}/>
            </Routes>
    );
};

export default AppRouter;