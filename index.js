'use strict';
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let messages = [];

io.on('connection', function(socket){
    console.log('A user has been connected!');
    io.emit('totalMessages', {totalMessages: messages})


    socket.on('send-message', (msg) => {
        console.log('Message recieved!', msg);
        messages.push(msg)
        io.emit('totalMessages', {totalMessages: messages})
    })
})

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

http.listen(3000, function(){
    console.log(`http://localhost:3000`)
});

