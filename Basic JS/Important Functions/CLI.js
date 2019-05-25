'use strict';

let line = "";
let currentLine = 0;

process.stdin.resume();
process.stdin.setEncoding("utf8");


process.stdin.on("data", (chunk) => {
    line += chunk;
});

process.on("SIGINT", () => {
    line = line.replace("/\s*$/g", "").split("\r\n").map(str => str.replace("/\s*$/g",""));
    main();   
    process.exit();
});

function readLine() {
    return line[currentLine++];
}

function main() {   
    let inputArray = readLine().split(" ").map(value => Number.parseInt(value, 10));
    let inputInteger =  Number(readLine());

    console.log(inputArray);
    console.log(inputInteger);
}

// NOTES

// Input Output Streams
 
process.stdin;              //Standard Input Stream
process.stdout;             //Standard Output Stream
process.stderr;             //Standard Error Stream

// Console.log == process.stdout

process.stdout.write("Hello, World!\n");

// Console.error == process.stderr

process.stderr.write("An Error Occured!\n");

// process.stdin

// To read data 

process.stdin.on("readable", () => {
    let data = process.stdin.read();
    if(data) {
        process.stdout.write(data);
    }
});

// By default process.stdin is paused, so to resume it we should call

process.stdin.setEncoding("utf8");      //Also set the encoding
process.stdin.resume();

// To stop listing to input stream use

process.stdin.pause();

// Using rawinput instead of buffered input
// This will immediately call "readable" event when user hits a key

process.stdin.setRawMode(true);



