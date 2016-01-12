import ReactDOM from 'react-dom';
import React from 'react';
import Chat from './src/components/Chat.jsx';
import SocketIO from 'socket.io-client';

let _io = SocketIO('https://js-chat-askhugo.c9users.io:8080/');

_io.on('connect', () => {
    console.log('Conectei!');
});

ReactDOM.render(<Chat io={_io}/>, document.getElementById('chatApp'));