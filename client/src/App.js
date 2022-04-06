import React from 'react';

// calling in web pages found in components directory.
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

// App page consists of paths for the websites that link to the components in components directory
// "Join" is home page
// "Chat" is main function page, chatroom etc
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
