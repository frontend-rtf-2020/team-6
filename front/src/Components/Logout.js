import React from 'react';

export default function Logout() {
    return(
      <div className="container">
            <div className="form-block">
                <form className="form" method="POST">
                    <button type="submit"><span>Выйти</span></button>
                </form>
            </div>
        </div>
    )
}