//fs module
var fs = require("fs");
var path ="hello-world.js";
var existsSync = fs.existsSync(path);
fs.exists(path, function(exists){
	if(exists !== existsSync){
		console.error("something is wrong!");
	}else{
		console.log(path + " exists " + exists);		
		}
});
//retreiving file statistics.
//var path = "hello-world.js";
fs.stat(path, function(error, stats){
	if(error){
		console.error("something went wrong.");
	}else{
		console.log(stats);		
		}
})