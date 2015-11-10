//socket-server
var http = require("http");
var connect = require("connect");
var socketio = require("socket.io");
var app = connect();
var serverStatic = require("server-static");
var server;
var io;
app.use(serverStatic(__dirname));
server = http.createServer(app);
io = scoketio.listen(server);
io.on("connection", function(socket){
	socket.on("message", function(data){
		console.log("msg from cleint..."+data);
	socket.emit("echo", data);
	});	
});
server.listen(8000);