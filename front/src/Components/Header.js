import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div className="container">
            <NavLink to="/reg" className="link" activeClassName="selected"><span>Регистрация</span></NavLink>
            <NavLink to="/auth" className="link" activeClassName="selected"><span>Авторизация</span></NavLink>
            <NavLink to="/error" className="link" activeClassName="selected"><span>Ошибка</span></NavLink>
        </div>
    </header>
    )
}