var request = require("request");
var fs = require("fs");

var s = request("http://www.pluralsight.com/");


// 1. Here u write it onto standard output 
//html returned from the request is piped into the standard out
//s.pipe(process.stdout);

// 2. combining above two lines of code
//request("http://www.pluralsight.com/").pipe(process.stdout);

//3. Here you are piping readable stream to a writable stream directly
//'fs' is a built-in node module. 'fs' is file stream. 
//The function, fs.createWriteStream("pluralsight.html") -- This function on fs module returns a  stream that can write data onto pluralsight.html
request("http://www.pluralsight.com/").pipe(fs.createWriteStream("pluralsight.html"));