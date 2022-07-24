import React from 'react';
import style from './Header.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import logo from '../../assets/img/icons/Group 753.svg'

export const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={`${styleContainer.container} ${style.header}`}>
                <div className={style.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div>----</div>
            </div>
        </div>
    );
};
