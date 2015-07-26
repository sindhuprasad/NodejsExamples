//Events and Streams
//Here you are creating your EventEmitter class/object "Resource" by inheriting EventEmitter class


//include packages that are necessary
var util = require("util");
var EventEmitter = require("events").EventEmitter;

//Define your object/class "Resource"
var Resource = function(c){
    var count = 0;
    var self = this;
    
    process.nextTick(function(){
    var count = 0;
    
    self.emit("start");
    
    var t = setInterval(function(){
        self.emit("data", count++);
        if(count === c){
            self.emit("end", count);
            clearInterval(t);
        }
    }, 10);
    });
};

//inherit "EventEmitter" class to your object "Resource" using util package 
//inherits(constructor, superConstructor) 
util.inherits(Resource, EventEmitter);

//to make your object available to external world
module.exports = Resource;

