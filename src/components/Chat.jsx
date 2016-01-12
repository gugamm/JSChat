import React from 'react';
import ChatMessages from './ChatMessages.jsx';

export default class Chat extends React.Component {
    constructor(props) {
        "use strict";
        super(props);
        props.io.on('chatResponse', (data) => {
            console.log(`Received chatResponse: ${data}`);
            this.state.messages.push(data);
            this.setState(this.state);
        });
        this.state = {messages : []};
    }

    hSend(target) {
        "use strict";
        let content = document.getElementById('ChatSend').value;
        let sio = this.props.io;
        console.log(`Sending message ${content}`);
        sio.emit('chatMessage', content);
    }

    hChange(target) {
        "use strict";
        this.setState({messages : target.target.value});
    }

    render() {
        "use strict";
        return (
          <div id="chat">
              <ChatMessages id="ChatMessages" messages={this.state.messages} />
              <textarea id="ChatSend"></textarea><input type="button" onClick={this.hSend.bind(this)} value="Send" />
          </div>
        );
    }
}