// express is a minimal and flexible node.js web application framework
const express = require('express');

// socketio is a library that enables low-latency, bidirectional and event-based
// communication between client and server
const socketio = require('socket.io');

// built-in node.js module, allows data transfer over http
// http requests are slow, so not useful for our real time communication
const http = require('http');

// declaring port - "use environment's port OR use 5000"
const PORT = process.env.PORT || 5000

// requires router as require
const router = require('./router');

// running app from express
const app = express();
// running server
const server = http.createServer(app);
// calling io, passing server into socketio
const io = socketio(server);

// keeping track of/reporting when people log in/out
// built-in io methods
io.on('connection', (socket) => {
    console.log("There's a new connection being made!");

    socket.on('disconnect', () => {
        console.log("A user has just disconnected!");
    })
})

// passing in our router
app.use(router);

// listening for port, declares server message to indicate port dynamically
server.listen(PORT, () => console.log(`Server has started on the port ${PORT}`));