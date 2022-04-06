import React from 'react';
import ReactDOM from 'react-dom';

// Calling in page in "App.js"
import App from './App';

// Passing in "App.js" page to the div=id 'root' in public/index.html
ReactDOM.render(<App />, document.getElementById('root'));