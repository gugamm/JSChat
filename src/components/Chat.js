import React from 'react';

export default class extends React.Component {
    constructor(props) {
        "use strict";
        super(props);
        this.state = {messages : "Hello\n My Name is Elder Prince"};
    }

    hSend(target) {
        "use strict";
        alert('clicked');
    }

    hChange(target) {
        "use strict";
        this.setState({messages : target.target.value});
    }

    render() {
        "use strict";
        return (
          <div id="chat">
              <textarea id="cMessages" value={this.state.messages} readOnly></textarea>
              <textarea id="cSend"></textarea><input type="button" onClick={this.hSend.bind(this)} value="SEND" />
          </div>
        );
    }
}