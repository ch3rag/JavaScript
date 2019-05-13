/*jslint devel: true*/
/*jslint es6*/


// TURN JSLINT DEVELOPMENT MODE ON

'use strict';


// STRICT MODE IS ALWAYS RECOMMENDED

// STRICT MODE CAN BE USED PER FUNCTION BASIS


function strictFunction() {
    'use strict';
    a = 1.5;        // THROWS ERROR
}

// STACK TRACES

function three() {
    console.trace();     // PRINT STACK TRACE
    debugger;            // CREATES A BREAKPOINT
    unicorn();           // MYTHICAL FUNCTION
}

function two() {
    three();
}

function one() {
    two();
}

// one();
// NOTE: <anonymous> is the file name here.

// VM188:11 Uncaught ReferenceError: unicorn is not defined
//     at three (<anonymous>:11:5)
//     at two (<anonymous>:7:5)
//     at one (<anonymous>:3:5)
//     at <anonymous>:14:1

// window.alert() can be used set breakpoints in the program.
// As it suspends the program execution until OK is clicked

// DEBUGGER KEYWORD

function amIOldEnough(age) {
    debugger;
    if (age < 12) {
        debugger;
        return 'No, sorry.';
    } else if (age < 18) {
        debugger;
        return 'Only if you are accompanied by an adult.';
    } else {
        debugger;
        return 'Yep, come on in!';
    }
}

// console.log(amIOldEnough(12));

// ERROR OBJECTS

const error = new Error();
// OR
const ageNotEnough = new Error("Age Must Be Greater Then 18 Years.");


// EvalError
// is not used in the current ECMAScript specification and only
// retained for backwards compatibility. It was used to identify errors when
// using the global eval() function.

// RangeError
// is thrown when a number is outside an allowable range of values.

// ReferenceError
// is thrown when a reference is made to an item that doesn’t
// exist. For example, calling a function that hasn’t been defined.

// SyntaxError
// is thrown when there’s an error in the code’s syntax.

// TypeError
// is thrown when there’s an error in the type of value used; for
// example, a string is used when a number is expected.

// URIError
// is thrown when there’s a problem encoding or decoding the URI.

// InternalError
//  is a non-standard error that is thrown when an error occurs in
// the JavaScript engine. A common cause of this too much recursion.

// THESE ERROR TYPES CAN BE USED TO GENRATE CUSTOM ERRORS

const myReferenceError = new ReferenceError("Object not found!");

// ERROR PROPERTIES
myReferenceError.name;
// "ReferenceError"

myReferenceError.message;
// "Object not found!"

myReferenceError.stack;
// "ReferenceError: Object not found!
//     at Object.<anonymous> (d:\Study\Github\JavaScript\javascript\JS - Novice To Ninja\10 - Testing&Debugging\Notes.js:101:26)
//     at Module._compile (internal/modules/cjs/loader.js:685:14)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
//     at Module.load (internal/modules/cjs/loader.js:598:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:529:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
//     at startup (internal/bootstrap/node.js:285:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)"
