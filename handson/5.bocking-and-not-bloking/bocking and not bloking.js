//lib for file-system
var fs = require("fs")

//bloking code
var contents = fs.readFileSync("./hello-world.js").toString();
console.log(contents);
console.log("Do Something else");

//non-bloking code
fs.readFile("./hello-world.js", function(err, contents){
	console.log(contents)
});
console.log("Do Something else");