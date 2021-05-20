import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink exact to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>PreJunior</NavLink>
            <NavLink exact to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Junior</NavLink>
            <NavLink exact to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>JuniorPlus</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
