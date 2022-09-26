const express = require('express')
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection', function (socket) {
    console.log("New User Connected");

    // setTimeout(function () {
    //     socket.send("Socket send this data (Server --------> Client)")
    // }, 3000)

    // setInterval(function () {
    //     let d = new Date();
    //     let t = d.toString('YYYY-MM-dd');
    //     socket.send(t)
    // }, 500)

    // // Custom Event 
    // setTimeout(function () {
    //     socket.emit("MyEvent", "This my custom Event")
    // }, 3000)

    // socket.on('disconnect', function () {
    //     console.log("User Disconnect");
    // })

    socket.on('message', function (msg) {
        console.log(msg);
    })
})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


expressServer.listen(3008, function () {
    console.log("Server run On 3008 Port")
})