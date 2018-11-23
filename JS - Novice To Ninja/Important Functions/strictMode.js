'use strict';
// A demonstration of Strict Mode
// Declare variable before using

//x = 10;         //This will throw an error
let x = 10;       //This is acceptable

let obj = {};

//creating a propertry that is not writable
Object.defineProperty(obj, "x", {
    value: 2,
    writable: false
});

obj.x = 20;             //This will throw an error

delete obj;             //deleting objects/variables not allowed

with (obj) {            //with is not allowed in strict mode
    y = 30;
}