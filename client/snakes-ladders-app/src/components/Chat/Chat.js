import React, {useState, useEffect} from 'react';
import queryString from 'query-string';

const Chat = () => {

    // declaring name/room
    const [username, setUsername]   = useState=("");
    const [roomname, setRoomname]   = useState("");

    const [message, setMessage]     = useState(""); // empty string for individual message
    const [messages, setMessages]   = useState(""); // array for all messages

    return (
    <h1>hi</h1>
    )
}

export default Chat;