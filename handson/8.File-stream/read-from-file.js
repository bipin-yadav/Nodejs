//fs module
var fs = require("fs");
//reading from file.
var path = __dirname+"\\foo.txt";
fs.readFile(path, "utf8", function(error, data){
	if(error){
		console.error("read error: "+error.message);
	}else{
		console.log(data);
	}
});
console.log("Reading from the file...");