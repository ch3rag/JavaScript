// Creating An Array

const myArray = [];
const myArray = new Array();

// Arrays itself are objects

typeof [];          //object

// Arrays can be heterogeneous

const myArray = [null, 1, "true", true, []];

// Deleting Values From An Array
// Deleted values are replaced by undefined
delete(myArray[2]);

// Array Destructuring
// This feature allows us to unpack values from arrays or properties from an object into distinct variables

// Swapping

let [x, y] = [1, 2];        //x = 1, y = 2
[x, y] = [y, x];            //x = 2, y = 1

// Variable Assignment

let foo = ["one", "two", "three"];
let [one, two, three] = foo;            //one = "one", two = "two", three = "three"

// Assigning Default values if unpacked array has undefined values

let [a = 3, b = 7] = [1];               //a = 1, b = 7

// Parsing Array Retured from a function

function returnArray() {
    return [1,2];
}

let [a, b] = returnArray();             //a = 1, b = 2 

// Ignoring some values returned by a function

function returnArray() {
    return [1, 2, 3];
}

let [a, ,b] = returnArray();            //a = 1, b = 3

// Assigning the rest of array an array to other variable

function returnArray() {
    return [1, 2, 3];
}

let [a, ...b] = returnArray();          //a = 1, b = [2, 3]

// Object Destructuring

// Basic Assignment
// Note that variable and corresponding property names must match

let myObject = {a: 1, b: 2};
let {a, b} = myObject;                  //a = 1, b = 2

// Assignment without declaration

let a, b;
// Paranthesis are required otherwise {a, b} will be treated as a block
({a, b} = {a: 1, b: 2});                //a = 1, b = 2

// Default Values

let {a = 2, b = 3} = {a: 3, c: 4};      //a = 3, b = 3

// Assigning a new Variable name and providing default values

let {a: aa = 3, b: bb = 3} = {a: 4};    //a = undefined, aa = 4, b = undefined, bb = 3

// Function Parameter default values

function drawCircle({fill = false, coords = {x: 0, y: 0}, radius = 10} = {}) {
    console.log(fill, coords, radius);
    // Do some drawing stuff
}

// The Empty Object On RHS is required if you want function to be executed without passing any parameters

drawCircle({                            //fill = false, coords = {x: 100, y: 120}, radius = 150
    coords: {x: 100, y: 120},
    radius: 150
});

// For Of Iteration Using Destructuring

let peoples = [
    {
        name: "Chirag",
        address: {
            city: "Lucknow",
            state: "UP"
        },
        age: 20,
    },
    {
        name: "Bharat",
        address: {
            city: "Orai",
            state: "U.P"
        },
        age: 20
    }
];

for(let {name: n, address: {city: c}, age: a} of peoples) {
    console.log(n, c, a);                                   // Chirag Lucknow 20, Bharat Orai 20
}

// Similarly Unpacking Objects Passed into Funciton

function whatsMyName({name}) {
    console.log(name);
}

function whereILive({address: {city: c, state: s}}) {
    console.log(c, s);
}
whatsMyName(peoples[0]);                                    //Chirag
whereILive(peoples[0]);                                     //Lucknow UP

// Computed object property names and destructuring

let key = "z";
let {[key]: foo} = {z: "bar"};                              //foo = "bar"

// Rest in Object Destructuring

let {a, b, ...c} = {a: 1, b: 2, c: 3, d: 4};                //a = 1, b = 2, c = {c: 3, d: 4}

// Array Property/Methods

let myArray = [1, 2, 3, 4, 5];

myArray.length;                 //5 - Returns Length of array

// This Property is "Mutable"
myArray.length = 6;             //Add undefined item at the end of array
myArray.length = 4;             //Removes 2 items from the end of array

myArray.pop();                  //Removes last item from the array
myArray.shift();                //Removes First item from the array
myArray.push(6);                //Appends 6 at the end of the array and returns new length of the array
myArray.unshift(0);             //Appends 0 at the beginning of the array and returns new length of the array
myArray.concat([7, 8], [9]);    //Merges one or more array and returns new array without altering the old one

// This can also achieved by spread operator
myArray = [ ...myArray, ...[10, 11]]

myArray.join();                 //Returns a string containing all elements seperated by commas
myArray.join("&");              //Returns a string containing all elements seperated by &





