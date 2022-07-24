import React, {useCallback} from 'react';
import style from './Profile.module.css'
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {Avatar} from "@mui/material";
import {EditableName} from "./EditableName/EditableName";
import {updateProfileTC} from "./profile-reducer";

export const Profile = () => {
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const name = useAppSelector(state => state.profile.name)
    const dispatch = useAppDispatch()

    const updateName = useCallback((title:string) => {
        dispatch(updateProfileTC({title}))
    }, [dispatch])

    if (!isLoggedIn) {
        return <Navigate to={'/sign-in'}/>
    }

    return (
        <div className={style.profileBlock}>
            <p className={style.title}>Personal Information</p>
            <div className={style.photoBlock}>
                <Avatar
                    className={style.photo}
                    alt="Remy Sharp"
                    src="https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg"
                    sx={{width: 96, height: 96}}
                />
            </div>
            <EditableName title={name} onChange={(title:string)=>updateName(title)}/>
        </div>
    );
};