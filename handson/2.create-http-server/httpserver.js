//lolad the http module to create the http server
var http = require("http");
//configure the server to respond hello world to all the http request.
var server = http.createServer(function(request, response){
		response.writeHead(200,{"Content-Type":"text/plain"})
		response.end("Hello Bipin")
	});
//Listen on the port 3737
server.listen(3737);
//give friendly message here.
console.log("Server is running at localhost:3737");