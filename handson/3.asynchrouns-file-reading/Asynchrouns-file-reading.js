//Async file read
var fs = require("fs")

//non-bloking code
fs.readFile("foo.txt", "utf8", function(error, data){
	if(error){
		throw error;
	}
	console.log(data)	
});
console.log("Reading File....");