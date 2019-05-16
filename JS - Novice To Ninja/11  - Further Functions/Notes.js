'use strict';

// FUNCTION PROPERTIES

// LENGTH PROPERTY RETURS NUMBER OF PARAMETERS IN A FUNCTION

function sum(a, b) {
    return a + b;
}

sum.length;         // 2

// CUSTOM PROPERTIES

sum.description = "Sums two numbers";

// MEMOIZATION
// CACHING RESULT OF FUNCTION SO THAT IT CAN BE USED LATER


function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        return (square.cache[x] = x * x);
    } else {
        return square.cache[x];
    }
}

square(2);
square(3);
square(-11);

console.log(square.cache);


// SELF INVOKING FUNCIONS
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(function sayHello() {
    const temp = "Chirag";
    console.log(`Hello ${temp}!`);
})();

// IIFE'S VARIABLES EXIST WHILE IT IS INVOKED AND THEN THEY ARE REMOVED
// THIS WILL THROW AN ERROR
// console.log(temp);

// THIS EFFECT CAN ALSO BE OBTAINED BY PLACING THE CODE IN A BLOCK

// REDEFNIG FUNCTIONS
// A FUNCTION CAN REDFINE ITSELF

function party() {
    console.log("Wow! This is amazing");
    party = function() {
        console.log("Been there, got the T-Shirt");
    }
}


const beachParty = party;

party();
// Wow! This is amazing

party();
// Been there, got the T-Shirt

beachParty();
// Wow! This is amazing

// NOTE THAT REDEFINING A FUNCTION CAUSES ANY CUSTOM PROPERTY TO BE LOST

// INIT-TIME BRANCHING
// IT USES FUNCTION REDEFINITION
// USED IN FEATURE DETECTIONS
// FUNCTION IS CALLED ONE AND IT GETS DEFINED ACCORDING TO THE FEATURE AVAILABLE IN THE BROWSER
// THIS ELIMINATES THE NEED TO BRANCH EVERYTIME THE FUNCTION IS INVOKED

// function ride() {
//     if (unicorn) {
//         ride = function() {
//             console.log("Riding the new Unicorn!!!");
//         }
//     } else {
//         ride = function() {
//             console.log("Riding the plain old pony :(");
//         }
//     }
//     return ride();
// }

// ride();
// Riding the plain old pony :(
// SINCE THE UNICORN FEATURE IS NOT SUPPORTED SO THE FUNCTION REDEFINED ITSELF TO RIDE THE PONY

// RECURSION EXAMPLE
// COLLATZ CONJECTURE
// It involves taking any positive integer and following these rules:
// 1. If the number is even, divide it by two
// 2. If the number is odd, multiply it by three and add one
// if we start with the number 18, we would have the following sequence:
// 18, 9, 28, 14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1
// STOP WHEN THE VALUE BECOMES 1 AND PRINT THE SEQUENCE
// SOLVE USING RECURSION

function collatz(x, sequence = [x]) {
    let ret;
    if (x === 1) {
        return sequence;
    } else if (x % 2 === 0) {
        ret = x / 2;
        return collatz(ret, [...sequence, ret]);
    } else {
        ret = x * 3 + 1;
        return collatz(ret, [...sequence, ret]);
    }
}

console.log(collatz(900));

// CALLBACKS
// CALLBACKS ARE EXECUTED ONLY WHEN THE CURRENT EXECUTION STACK IS COMPLETED
// EXAMPLE

function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

function selfDestruct() {
    console.log("BOOM!!!");
}

wait("This tape will self-destruct in immediately...", selfDestruct, 0);
console.log("Hmm.. Should I take the mission or not...?");


// OUTPUT
// This tape will self-destruct in immediately...
// Hmm.. Should I take the mission or not...?
// BOOM!!!
// STILL THE CALLBACK IS INVOKED AFTER THE CURRENT EXECUTION IS FINISHED.

// PROMISES
/*
    A promise represents the future result of an asynchronous operation. Promises
    don’t do anything that can’t already be achieved using callbacks, but they help
    simplify the process, and avoid the convoluted code that can result from using
    multiple callbacks.
        When a promise is created, it calls an asynchronous operation and is then said to
    be pending. It remains in this state while the operation is taking place. At this
    stage, the promise is said to be unsettled. Once the operation has completed, the
    promise is said to have been settled. A settled promise can result in two different
    outcomes:
            1. Resolved ― the asynchronous operation was completed successfully.
            2. Rejected ― the asynchronous operation didn’t work as expected, wasn’t successfully completed or resulted in an error.
*/
