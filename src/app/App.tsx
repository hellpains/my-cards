import React, {useEffect} from 'react';
import './App.css';
import {Registration} from "../features/Registration/Registration";
import {Nav} from "../features/Navbar/Navbar";
import {ForgotPassword} from "../features/ForgotPassword/ForgotPassword";
import {NotFound} from "../features/NotFound/NotFound";
import {Profile} from "../features/Profile/Profile";
import {Login} from "../features/Login/Login";
import {Navigate, Route, Routes} from 'react-router-dom';
import {Header} from "../features/Header/Header";
import {useAppDispatch, useAppSelector} from "./store";
import {CircularProgress} from "@mui/material";
import {initializeAppTC} from "./app-reducer";
import {CheckEmail} from '../features/ForgotPassword/CheckEmail/CheckEmail';
import {SetNewPassword} from '../features/ForgotPassword/SetNewPassword/SetNewPassword';
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {TablePaginationDemo} from "../components/Pagination/Pagination";

export enum PATH {
    LOGIN = '/sign-in',
    REGISTRATION = '/sign-up',
    PROFILE = '/profile',
    NEW_PASSWORD = '/new_password',
    FORGOT = '/forgot-password',
    EXAMPLE = '/example',
    NOT_FOUND = '/404',
    CHECK_EMAIL = '/check-email',
}

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.profile.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])


    if (!isInitialized) {
        return <div style={{position: 'fixed', top: '33%', left: '50%'}}>
            <CircularProgress/>
        </div>
    }

    return <div className="App">
        <Header/>

        <Routes>
            <Route path={'/'} element={<Navigate to={'/login'}/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
            <Route path={'*'} element={<Navigate to={PATH.NOT_FOUND}/>}/>
            <Route path={PATH.FORGOT} element={<ForgotPassword/>}/>
            <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>

            <Route path={'/set-new-password/'}>
                <Route index element={<SetNewPassword/>}/>
                <Route path={':token'} element={<SetNewPassword/>}/>
            </Route>
        </Routes>
        <Nav/>

        <ErrorSnackbar/>
    </div>
}
