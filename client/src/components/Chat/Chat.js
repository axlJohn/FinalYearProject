// Pulling in 'hooks' from react, used for real-time information.
import React, {useState, useEffect} from 'react';
// Helps with retrieving data from URL
import queryString from 'query-string';
// Socket is used for communication between machines, necessary for two users to chat with each other over this app.
// io used for real time communication between client/server
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';


// data will be passed inside this variable
let socket;



// use effect is a hook that lets you use lifecycle methods or side effects in function components
const Chat = ({ location }) => {
    // declaring name/room in our chat component
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    // empty string for individual message
    const [message, setMessage] = useState('');
    // array for all messages
    const [messages, setMessages] = useState([]);

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
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            // every new message sent by admin or anyone else sent to messages array
            setMessages([...messages, message]);
        })
    }, [messages]); // only run when messages goes through any changes

    // function for sending messages
    const sendMessage = (event) => {
        // prevents default behaviour of key press refreshing page
        event.preventDefault();

        // sendMessage in index.js server-side is listening for this
        if(message) {
            socket.emit('sendMessage', message, () => setMessage('')); // return message to blank
        }
    }


    return (
        <div className="outerContainer">
          <div className="container">
              {/* holds info bar */}
              <InfoBar room={room} />
              <Messages messages={messages} name={name}/>
              {/* holds send message details */}
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        </div>
      );
}

export default Chat;