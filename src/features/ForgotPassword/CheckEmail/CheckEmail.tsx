import React from 'react';
import style from './CheckEmail.module.css'
import checkEmail from '../../../assets/img/icons/checkEmail.svg'
import {NavLink} from "react-router-dom";
import { PATH } from '../../../app/App';
import { Button } from '@mui/material';

export const CheckEmail = () => {
    return (
        <div className={style.checkBlock}>
            <div className={style.title}>Check Email</div>
            <img className={style.icon} src={checkEmail} alt=""/>
            <div className={style.text}>We’ve sent an Email with instructions to example@mail.com</div>

            <NavLink className={style.button} to={PATH.LOGIN}>
                <Button type={'submit'} variant={'contained'} color={'primary'}>
                   Back to login
                </Button>
            </NavLink>
        </div>
    );
};
