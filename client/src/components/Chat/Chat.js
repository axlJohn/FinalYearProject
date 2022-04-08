// Pulling in 'hooks' from react, used for real-time information.
import React, {useState, useEffect} from 'react';
// Helps with retrieving data from URL
import queryString from 'query-string';
// Socket is used for communication between machines, necessary for two users to chat with each other over this app.
// io used for real time communication between client/server
import io from 'socket.io-client';

// data will be passed inside this variable
let socket;

// use effect is a hook that lets you use lifecycle methods or side effects in function components
const Chat = ({ location }) => {
    // declaring name/room in our chat component
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    // endpoint to server. stored here for cleanness of code.
    const ENDPOINT = 'localhost:5000';


    useEffect(() => {
        // location comes from react router. allows us to get a url back
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        // socket 'emitting' the join event
        socket.emit('join', {name, room}, () => {

        });
    
        return() => {
            // announces when user leaves
            socket.emit('disconnect');
            // switches socket off
            socket.off();
        }
    }, [ENDPOINT, location.search])

    return (
        <h1>Chat</h1>
    )
}

export default Chat;