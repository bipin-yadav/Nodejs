var events = require("events");
var emitter = new events.EventEmitter();
var username = "bipin";
var password = "password";
//If we want to handle the event only one time.
//e.g. 1.single-sign-on if we move from one application to another //application.
//     2.on click on button we want to disable
// one time event listener
emitter.once("foo",function(){
	console.log("Added user");
});
//add the user the emit an event.
emitter.emit("foo");
emitter.emit("foo");
