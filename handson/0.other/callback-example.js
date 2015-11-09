//loading lib for file-system
var fs = require("fs");

//callback code
var callback = function(err, contents){
	console.log(contents.toString());
}
//non-bloking code
fs.readFile("./hello-world.js", callback);
console.log("Do Something else");