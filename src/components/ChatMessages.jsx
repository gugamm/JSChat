import React from 'react';

export default class ChatMessages extends React.Component {
    render() {
        "use strict";
        let items = this.props.messages.map((message, index) => {
                    return (<li className='chat-message' key={index}>{message}</li>);
                }); 
        return (
            <ul id="ChatMessages">{items}</ul>
        );
    }
}