import React from 'react';

// will keep chat scrollingd own to bottom/most current message automatically
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name}) => (
    <ScrollToBottom>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
)


export default Messages;