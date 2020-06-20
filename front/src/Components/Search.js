import React from 'react';

export default function Search() {
    return (
        <div className="container">
            <div className="form-block">
                <form className="form" method="POST">
                    <input type="text" placeholder="Login/Email" name='name'></input>
                    <button type="submit"><span>Поиск</span></button>
                </form>
            </div>
        </div>
    )
}

