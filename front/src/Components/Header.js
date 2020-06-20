import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div className="container">
            <NavLink to="/reg" className="link" activeClassName="selected"><span>Регистрация</span></NavLink>
            <NavLink to="/auth" className="link" activeClassName="selected"><span>Авторизация</span></NavLink>
            <NavLink to="/chat" className="link" activeClassName="selected"><span>Отправить сообщение</span></NavLink>
            <NavLink to="/search" className="link" activeClassName="selected"><span>Поиск</span></NavLink>
            <NavLink to="/exit" className="link" activeClassName="selected"><span>Выход</span></NavLink>
        </div>
    </header>
    )
}