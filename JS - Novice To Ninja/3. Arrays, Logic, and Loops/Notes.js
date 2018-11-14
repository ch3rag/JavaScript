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
myArray.reverse();              //Reverses an Array
myArray.sort();                 //Sorts an array

//Note: Sort() sorts an array alphabetically therefore even numbers are sorted alphabetically
// This means all the number containing "1" as thier last first digit are place first and so on.
// myArray = [6, 7, 8, 9, 10, 67] ==> [10, 6, 67, 7, 8, 9]

// This can also achieved by spread operator
myArray = [ ...myArray, ...[10, 11]]

myArray.join();                 //Returns a string containing all elements seperated by commas
myArray.toString();             //Returns a string containing all elements seperated by commas
myArray.join("&");              //Returns a string containing all elements seperated by &

// Slicing an Array
// array.slice(startIndex, endIndex)
// Returns a new array containing elements from startIndex to endIndex - 1
 
let myArray = [1, 2, 3, 4, 5];
myArray.slice(2);               //[3, 4, 5]
myArray.slice(2, 4);            //[3, 4]

// Splicing an Array
// array.splice(startIndex, Items to be removed, replace by);
// Splice method removes items from an Array and inserts new Items at their place

myArray.splice(2);              //Removes all items from index 2 to end
                                //Returns [3, 4, 5] and myArray = [1, 2]
myArray.splice(2, 2);           //Removes 2 items starting from index 2
                                //Returns [3, 4] and myArray = [1, 2, 5]
myArray.splice(2, 2, 9);        //Adds 9 at index 2 after removing [3, 4] and myArray = [1, 2, 9, 5]
myArray.splice(2, 2, 9, 8);     //Adds 9, 8 at index 2, 3 after removing [3, 4] and myArray = [1, 2, 9, 8, 5]
myArray.splice(2, 0, 9);        //Adds 9 at index 2

// Searching an element in the Array

myArray.indexOf(5);             //Returns the index where 5 is stored
myArray.includes(5);            //Returns a boolean whether element exists in the array or not
              0
// Multidimensional Arrays

let myArray = [[1,2,3], [4,5,6],[7,8,9]];
myArray[0][0];                  //1
myArray[0][2];                  //3
myArray[2][1];                  //8

// The Spread Operator can be used to flatten nested arrays

let myFirstArray = [1, 2, 3];
let mySecondArray = [4, 5, 6];

let flattendArray = [ ...myFirstArray, ...mySecondArray];   // [1, 2, 3, 4, 5, 6];


// Sets
// Sets provides no duplication and faster element search than array

// Creating a new set

let mySet = new Set();

let mySet = new Set([1, 2, 3]); //Adding values at the time of initialization

let mySet = new Set("HELLO");   //mySet = Set {"H", "E", "L", "o"}

// To add multiple words

let mySet = new Set().add("HELLO").add("WORLD");

typeof mySet;                   //Object

// Adding Values to sets

mySet.add(1);

mySet.add(2).add(3).add(4);

// Deleting values from set

mySet.delete(1);            //SetName.delete(Element), return true if removed else false

// Sets Method/Properties

mySet.size;               //Number of elements in the set
mySet.has("1");             //Checks if a value exists in a set
mySet.clear();              //Removes all values from the set

// Converting sets into arrays
// A set can be converted into array by using spread operator inside array literal
// Or using Array.from() method

let myArray = [...mySet];
let myArray = Array.from(mySet);

// Sets can be used to remove repeated values from Array

let myArray = [1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7];
myArray = Array.from(new Set(myArray));
myArray = [...new Set(myArray)];

// Weak Sets
// Weak sets avoid Memory Leak(retaining references to values that can no longer be accessable in the memory)
// by garbage collecting any references to a “dead object” that’s had its original reference removed.
// Note: Primitive Values can't be added in weak sets
// Weakset are to tag objects whether they belong to a special set
let myWeakSet = new WeakSet();
myWeakSet.add(2);               //ERROR



// Maps
// Maps are a convenient way of keeping a list of key and value pairs.

// Creatring a new Map

let myMap = new Map();

let myMap = new Map([[1, "I"], [2, "II"], [3, "III"]]);

// Adding items

myMap.set(1, "I");
myMap.set(2, "II").set(3, "III").set(4, "IV");

// Deleting Items

myMap.delete(1);        //Delete an item using it's key

// Maps Method/Properties

myMap.get(1);           //Getting Value Using Key
myMap.has(1);           //Check whether the map contains the key
myMap.clear();          //Clears the map
myMap.size;             //returns the number of elements in the Map

// Converting Maps to Array

myArray = Array.from(myMap);    //Returns an array with nested key value pairs, i.e.
myArray = [...myMap];           //[ [ 1, 'I' ], [ 2, 'II' ], [ 3, 'III' ] ]

// Weak Maps
// These are similar to weak sets and allow entries to be garbage collectable
// Keys can't primitive
// These have same get(), set(), has(), and delete() methods
// Size property is not available in weak maps

let myWeakMap = new WeakMap();

// Looping Over Maps and Set

let mySet = new Set(["a", 1, 2, "Hello", 0.1]);

// Using forEach
mySet.forEach(value => {
    console.log(value);
});

// Using For of Loop
for(const value of mySet) {
    console.log(value);
}

//Over Maps

let myMap = new Map([[1, "I"], [2, "II"], [3, "III"]]);

// Using forEach
myMap.forEach((key, value) => {
    console.log(`Key : ${key}, Value: ${value}`);
});

// Using For of Loop
for(const key of myMap.keys()) {
    console.log(key);                               //Prints all keys
}

for(const value of myMap.values()) {
    console.log(value);                             //Prints all values
}

for(const [key, value] of myMap.entries()) {
    console.log(`Key : ${key}, Value: ${value}`);   //Prints all key value pairs
}

// Note: Weak Map and Weak Set can't be iterated over
