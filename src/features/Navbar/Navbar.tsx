import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Nav.module.css'
import {PATH} from "../../app/App";

export function Nav() {
    const activeClassName = (params: any) => params.isActive ? s.active : '';

    return (
        <div className={s.navBlock}>
            <NavLink to={PATH.LOGIN} className={activeClassName}>
                <div>
                    login
                </div>
            </NavLink>
            <NavLink to={PATH.REGISTRATION} className={activeClassName}>
                <div>
                    registration
                </div>
            </NavLink>
            <NavLink to={PATH.PROFILE} className={activeClassName}>
                <div>
                    profile
                </div>
            </NavLink>
            <NavLink to={PATH.NOT_FOUND} className={activeClassName}>
                <div>
                    Not Found
                </div>
            </NavLink>
            <NavLink to={PATH.FORGOT} className={activeClassName}>
                <div>
                    recovery password
                </div>
            </NavLink>
            {/*<NavLink to={'/set-new-password/:token'} className={activeClassName}>*/}
            {/*    <div>*/}
            {/*        recovery password*/}
            {/*    </div>*/}
            {/*</NavLink>*/}
            {/*<NavLink to={'/new_password'} className={activeClassName}>*/}
            {/*    <div>*/}
            {/*        Enter new password*/}
            {/*    </div>*/}
            {/*</NavLink>*/}
            {/*<NavLink to={'/example'} className={activeClassName}>*/}
            {/*    <div>*/}
            {/*        Example*/}
            {/*    </div>*/}
            {/*</NavLink>*/}
        </div>
    )
}
