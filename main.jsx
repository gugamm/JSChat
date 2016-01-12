import ReactDOM from 'react-dom';
import React from 'react';
import Chat from './src/components/Chat.jsx';
import SocketIO from 'socket.io-client';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

let _io = SocketIO('https://js-chat-askhugo.c9users.io:8080/');

_io.on('connect', () => {
    console.log('Conectei!');
});

ReactDOM.render(<Chat io={_io}/>, document.getElementById('chatApp'));