import React from 'react';

export default function Authorization() {
    return (
        <div className="container">
            <div className="form-block">
                <form className="form" method="POST">
                    <input type="text" placeholder="Login"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Password"></input>
                    <button type="submit"><span>Зарегистрироваться</span></button>
                </form>
            </div>
        </div>
    )
}