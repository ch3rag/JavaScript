const fs = require("fs");
const util = require("util");

// CONSOLE
// The console module provides a simple debugging console that is similar to the JavaScript 
// console mechanism provided by web browsers.

// The module exports two specific components:

// 1. A Console class with methods such as console.log(), console.error() and console.warn() that 
// can be used to write to any Node.js stream.

// 2. A global console instance configured to write to process.stdout and process.stderr. The 
// global console can be used without calling require('console').

// GLOBAL CONSOLE INSTANCE
console.log("Hello World!");

let name = "Chirag";
console.log("Hello %s", name);

console.error(new Error("Somthing Bad Happend!"));

console.warn("Low Memory!!");

// CONSOLE CLASS
// CREATING CUSTOM CONSOLES FOR NODE WRITABLE STREAMS
// CAN BE ACCESSED VIA console.Console OR require("console").Console

const Console = require("console").Console;

// CREATE A FILE OUTPUT STREAM TO DEMONSTRATE

const logStream = fs.createWriteStream("./log.txt");
const errorStream  = fs.createWriteStream("./errors.txt");

const myConsole = new Console(logStream, errorStream);

// LOG INFO TO FILES
myConsole.log("Hello!!!");

myConsole.error(new Error("This is BAD!"));

// OTHER FUNCTION
console.clear();            // CLEAR CONSOLE (ONLY TERMINAL)

console.count("myLabel");   // myLabel: 1
console.count("myLabel");   // myLabel: 2
console.count("myLabel");   // myLabel: 3

// RESET COUNTER
console.countReset("myLabel");

// console.debug("Hey")     ALIAS FOR CONSOLE.LOG

// console.dir()            INSPECTS OBJECT USING util.inspect() AND OUTPUTS IT TO THE CONSOLE

let myObject = {
    "Name": "Chirag",
    "Age": 20,
    "Interests": ["Cricket", "Drawing", "Video Games"]
}
console.dir(myObject);

// console.dirxml();        Displays an interactive tree of the descendant elements of the specified XML/HTML element.

// console.group();         USED TO INDENT TO THE LOG MESSAGES (GROUPING THEM TOGETHER)
// console.groupEnd();      UNINDENT LOG MESSAGES
// console.groupCollapsed() SAME AS groupEnd()

console.log("Group Start")
console.group();
console.groupCollapsed
console.log("Level 1");
console.group();
console.log("Level 2");
console.groupEnd();
console.log("Level 1")
console.groupEnd();
console.log("Group End");

// console.table()          LOGS DATA IN TABULAR FORMAT

console.table([{a: 10, b: 20}, {a: "x", b: "y"}]);

// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │ 10  │ 20  │
// │    1    │ 'x' │ 'y' │
// └─────────┴─────┴─────┘

// console.time(label)              STARTS THE TIMER ASSOCIATED TO THE OPTIONAL LABEL
// console.time(timelog)            PRINTS THE TIME ELAPSED FOR THE PREVIOUSLY CREATED TIMER
// console.timeEnd(label)           ENDS THE TIMER ASSOCIATED TO THE OPTIONAL LABEL AND LOGS TIME ELAPSED

//console.time("test")
///setTimeout(() => console.timeEnd("test"), 1000);    // ~ 1000ms
//console.timeLog("test");

// console.trace(message)           LOGS OUT STACK TRACE FOR CURRENT LOCATION

// INSPECTOR ONLY
// The following methods are exposed by the V8 engine in the general API but do not display anything 
// unless used in conjunction with the inspector (--inspect flag).
// node --inspect Console.js

// console.markTimeline()           == console.timeStamp()
// console.timeline()               == console.time()
// console.timelineEnd()            == console.timeEnd()
// console.timeStamp()              // ADDS EVENT TO TIMELINE

console.timeline("test");
console.timeStamp("test");
console.timelineEnd("test");




