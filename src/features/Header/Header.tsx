import React, {useCallback} from 'react';
import style from './Header.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import logo from '../../assets/img/icons/Group 753.svg'
import {useAppDispatch, useAppSelector} from "../../app/store";
import {logoutTC} from "../Login/login-reducer";

export const Header = () => {
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
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
                <div>
                    {isLoggedIn && <button onClick={logoutHandler}>log out</button>}
                </div>
            </div>
        </div>
    );
};
