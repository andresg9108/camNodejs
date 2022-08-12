const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

app.get('/hello', function(oReq, oRes){
	oRes.status(200).send('<h1>Hello World</h1>');
});

io.on('connection', function(socket){
	socket.on('stream', function(image){
		socket.broadcast.emit('stream', image);
	});
});

server.listen(process.env.PORT_SERVER_TEST, function(){
	console.log(path.join('Port: ', process.env.PORT_SERVER_TEST));
});