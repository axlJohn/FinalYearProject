// Pulling in 'hooks' from react, used for real-time information.
// https://www.youtube.com/watch?v=-9M9CGSd69I&t=1936s&ab_channel=JavaScriptMastery
import React, {useState, useEffect} from 'react';

// idk yet
import queryString from 'query-string';

// Socket is used for communication between machines, necessary for two users to chat with each other over this app.
import io from 'socket.io-client';


const Chat = () => {
    return (
        <h1>Chat</h1>
    )
}

export default Chat;