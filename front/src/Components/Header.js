import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div className="container">
            <Link to="/reg" className="link"><span>Регистрация</span></Link>
            <Link to="/auth" className="link"><span>Авторизация</span></Link>
        </div>
    </header>
    )
}