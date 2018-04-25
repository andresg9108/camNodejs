var oExpress = require('express');
var oApp = oExpress();
var oServer = require('http').Server(oApp);
var oIo = require('socket.io')(oServer);

var oLog = require('log'),
	oLog = new oLog('debug');

var iPort = process.env.PORT || 3001;

oIo.on('connection', function(socket){
	socket.on('stream', function(image){
		socket.broadcast.emit('stream', image);
	});
});

oServer.listen(iPort, function(){
	oLog.info("Puerto: " + iPort);
	console.log("Puerto: " + iPort);
});