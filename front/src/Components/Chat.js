import React from 'react';

export default function Chat() {
    return (
        <div className="container">
            <div className="form-block">
                <form className="form" method="POST">
                    <input type="text" placeholder="message" name='message'></input>
                    <input type="text" placeholder="receiver" name='receiver'></input>
                    <button type="submit"><span>Отправить</span></button>
                </form>
            </div>
        </div>
    )
}

