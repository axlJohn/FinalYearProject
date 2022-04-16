// express is a minimal and flexible node.js web application framework
const express = require('express');

// socketio is a library that enables low-latency, bidirectional and event-based
// communication between client and server
const socketio = require('socket.io');

// built-in node.js module, allows data transfer over http
// http requests are slow, so not useful for our real time communication
const http = require('http');

// functions taken from users.js
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

// declaring port - "use environment's port OR use 5000"
const PORT = process.env.PORT || 5000

// requires router as require
const router = require('./router');
const { callbackify } = require('util');

// running app from express
const app = express();
// running server
const server = http.createServer(app);
// calling io, passing server into socketio
const io = socketio(server, {
    cors: {
        origin: "localhost:3000",
        // allowedHeaders: ["*"],
        withCredentials: false
    }
});

// keeping track of/reporting when people log in/out
// built-in io methods
io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const {error, user } = addUser({ id: socket.id, name, room });

        // error handling is dynamically coming based on the specific error
        if(error) return callback(error);

        // user sees admin welcome them to room
        socket.emit('message', { user: 'admin', text: '${user.name}, welcome to the room: ${user.room}' });
        // room sees who has joined
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: '${user.name} has joined the room!' });

        // if no errors...
        socket.join(user.room);

        // find all users in room
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})

        callback();
    });


    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        //
        io.to(user.room).emit('message', { user: user.name,text:message});
        //
        io.to(user.room).emit('roomData',  { room:user.room, users: getUsersInRoom(user.room)});



        callback();
    });


    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        // lets chat know user has left
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: '${user.name} has left the chat!'})
        }
    })
})

// passing in our router
app.use(router);

// listening for port, declares server message to indicate port dynamically
server.listen(PORT, () => console.log(`Server has started on the port ${PORT}`));