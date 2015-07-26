//Events and Streams
//Writable streams

console.log("Is writable ----> "+process.stdout.writable);

process.stdout.write("Hello");
process.stdout.write("World");