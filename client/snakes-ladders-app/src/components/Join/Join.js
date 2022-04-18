import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; // handling routing to main page


const Join = () => {
    const [username, setUsername] = useState(""); // state that represents username
    const [roomname, setRoomname] = useState(""); // state that represents room

    return (
        <div>
            <h3>Join a Chat</h3>

            <input type="text" placeholder="Enter Your Name" 
            onChange={(event) => {
                setUsername(event.target.value);
            }}/>

            <input type="text" placeholder="Enter Room ID"
            onChange={(event) => {
                setRoomname(event.target.value);
            }}/>

            {/* If user doesn't specify a username and roomname, do nothing */}
            <Link onClick={event => (!username || !roomname) ? event.preventDefault() : null} to={`/chat?name=${username}&room=${roomname}`}>
                <button className={'button mt-20'} type="submit">Sign In</button>
            </Link>
            
        </div>
    );
};

export default Join;