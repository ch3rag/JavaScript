// Objects
// Defining an object

const myCat = {
    name: 'Kittie',
    species: 'Persian Cat',
    weight: 16,
    isHungry: true,
    isPlayed: false,
    sayMeow : function() {
        console.log("Meow!");
    },
    play : () => console.log("Playing!"),
    eat  : () => console.log("Eating!")
};

// ES6  way of initializing objects

const realName = "Tony Stark";
const name = "Iron Man";

const ironManObject = {name, realName};         //Instead of

const ironManObject = {
    name: name,
    realName: realName
}

// Checking if object has a property

// Using in operatpr
"name" in ironManObject;                    //true
"play" in myCat;                            //true

// By checking undefined

if(myCat.sayMeow() !== undefined) {
    myCat.sayMeow();
}

// Using isOwnProperty()
// This also checks for inherited properties

myCat.hasOwnProperty("sayMeow");            //true


// Finding all properties of object

//Using for in loop
for(const key in myCat) {
    console.log(`Key: ${key}, Value: ${myCat[key]}`);
}

// To ensure that inherited properties are not displayed
for(const key in myCat) {
    if(myCat.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${myCat[key]}`);
    }
}

// To print all the keys

for(const key of Object.keys(myCat)) {
    console.log(key);
}

// To print all the values

for(const value of Object.values(myCat)) {
    console.log(value);
}

// Print (Key + Value)

for(const [key, value] of Object.entries(myCat)) {
    console.log(`Key: ${key}, Value: ${value}`);
}


// Add Properties to Objects

myCat.run = () => console.log("Run!");

// Changing Properties

myCat.name = "Tom";

// Deleting Properties

delete myCat.name;

// Object as parameter to a function 

function happyBirthday({name, age, from}) {
    console.log(`Happy Birthday ${name}!. You are ${age} years old now. From: ${from}`);
}

happyBirthday({                     //Happy Birthday Chirag!. You are 18 years old now. From: Mom
    name: "Chirag",
    age: 18,
    from: "Mom"
});

// Default Values 

function sayHello({name = "Chirag", from = "Mom"} = {}) {
    console.log(`Hello ${name}! From: ${from}`);
}

sayHello();                 //Hello Chirag! From: Mom

sayHello({
    name: "Bharat"          //Hello Bharat! From: Mom
});

sayHello({                  //Hello Bharat! From: Chirag
    name: "Bharat",
    from: "Chirag"
});

// this
// this allow objects to refer their own properties

const square = {
    side: 4,
    getArea: function() {
        console.log(this.side ** 2);
    }
};

// this refers to window object when used with arrow functions
const square = {
    side: 4,
    getArea: () => console.log(this.side ** 2)          //this.side = undefined
}

// JSON

// Converting JavaScript Object into JSON
const myCatJSON = JSON.stringify(myCat);

// Parsing JSON Data into JavaScript Object
const myCatCopy = JSON.parse(myCatJSON);

// Note that JSON does not allow functions so all the function will be removed during strigify

// Math 

Math.PI;                    //PI
Math.SQRT2;                 //Square root of 2
Math.SQRT1_2;               //1/sqrt(2)
Math.E;                     //Euler's constant
Math.LN2;                   //Natural Log 2
Math.LN10;                  //Natural Log 10
Math.LOG2E;                 //Log 2 Base E
Math.LOG10E;                //Log 10 Base E

Math.abs(-1);               //1
Math.ceil(2.01);            //3
Math.floor(2.01);           //2
Math.round(2.01);           //2
Math.round(2.51);           //3
Math.trunc(-4.9);           //4 (Just decimal part)

Math.exp(1);                //Number raised to euler's constant

Math.pow(3, 4);             //81
Math.sqrt(4);               //4
Math.cbrt(8);               //2 (Cube Roots)

Math.hypot(5, 10);          //Returns size of hypotenuse fromed by side a, b

Math.log(2);                //Natural logrithmn
Math.log2(2);               //Log base 2
Math.log10(10);             //Log base 10
Math.max(1,2,3,5);          //5
Math.min(1,2,3,5);          //1

Math.sin();                 //Sine of angle
Math.cos();                 //Consine of angle
Math.tan();                 //Tangent of angle

Math.asin();                //Inverse Sine
Math.acos();                //Inverse Cosine
Math.atan()                 //Inverse Tan

// Hyperbolic functions
Math.sinh();
Math.cosh();
Math.tanh();

// Inverse Hyperbolic functions
Math.asinh();
Math.acosh();
Math.atanh();

Math.atan2();              //4 Quadrant Inverse Arc Tangent


Math.random();              //Returns random number (0, 1)

// Date object

const today = new Date();

today.toString();

// Initializing a specific date

const christmas = new Date("2018 12 25");

const christmas = new Date("25 December 2017");

const christmas = new Date(2018, 11, 25, 00, 00, 00, 00);       // 0 = January, 11 = December


// Epoch
// Epoch is 1st of January 1970
// To initialize a new date we can also use milliseconds passed since  epoch in date constructor

christmas.getTime();                            //1545676200000

// Which can really useful for incrementing and decrementing time

const aDayBeforeChristmas = new Date(christmas.getTime() - 24 * 60 * 60 * 1000);

// UTC (Cordinated Universal Time)
/* UTC is the primary time standard by which the world regulates clocks. It was
formalized in 1960 and is much the same as Greenwich Mean Time (GMT). The
main difference is that UTC is a standard that is defined by the scientific
community, unlike GMT. */

// Getter Methods

christmas.getDate();                //returns currect date (0 = Monday)
christmas.getUTCDay();              //returns UTC day

christmas.getDate();                
christmas.getUTCDate();

christmas.getMonth();
christmas.getUTCMonth();

// Y2K
/* The Year 2000 problem, also known as the Y2K problem, the Millennium bug, the Y2K bug, 
or Y2K, is a class of computer bugs related to the formatting and storage of calendar data 
for dates beginning in the year 2000. Problems were anticipated, and arose, because many 
programs represented four-digit years with only the final two digits — making the year 2000 
indistinguishable from 1900. */

christmas.getYear();        //118 (NOT Y2K Compliant)
christmas.getFullYear();    //2018
christmas.getUTCFullYear(); //2018

christmas.getHours();
christmas.getUTCHours();

christmas.getMinutes();
christmas.getUTCMinutes();

christmas.getMilliseconds();
christmas.getUTCMilliseconds();

// The getTimezoneOffset() method returns the difference, in minutes, between
// the local time on the computer and UTC.

christmas.getTimezoneOffset();          //--330

// Dates have equivalent setter methods to set the values of date


// REGEX (Regular Expressions)

// Creating Regular Expressions

const pattern = /[a-zA-Z]+ing/;

const pattern = new RegExp("[a-zA-Z]+ing");

// Regex Methods

// To test a string matches the regex

pattern.test("Playing");            //True
pattern.test("Play");               //False

// The exec() method checks the string and returns first match  

pattern.exec("I love playing, singing, dancing and camping");

// String Methods 

// split() method can take regex to split an array

"Hello  chirag    !".split(/\s+/);          //[ 'Hello', 'chirag', '!' ]

// match() methods returns an array of all matches
// This can be useful in counting occurances

"abcdhefsaasde".match(/a/g).length;         //Number of a's = 3

// search() returns the index of first occurance

"abcedeffghf".search(/f/);                  //6

// replace() is used replace matched groups 
// E.g. Replacing markdown links with HTML

"[Google](https://www.google.co.in)".replace(/\[(.*)\]\((.*)\)/g, "<a href=$2>$1</a>");
//<a href=https://www.google.co.in>Google</a>