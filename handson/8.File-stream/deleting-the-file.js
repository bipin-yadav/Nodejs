//fs module
var fs = require("fs");
//deleting file.
var path = __dirname+"\\write-foo.txt";
fs.unlink(path, function(error){
	if(error){
		console.error("unlink error: "+error.message);
	}else{
		console.log("file deleted.");
	}
});
console.log("deleting the file...");