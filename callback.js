var maxTime = 1000;

var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random() * (maxTime +1));
    if(v%2)
        setTimeout(callback(new Error("Error output"), waitTime), waitTime);
    else
        setTimeout(callback(null, v*2, waitTime), waitTime);
    
};

var handleResults = function(error, results, time){
    if(error)
    console.log("Error output");
    else
    console.log("Result is "+ results + " in time "+ time + "s");
};

evenDoubler(2, handleResults);
evenDoubler(3, handleResults);



