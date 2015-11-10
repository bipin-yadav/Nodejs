//fs module
var fs = require("fs");
//renaming from file.
var oldPath = __dirname+"\\foo.txt";
var newPath = __dirname+"\\bar.txt";
fs.rename(oldPath, newPath, function(error){
	if(error){
		console.error("read error: "+error.message);
	}else{
		console.log("renamed");
	}
});
console.log("renaming the file...");