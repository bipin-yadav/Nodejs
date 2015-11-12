var express = require('express');
var app = express();
app.get('/',function(request, response){
	response.send('hjknkljd');
});
app.listen(8080);