//Event and Streams
//They are like publish/subscribe model. They act on results as they arrive. We get partial results before an error occurs. 
//Node has a contract class called EventEmmiter
//Require "events"(built-in) package.


var e = require("events").EventEmitter;


//getResource will have an eventEmmiter instance
var getResource = function(c){
    var ee = new e();
    
    process.nextTick(function(){
    var count = 0;
    
    ee.emit("start");
    
    var t = setInterval(function(){
        ee.emit("data", count++);
        if(count === c){
            ee.emit("end", count);
            clearInterval(t);
        }
    }, 10);
    });
    
    return(ee);
};

var r = getResource(5);

r.on("start", function(){
    console.log("I have started");
});

r.on("data", function(v) {
    console.log("Data emmited is " + v);
});

r.on("end", function(v) {
    console.log("I am done with emmiting " +  v  + " data");
});
