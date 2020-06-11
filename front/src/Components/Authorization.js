import React from 'react';

export default function Authorization() {
    return (
        <div className="container">
            <div className="form-block">
                <form className="form" method="POST">
                    <input type="text" placeholder="Email/Login" name='email'></input>
                    <input type="password" placeholder="Password" name='password'></input>
                    <button type="submit"><span>Войти</span></button>
                </form>
            </div>
        </div>
    )
}
