//Events and Streams
//Another way to use EventEmmiter class. We can have our own object that extends EventEmitter class


//get resource.js module
var resource = require("./resource");

var r = new resource(5);

r.on("start", function(){
    console.log("I have started");
});

r.on("data", function(v) {
    console.log("Data emmited is " + v);
});

r.on("end", function(v) {
    console.log("I am done with emmiting " +  v  + " data");
});
