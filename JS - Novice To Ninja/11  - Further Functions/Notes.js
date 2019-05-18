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
// ELEGANT WAY TO CHAIN ASYNCHRONOUS FUNCTIONS
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

// CREATING PROMISES

const promise = new Promise((resolve, reject) => {
    // INITIALIZATION CODE GOES HERE
    if(success) {
        resolve(value);
    } else {
        reject(error);
    }
});

// HIGHER ORDER FUNCITONS

function greet(greeting) {
    return function() {
        console.log(greeting);
    }
}

const greetEnglish = greet("Hello!");
const greetHindi = greet("Namaste!");


// CLOSURES
// A closure is formed when the inner function is returned by the outer function,
// maintaining access to any variables declared inside the enclosing function

function counter() {
    let i = 0;
    return function() {
        console.log("Value Of i is: " + i);
        i = i + 1;
    }
}

let myCounter = counter();
myCounter();
// Value Of i is: 0
myCounter();
// Value Of i is: 1


function getFahrenhieter() {
    let a = 1.8;
    let b = 32;
    return c => c * a + b;

    // OR
    // return function(c) {
    //     return c * a + b;
    // }
}

const myFahrenhiet = getFahrenhieter();
myFahrenhiet(40);
// 104

// GENERATORS
// ES6 introduced support for generators. These are special functions used to
// produce iterators that maintain the state of a value.
// To define a generator function, an asterisk symbol (*) is placed after the function declaration

function * exampleGenerator() {
    // CODE
}

// Calling a generator function doesn’t actually run any of the code in the function;
// it returns a Generator object that can be used to create an iterator that
// implements a next() method that returns a value every time the next() method
// is call

// FIBONACCI GENERATOR

function * fib(a, b) {
    let [prev, current] = [a, b];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

const fibGenerator = fib(1, 1);

fibGenerator.next();
// 2
fibGenerator.next();
// 3


for(let val of fibGenerator) {
    console.log(val);
    if(val > 100) {
        break;
    }
}

// DOUBLE PARANS

function getExp(x) {
    return function(y) {
            return Math.pow(x, y);
    }
} 

const twoExp = getExp(2);
twoExp(5);
// 32

getExp(3)(4)
// 81

// CURRYING
// A function is said to be curried when not all arguments have been supplied to the
// function, so it returns another function that retains the arguments already
// provided, and expects the remaining arguments that were omitted when the
// original function was called. A final result is only returned once all the expected
// arguments have eventually been provided.

function multiplier(x, y) {
    if(y === undefined) {
        return function(z) {
            return x * z;
        }
    } else {
        return x * y;
    }
}

multiplier(5, 7);
// 35

const doubler = multiplier(2);
doubler(4);
// 8

// GENERIC CURRY FUNCTION

function curry(func, ...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs, ...newArgs];
        return func(... allArgs);
    }
}

// CURRYING MULTIPLIER
const multiplier = (x, y) => x * y;

const doubler = curry(multiplier, 2);

doubler(37);
// 74

const divider = (x, y) => x / y;

const  reprocal = curry(divider, 1);

reprocal(3);
// 0.33333333333333333
