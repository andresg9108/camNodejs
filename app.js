var express = require('express');
var app = new express();
var http = require("http").Server(app);
var io = require('ocket.io')(http);

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.listen(port, function(){
	console.log("Puerto: " + port);
});