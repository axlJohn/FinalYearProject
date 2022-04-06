// 'useState' - built in hook for using state inside of the function based components
import React, { useState } from 'react';
// link is used to actually link to our chat/chat path
import { Link } from "react-router-dom";

// importing css sheet.
// currently needs edited - a later job.
import './Join.css';

export default function SignIn() {
  // name/room values for join page - set to blank for users to enter in what they want
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>{/* Input place holders show default text before user enters theirs
        event listening for user input */}
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>{/*Rules preventing null entries
        Requires both name and room to be entered, can't submit without one or the other */}
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}