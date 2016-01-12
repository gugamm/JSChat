import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

export default class ChatMessages extends React.Component {
    
    renderMessage(text) {
        return (
            <div>
                <ListItem
                    primaryText='{USER_NAME}'
                    secondaryText = {text}
                    secondaryTextLines={2}
                    style={{wordWrap: 'break-word'}}/>
                <Divider />
            </div>
        );
    }
    
    render() {
        "use strict";
        let items = this.props.messages.map((message) => {
                    return this.renderMessage(message);
                });
        return (
            <div id="ChatMessages" style={{display: 'inline-block', width: 'calc(70% - 15px)', paddingRight: '15px'}}>
                <List subheader="Messages">
                    {items}
                </List>
            </div>
        );
    }
}
