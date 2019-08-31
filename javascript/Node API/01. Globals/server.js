/*
// GLOBALS
// These objects are available in all modules. The following variables may appear to be global but are 
// not. They exist only in the scope of modules.

__dirname       // ABSOLUTE DIRECTORY PATH OF CURRENT SCRIPT
__filename      // ABSOULTE FILE PATH OF CURRENT SCRIPT
module          // REFERENCE TO CURRENT MODULE
exports         // REFERENCE TO module.exports
Buffer          // BUFFER CLASS TO DEAL WITH BINARY DATA DIRECTY
console         // CONSOLE CLASS TO HANDLE CONSOLE OUTPUT
global          // GLOBAL NAMESPACE OBJECT
process         //  The process object is a global that provides information about, and control over, the current Node.js process

// CONSOLE
console.log()                   // LOGGING
console.table()                 // PRINT DATA IN TABULAR FORMAT
console.info()                  
console.warn()  
console.dir()                   // PROPERTIES OF OBJECT
console.time("label")           // STARTS A TIMER
console.timeEnd("label")        // STOPS THE TIME AND PRINTS OUT THE TIME TAKEN
console.trace();                // PRINT STACK TRACE AT CURRENT POSITION
console.assert(2 % 2 == 0, "message");

// MODULE
const myMod = require("./myModule.js");     // LOADS A MODULE
myMod.require("./anothorModule.js");        // LOADS anotherModule.js AS IF IT WAS CALLED MY myModule

*/

var myMod = require("./myModule.js");
debugger;
