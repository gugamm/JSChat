import React from 'react';
import ChatMessages from './ChatMessages.jsx';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

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
        
        this.chatStyle = {
            display: 'inline-block',
            verticalAlign: 'top',
            width: '30%'
        }
    }

    sendMessage() {
        "use strict";
        let content = this._textField.getValue();
        let sio = this.props.io;
        console.log(`Sending message ${content}`);
        sio.emit('chatMessage', content);
        this._textField.clearValue();
    }
    
    render() {
        "use strict";
        return (
          <div id="chat">
              <ChatMessages messages={this.state.messages} />
              <div id="MessageSender" style={this.chatStyle}>
                  <TextField
                      hintText="Type a message"
                      multiLine={true}
                      ref={(textField) => this._textField = textField}
                      />
                  <FlatButton label="Send" onTouchTap={this.sendMessage.bind(this)} />
              </div>
          </div>
        );
    }
}