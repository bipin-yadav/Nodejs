var events = require("events");
var EventEmitter = events.EventEmitter;
// an event listener
emitter.on("foo",function(){});
//add the user the emit an event.
console.log(EventEmitter.listenerCount(emitter,"foo"));

//iterating over event handlers via the listeners() Method.
emitter.on("foo", function(){console.log("in foo method1");});
emitter.on("foo", function(){console.log("in foo method2");});
emitter.on("foo", function(){console.log("in foo method3");});
emitter.listeners("foo").foreach(function(handler){
	handler();
});

//Addning a new event listner
emitter.on("newListener", function(eventname, listner){
	console.log("added listener for "+eventName+"events");
});

//an invalid handler for newListner events ***return error**
emitter.on("newListener",finction(date){
	console.log(gate.getTime());
});
emitter.emit("newListener",new dat());
emitter.on("foo", function(){});

//removing event listener
function handler(){
	console.log("in foo handler");
}
 emitter.on("foo",handler);
 emitter.emit("foo");
 emitter.removeListener("foo",handler);
 console.log("Event lisenter removed.");