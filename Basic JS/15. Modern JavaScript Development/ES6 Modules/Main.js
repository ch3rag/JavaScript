// ABOUT MODULES

// All code in modules is always in strict mode without the need for 'use
// strict' and there is no way to opt out of this.

// A module has its own global scope, so any variables created in the top-level of
// a module can only be accessed within that module.

// The value of this in the top level of a module is undefined, rather than the
// global object.

// IMPORTING
// NAME SHOULD BE SAME IN BOTH FILES
import { PI, mean }  from "./Math.js";

// IMPORTING ALL MODULES
// ALL FUNCTION AND FIELDS ARE ACCESSED UNDER myMath ALIAS
import * as myMath from "./Math.js";

// DEFAULT IMPORT
// NO CURLY BRACES NEED
// ALIAS CAN BE ANYTHING
import mySquare from "./Square.js";

console.log(PI);

console.log(mean(1, 2, 4, 5, 6,7));

console.log(myMath.PI);

console.log(mySquare(2));