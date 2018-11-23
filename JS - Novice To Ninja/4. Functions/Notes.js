/*
In JavaScript, functions are considered to be first-class objects. This means they
behave in the same way as all the other primitive data types and objects in the
language. They can be be assigned to variables, stored in arrays and can even be
returned by another functions.
*/

// Defining a function

function sayHello() {
    console.log("Hello!");
}


// Function can also be created using constructor Function("<Function Body>")
// Though it is not recommmeded.
// These funtions are globally scoped

const hello = new Function(`console.log("Hello");`);

// Funtion Expression
// Assigning an anonymous function to a variable

const hello = function() {
    console.log("Hello!");
};

// Assigning a named function to a variable

const hello = function sayHello() {
    console.log("Hello!");
};

// All function have a property 'name' that returns the name of the function

sayHello.name                   //'sayHello'
hello.name                      //'anonymous'

// Variable Number Arguments

function mean(...args) {
    let sum = 0;
    for(const value of args) {
        sum += value;
    }
    sum /= args.length;
    return sum;
}

// Also function have 'arguments' object that have access to all arguments passed

function argTest() {
    console.log(arguments);
}

argTest("Hello", "World", 3.14, false);         //{ '0': 'Hello', '1': 'World', '2': 3.14, '3': false }

function mean() {
    let sum = 0;
    for(const value of arguments) {
        sum += value;
    }
    sum /= arguments.length;
    return sum;
}

// Default Parameters

function sayHello(name = "World!") {
    console.log(`Hello, ${name}`);
}

// Arrow Function

const square = x => x * x;

const add = (x, y) => x + y;

const sayHello = () => console.log("Hello!");

const mean = (...nums) => {
    let sum = 0;
    for(const value of nums) {
        sum += value;
    }
    sum /= nums.length;
    return sum;
}

// Callbacks
// A function that is passed as an argument to another function is known as a callback.

function sing(song, callback) {
    console.log(`I am singing, ${song}`);
    callback();
}

function dance() {
    console.log("Now I am dancing");
}

sing("Lalala", dance);      
// I am singinh Lalala
// Now I am  dancing

sing("Lalala", () => {
    console.log("I'm sleeping");
});
// I am singinh Lalala
// I'm sleeping

// Sorting Arrays Using comparator as a callback to sort()

let myArray = [1, 10, 20 , 110, 250, 2, 221];
myArray.sort();                                 //[ 1, 10, 110, 2, 20, 221, 250 ]

myArray.sort((a, b) => {                        //[ 1, 2, 10, 20, 110, 221, 250 ]
    return a - b;
});

// Array Iterators
// forEach()
/* The callback function takes three parameters, the first represents the value in the array, the
/  second represents the current index and the third represent the array that the callback is being called on */

myArray.forEach((value, index) => {
    console.log(`Value at index ${index} is ${value}.`);
});

// map()
// map is used to map a function over a set a values and return a new set of values

myArray.map(value => value * value);            //[ 1, 4, 100, 400, 12100, 48841, 62500 ]

// mapping is useful to process the data comming from the database such as adding HTML tags

["red", "green", "blue"].map(value => {         //[ '<p>RED</p><br>', '<p>GREEN</p><br>', '<p>BLUE</p><br>' ]
    return `<p>${value.toUpperCase()}</p><br>`;
});

// reduce()
// The reduce() method is another method that iterates over each value in the array, but this time it cumulatively combines each result to return just a single value
// The first parameter to callback represent the value accumulated so far and the second represents the current value

myArray.reduce((accum, value) => accum + value);            //614
myArray.reduce((accum, value) => accum + value, 100);       //Passing 100 as initial value of accumulator

// Example => Counting number of letter in a sentence

const sentence = "MY NAME IS CHIRAG SINGH RAJPUT";
const senAr    = sentence.split(" ");
const totalLetters = senAr.reduce((accum, word) => accum + word.length, 0);

// We can also find average word length

const avgLen = totalLetters / senAr.length;

// Filter
// The filter() method returns a new array that only contains items from the
// original array that return true when passed to the callback.

const filterOddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
filterOddNumbers.filter(x => x % 2 === 0);                  //[ 2, 4, 6, 8, 0 ]

// This function can be used to filter out all falsy values

const filterFalsy = [false, true, 0, 1, undefined, null, NaN, null, -1, "x", {}, []];
filterFalsy.filter(Boolean);                                //[ true, 1, -1, 'x', {}, [] ] OR
filterFalsy.filter(x => !!x);                               
filterFalsy.filter(x => !x);                                // ALL FALSY VALUES        

// find()
// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

const myArray = [1, 2, 3, 15, 32, 22, 121];

myArray.find(x => x > 10);                                  //15

// reduceRight()
// Similar to reduce() but reduces array from right to left
// Example

const tempAr = ["H", "E", "L", "L", "O"];

tempAr.reduce((accum, value) => accum + value);             //HELLO
tempAr.reduceRight((accum, value) => accum + value);        //OLLEH

// every()
// The every() method checks if all elements in an array pass a test

let evenAr = [2, 4, 6, 8, 10];
evenAr.every(x => x % 2 === 0);                             //True

evenAr.push(3);
evenAr.every(x => x % 2 === 0);                             //False

// every()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.

let evenAr = [2, 4, 6, 8, 10];
evenAr.some(x => x % 2 !== 0);                              //False

// Chaining Iterators Together
// Example => Calculating sum of squares

const myArray = [1, 2, 3, 4, 5];

myArray.map(x => x * x).reduce((acc, value) => acc + value);    //55





