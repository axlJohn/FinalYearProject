const express = require('express'); // calling in express
const app = express(); // app is an instance of express
const http = require('http'); // all needed to build server with socket.io
const cors = require('cors'); // needed to resolve socket.io's various cors issues
const { Server } = require('socket.io'); // calling in socket.io library
const router = require('./router');

app.use(cors());
app.use(router);

const server = http.createServer(app);

// io variable enabled with cors options to help server handle socket.io
const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000", "http://localhost:3000/*"],
      methods: ["GET", "POST"],
    },
  });



io.on("connection", (socket) => {
    socket.on('join', ({ username, roomname }, callback) => {
        const { error, user } = addUser({ id: socket.id, username, roomname });

        if ( error ) return callback( error );

        socket.emit('message', { user: 'admin', text: '${user.username}, welcome to: ${user.roomname}'});
        console.log('${user.username}, welcome to: ${user.roomname}');
        

    })

    console.log(`User Connected: ` + socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnected: ", socket.id);
    })
})



const PORT = process.env.PORT || 5000 // "use environment port - or port 5000"
server.listen(PORT, () => {
    console.log("Server is running on the port: " + server.address().port); // displays port dynamically
});