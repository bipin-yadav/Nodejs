//fs module
var fs = require("fs");
//writing to file.
//it create file also if it is not there.
var path = __dirname+"\\write-foo.txt";
var data = "sample text for the demo one.";
fs.writeFile(path, data, function(error){
	if(error){
		console.error("write error: "+error.message);
	}else{
		console.log("data is written successfully to."+path);
	}
});
console.log("Writing to the file...");

var appendData = "another sample text for the demo one.";
fs.appendFile(path, appendData, function(error){
	if(error){
		console.error("write error: "+error.message);
	}else{
		console.log("data is appended successfully to."+path);
	}
});
console.log("Appending to the file...");