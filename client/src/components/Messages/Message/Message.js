import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

// message is an object that holds user and text
const Message = ({ message: { user, text }, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    // this logic dictates the visible differences between messages sent by
    // current user or a different user
    return (
        isSentByCurrentUser
         ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
         )
         : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
         )
    )
}


export default Message;