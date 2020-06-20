import React from 'react';
//import io from 'socket.io-client/socket.io'
//const io = require('socket.io-client');
//let socket = io('http://localhost:8000');
const io = require('C:/Users/zzomb/Messenged/main/deploy/team-6/front/node_modules/socket.io-client/dist/socket.io.js');
let socket = io();

const handleCLick = () => {
    socket.emit('update');
  }


export default function Authorization() {
    return (
        <div className="container">
            <div className="form-block">
                <form className="form" method="POST">
                    <input type="text" placeholder="Email/Login" name='email'></input>
                    <input type="password" placeholder="Password" name='password'></input>
                    <button type="submit" onClick={handleCLick}><span>Войти</span></button>
                </form>
            </div>
        </div>
    )
}
/**
  componentDidMount () {
    const socket = io('http://localhost:8000', {
      transports: ['websocket']
    })

    socket.on('connect', () => {
      console.log("socket connected")
      socket.emit('YOUR EVENT TO SERVER', {})
      socket.on('EVENT YOU WANNA LISTEN', (r) => {
      })
    })

    socket.on('connect_error', (err) => {
      console.log(err)
    })

    socket.on('disconnect', () => {
      console.log("Disconnected Socket!")
    })
  }
 */
