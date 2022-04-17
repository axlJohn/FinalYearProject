const express = require('express'); // creating express server
const app = express(); // instance of express library, used to create server
const http = require('http'); // socket.io is created upon an http server, recommended by socket.io documentation
const { Server} = require('socket.io'); // socket.io
const cors = require('cors'); // calling in cors library

app.use(cors()); // telling app to make use of cors

const server = http.createServer(app); // creating server

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
}); // new instance of server class, server var passed in - cors details handled within

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`User Disconnected: ${socket.id}`);
    });

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data);
    });
});



const PORT = process.env.PORT || 5000 // declaring port - "use environment port OR use 5000"

server.listen(PORT, () => {
    console.log("Server is running on the port: " + server.address().port); // displays port dynamically
});