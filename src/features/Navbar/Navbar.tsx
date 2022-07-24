import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Nav.module.css'

export function Nav() {
    const activeClassName = (params: any) => params.isActive ? s.active : '';

    return (
        <div className={s.navBlock}>
                <NavLink to={'/sign-in'} className={activeClassName}>
                    <div>
                        login
                    </div>
                </NavLink>
                <NavLink to={'/sign-up'} className={activeClassName}>
                    <div>
                        registration
                    </div>
                </NavLink>
                <NavLink to={'/profile'} className={activeClassName}>
                    <div>
                        profile
                    </div>
                </NavLink>
                <NavLink to={'/not_found'} className={activeClassName}>
                    <div>
                        Not Found
                    </div>
                </NavLink>
                <NavLink to={'/forgot-password'} className={activeClassName}>
                    <div>
                        forgot password
                    </div>
                </NavLink>
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