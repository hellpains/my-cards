import React, {useCallback} from 'react';
import style from './Header.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {useAppDispatch, useAppSelector} from "../../app/store";
import {NavLink, Route, Routes} from "react-router-dom";
import {PATH} from "../../app/App";
import {SignIn} from "../../components/Button/SignIn/SignIn";
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/img/icons/Group 753.svg'
import backArrow from "../../assets/img/icons/backArrow.svg";
import {logoutTC} from "../Login/login-reducer";


export const Header = () => {
    const name = useAppSelector(state => state.profile.name)
    const avatar = useAppSelector(state => state.profile.avatar)
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const avatarUrl=avatar?avatar:"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg"
    const dispatch = useAppDispatch()


    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])

    return (
        <div className={style.headerBlock}>
            <div className={`${styleContainer.container} ${style.header}`}>
                <div className={style.logo}>
                    <img src={logo} alt=""/>
                </div>
                <Routes>
                    <Route path={PATH.LOGIN} element={<SignIn/>}/>
                    <Route path={PATH.REGISTRATION} element={<SignIn/>}/>
                    <Route path={PATH.FORGOT} element={<SignIn/>}/>

                    <Route path={PATH.PROFILE} element={<div className={style.container}>
                        <div className={style.name}>{name}</div>
                        <Avatar
                            src={avatarUrl}
                            sx={{width: 36, height: 36}}
                        />

                        <NavLink to={'/'}>
                            <div className={style.backPacks}>
                                <div className={style.icon}><img src={backArrow} alt=""/></div>
                                <div className={style.text}>Back to Packs List</div>
                            </div>
                        </NavLink>
                    </div>}/>
                </Routes>
            </div>
        </div>
    );
};
