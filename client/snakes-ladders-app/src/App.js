import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:5000');

// const App = () => {
//   return (
//     <Router>
//         <Route path="/" component = { Join }/>
//         <Route path="/chat" component = { Chat }/>
//     </Router>
//   )
// }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component = { Join }/>
        <Route path="/chat" component = { Chat }/>
      </Switch>
    </Router>
  )
}


export default App;