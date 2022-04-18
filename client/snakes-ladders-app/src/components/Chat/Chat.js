import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

const socket = io.connect('http://localhost:5000');

const Chat = ({ location }) => {
    // declaring name/room
    const [username, setUsername]   = useState=("");
    const [roomname, setRoomname]   = useState("");

    const [message, setMessage]     = useState(""); // empty string for individual message
    const [messages, setMessages]   = useState(""); // array for all messages

    return (
        <div>hi</div>
    );
};

export default Chat;