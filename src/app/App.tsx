import React from 'react';
import './App.css';
import {Registration} from "../features/Registration/Registration";
import {Nav} from "../features/Navbar/Navbar";
import {ForgotPassword} from "../features/ForgotPassword/ForgotPassword";
import {NotFound} from "../features/NotFound/NotFound";
import {Profile} from "../features/Profile/Profile";
import {Login} from "../features/Login/Login";
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Header} from "../features/Header/Header";

export enum PATH {
    LOGIN = '/sign-in',
    REGISTRATION = '/sign-up',
    PROFILE = '/profile',
    NEW_PASSWORD = '/new_password',
    FORGOT = '/forgot-password',
    EXAMPLE = '/example',
    NOT_FOUND = '/404',
}

const App = () => (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={'/404'} element={<NotFound/>}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            <Route path={PATH.FORGOT} element={<ForgotPassword/>}/>
            {/*<Route path={PATH.NEW_PASSWORD} element={<EnterNewPassword/>}/>*/}
            {/*<Route path={PATH.EXAMPLE} element={<Example/>}/>*/}
        </Routes>
        <Nav/>
    </div>
);

export default App;
//