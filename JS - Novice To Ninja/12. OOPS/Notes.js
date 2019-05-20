// CREATING OBJECTS

myObj = {};

myObj = new Object();

myObj = new Object({
    name: "Chirag",
    age: 20
});

myObject = new Object(prototype, {
    // PROPERTIES TO BE ADDED USING DESCRIPTORS
    name : {
        value: "Chirag",
        enumerable: true,
        writable: false,
        configurable: false
    }
    // AND SO ON...
});


// USING NORMAL FUNCTIONS TO CREATE OBJECTS
// WE NEED TO EXPLICITELY CREATE AND RETURN OBJECT IN THE FUNCTION
function createDice(sides = 6) {
    const obj = new Object();
    obj.sides = sides;
    obj.roll = function () {
        return Math.floor(Math.random() * this.sides);
    }
    return obj;
}

const dice = new Dice(10);
dice.roll();

// USING CONSTRUCTOR FUNCTION
// THESE FUNCTION IMPLICITELY CREATE AND RETURN OBJECTS

function Dice(sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(Math.random() * this.sides);
    }
}

const dice = new Dice(10);
// NEW TELLS THAT WE WANT TO USE Dice() AS THE CONSTRUCTOR FUNCTION
// CREATE A NEW OBJECT USING THE Dice() CONSTRUCTOR FUNCTION WHICH IS THEN RETURNED AND STORED IN A VARIABLE
// OBJECTS CREATED IN THIS WAY HAVE THEIR SEPERATE DEFINITION OF THE roll() METHOD WHICH IS NOT IDEAL
// HOWEVER IT CAN BE SOLVED USING PROTOTYPES


// Some people prefer to create object instances without first creating constructors, especially if
// they are creating only a few instances of an object. JavaScript has a built-in method called
// create() that allows you to do that. With it, you can create a new object based on any existing
// object.

const dice2 = Object.create(dice);
dice2.sides;            // 10
// NOTE THAT DICE2 HAS THE SAME NUMBER OF SIDES AS DICE1

// PROTOTYPES

// JavaScript is often described as a prototype-based language — to provide inheritance, objects
// can have a prototype object, which acts as a template object that it inherits methods and
// properties from. An object's prototype object may also have a prototype object, which it
// nherits methods and properties from, and so on. This is often referred to as a prototype
// chain, and explains why different objects have properties and methods defined on other objects
// available to them.

// Well, to be exact, the properties and methods are defined on the prototype property on the
// Objects' constructor functions, not the object instances themselves.

// In JavaScript, a link is made between the object instance and its prototype (its __proto__
// property, which is derived from the prototype property on the constructor), and the properties
// and methods are found by walking up the chain of prototypes.

// The __proto__ is the property on each instance, and the prototype is the property on the constructor.
// Object.getProtypeOf(dice) == Dice.prototype == dice.__proto__ == dice.constructor.prototype

// PROTOTYPE CHAIN OF dice OBJECT

// dice =====================================> DICE ======================================> Object
//            INHERITS FORM PROTOTYPE                      INHERITS FORM PROTOTYPE
// THAT'S WHY dice HAVE METHOD SUCH AS valueOf() THAT GETS INHERITED FORM THE Object's PROTOTYE

// NOTE THAT ONLY METHODS AND FIELD THAT ARE DEFINED UNDER PROTOTYPE PROPERTY ARE INHERTED
// THIS IS WHY dice OBJECT DOES NOT HAVE dice.keys() FUNCTION


// OBJECT.CREATE(PROTOTYPE OBJECT)
// OBJECT.CREATE TAKES AN OBJECT AND USE IT AS PROTOTYPE TO CREATE A NEW OBJECT

const dice2 = Object.create(dice)
dice2.__proto__ == dice;        // TRUE

// CONSTRUCTOR PROPERTY
// EVERY CONSTRUCTOR "FUNCITON" => HAS A PROTOTYPE PROPERTY THAT IS AN OBJECT
// THIS PROTOTYPE OBJECT => HAS A CONTRUCTOR "PROPERTY" THAT IS REFERENCE TO ORIGINAL CONSTRUCTOR

// dice --------------> __proto__ -------------> constructor
// dice --------------> constructor
//           HAS                      HAS

// ALSO dice.constructor === dice.__proto.constructor

// WE CAN USE THIS CONSTRUCTOR REFERENCE TO CREATE NEW OBJECT OF THE SAME CLASS

const dice3 = new dice.constructor(5);

// GETTING NAME OF THE CONSTRUCTOR
dice.constructor.name;          // Dice

// NOTE THAT THIS PROPERTY CAN CHANGE SO IT IS A BETTER BETTER PRACTICE TO USE instanceOf
// OPERATOR TO CHECK IF AN OBJECT IS AN INSTANCE OF A PARTICULAR CONSTRUCTOR FUNCTION

// MODIFYING PROTOTYPES
// MODIFYING AND ADDING NEW METHODS AND FIELDS TO THE PROTOTYPES OF CONSTRUCTOR FUNCITONS

// AN OBJECT DEFINED HERE WILL GET getSides() METHOD DYNAMICALLY
// BUT IT MUST NOT BE CALLED HERE
Dice.prototype.getSides = function () {
    return this.sides;
}
// WE CAN CALL getSides() HERE


// THIS WILL "ADD" getSide() DYNAMICALLY TO ALL THE NEW OBJECTS CREATED FROM NOW ON AS WELL AS 
// THOSE THAT WERE CREATE BEFORE OR AFTER THE METHOD IS ADDED
// NOTE THAT IT MUST NOT BE CALLED BEFORE IT IS ADDED TO PROTOTYPE

// WE CAN ALSO ADD FIELDS USING PROTOTYEPES
// GENRALLY COMMON PROPERTIES ARE ADDED USING THIS
// IT IS NOT VERY FLEXIBLE

Dice.prototype.color = "RED";   // ALL THE DICES WILL BE RED

// !NOTE
Dice.prototype.faces = this.sides;
// THIS WON'T WORK BECAUSE THIS REFERS TO GLOBAL OBJECT IN THIS CASE

// PROTOTYPE FIELDS ARE NOT COMMON
function Person(name) {
	this.name = name;
}

Person.prototype.lastName = "";

let bob = new Person("BOB");
let julia = new Person("Julia");

bob.lastName = "Gomez";
julia.lastName = "Stone";
bob.lastName;                   //GOMEZ
julia.lastName;                 //STONE


// BEST WAY TO DEFINE A CLASS USING CONSTRUCTOR FUNCTION :
function Dice() {
    // FIELDS
}

// DEFINE METHODS USING PROTOTYPES
Dice.prototype.roll = function () {
    // DEFINITION
}


// PROTOTYPAL INHERITANCE

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function () {
    return `He I'am ${this.name.first}`;
}

Person.prototype.fareWell = function () {
    return `${this.name.first} is going, Bye!`;
}

// WE WILL CREATE A TEACHER CLASS THAT WILL INHERIT THE PERSON CLASS
// OVERRIDE THE GREETING TO SOMTHING FORMAL
// ADD A SUBJECT FIELD

// DEFINE TEACHER CONSTRUCTOR
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    // THIS CALL IS EQUVALENT TO:
    // this.name = {first, last};
    // this.age = age;
    // ...

    this.subject = subject;
}

// UNTIL NOW THE TEARCHER HAS ALL THE FIELDS AND METHODS DEFINED IN PERSON'S "CONSTRUCTOR"
// IT DOES NOT HAVE THE REFERENCE TO METHODS DEFINED IN THE PROTOTYPE
// THAT IS THE PROTOTYPE OF Teacher DOES NOT CONTAIN METHODS IN  PROTOTYPE OF Person YET

let bob = new Teacher("Bob", "Gomez", 25, "Male", ["Hockey", "Baseball"], "Math");
console.log(bob.greeting());
// ERROR: bob.greeting() is not a function

// 3 WAYS TO DO IT

// WAY 1:
Teacher.prototype = new Person(??, ??, ??, ??, ??);
// THIS WON'T WORK BECAUSE THE PERSON CONSTRUCTOR WILL BE INVOKED AND WE HAVE TO PASS THE ARGUMENTS AS WELL
// BAD DESIGN
// INSTANCE SPECIFIC CODE WILL RUN WHEN USING THIS APPROACH
// Teacher.prototype =====> AN SEPECIFIC INSTANCE OF PERSON CLASS

// WAY 2:
Teacher.prototype = Person.prototype;
// THIS WILL WORK BUT WE ADD ANY NEW METHOD IN TEACHER'S PROTOTYPE THEY WILL ALSO BE ADDED IN PERSON

// WAY 3: (BEST WAY)
Teacher.prototype = Object.create(Teacher.prototype);
// IT WILL CREATE A NEW OBJECT USING ONLY THE PROTOTYPE OF THE TEACHER CLASS
// INSTANCE SPECIFIC CODE WILL NOT RUN IN THIS CASE
// Teacher.prototype =====> NEW OBJECT THAT IS CREATED USING PERSON'S PROTOTYPE

// REDEFINING THE PROTOTYPE.CONSTRUCTOR
// AFTER THE PREVIOUS STEP
// Teacher.prototype.constructor ===> Person's Constructor

// FOR EXAMPLE IF WE DID THIS:
const bob = new Teacher("Bob", "Gomez", 25, "Male", ["Hockey", "Baseball"], "Math");
const silva = new bob.constructor("Silva", "Stone", 30, "Female", ["Dancing", "Singing"], "English");

silva.subject;        // UNDFINED BECAUSE SILVA IS A PERSON NOT A TEACHER!!

// TO FIX THIS WE REDEFINE IT
Teacher.prototype.constructor = Teacher;

// DONE!!

// OVERIDING GREETING

Person.prototype.greeting = function () {
    let prefix;
    if (this.gender == "Male") {
        prefix = "Mr."
    } else {
        prefix = "Mrs."
    }
    return `Hi, my name is ${prefix} ${this.name.last} and I teach ${this.subject}`;
}

silva.greeting();
// Hi, my name is Mrs. Stone and I teach English




// ES6 WAY
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };

        this.age = age;
        this.gender = gender;
        this.interests = interests;

        greeting() {
            return `He I'am ${this.name.first}`;
        }
    }
}

// INHERITING

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject) {
        super(first, last, age, gender, interests);
        this.subject = subject;
    }

    greeting() {
        let prefix;
        if (this.gender == "Male") {
            prefix = "Mr."
        } else {
            prefix = "Mrs."
        }
        return `Hi, my name is ${prefix} ${this.name.last} and I teach ${this.subject}`;
    }

}

// WHY USE ES6
// CREATING OBJECTS WITHOUT NEW

const myDice = Dice();
myDice;         // undefined

// NO ERROR WOULD BE THROWN WHEN USING CONSTRUCTOR FUNCTIONS
// BUT WHEN ES6 CLASSES ARE USED TO CREATE OBJECTS
// ERROR WILL BE THROWN IF NEW IS OMITTED
// uncaught TypeError: Class constructor Dice cannot be invoked without 'new'

// STATIC FUNCTIONS:

class Random {
    static getRandom(x) {
        return Math.random() * x;
    }
}

console.log(Random.getRandom(10));
// GET RANDOM NUMBER BETWEEN 0 AND 10

// ES6 GETTERS SETTERS
class Dice {
	constructor() {
    	this._sides;
     }
    
    get sides() {
        return this._sides;
    }

    set sides(x) {
        if(x < 1)  {
            throw new Error("SIDES CAN'T BE NEGATIVE");
        } else {
            this._sides = x;
        }
    }
}

let myDice = new Dice();
myDice.sides;                   // GET INVOKED: UNDEFINED
myDice.sides = -1               // SET INVOKED: THROWS ERROR

// myObject.hasOwnProperty()
// THIS METHOD CAN BE USED TO CHECK IF THE PROPERTY IS INHERITED OR NOT


// PRIVATE MEMBERS

class Dice {
    constructor(sides) {
        let _sides = sides;                 // PRIVATE
        this.setSides = s => _sides = s;    // THEY ACCESS _SIDES USING CLOSURE
        this.getSides = () => _sides;
    }
}

// Enumerable Properties

// Properties of objects in JavaScript are said to be enumerable or non-enumerable.
// If they aren’t enumerable, this means they will not show up when a for-in loop
// is used to loop through an object’s properties and methods.
// There is a method called propertyIsEnumerable() that every object has (because
// it’s a method of Object.prototype) that can be used to check if a property is
// enumerable.

// MONKEY-PATCHING
// METHOD OF ADDING NEW FEATURES TO EXSISTING CLASSES

Number.prototype.isEven = function() {
	return this % 2 === 0;
}
Number.prototype.isOdd = function() {
	return this % 2 === 1;
}
// DON'T USE ANONYMOUS FUNCTIONS
// Number.prototype.isEven = () =>  this % 2 === 0;
// Number.prototype.isOdd = () =>  this % 2 === 1;

2..isEven();            // TRUE
8..isOdd();             // FALSE 


// Property Attributes and Descriptors

// 4 ATTRIBUTE PER PROPERTY:
// Value            This is the value of the property and is undefined by default

// Writable         This boolean value shows whether a property can be changed or
//                  not, and is false by default

// Enumerable       This boolean value shows whether a property will show up
//                  when the object is displayed in a for in loop, and is false by default

// Configurable     This boolean value shows whether you can delete a property
//                  or change any of its attributes, and is false by default.

// GETTING PROPERTY DESCRIPTORS

const me = {
    name: "Chirag"
}

Object.getOwnPropertyDescriptor(me, "name");
/// WHICH RETURN THIS =>
// { configurable: true, enumerable: true, value: "Chirag", writable: true }


// SETTING PROPERTY DESCRIPTORS

Object.defineProperty(me, "age", {
    value: 20,
    enumerable: true,
    writable: false,
    configurable: true
})


me.age = 21; // DOES NOTHING

console.log(me);
// { name: "Chirag", age: 20 }

// WE CAN ALSO USE GETTERS AND SETTERS IN DESCRIPTORS

Object.defineProperty(me, "yearOfBirth", {
    set(x) {
        if(x < 0) {
        	throw new Error();
        } else {
        	this.age = new Date().getFullYear() - x;
        }
    },
    get() {
        return (new Date().getFullYear() - this.age);
    }
});

me.yearOfBirth;
// 1998
me.yearOfBirth = -1;
// THROWS ERROR


// MIXINS
// A mixin is a way of adding properties and methods of some objects to another
// object without using inheritance.

const a = {name: "Chirag"};
const b = {age: 20};

Object.assign(a, b);
a;
// {name: "Chirag", age: 20}

// ONLY SHALLOW COPY IS PERFORMED USING THIS METHOD


// WE DEFINE OUR OWN FUNCTION FOR THE DEEP COPIES

function mixin(targetObject, ...restObjects) {  
    for(const object of restObjects) {
        if(typeof object === "object") {                // ONLY OBJECT ALLOWED
            for(const key of Object.keys(object)) {      // GO THROUGH EACH KEY
                if(typeof object[key] === "object") {   // IF KEY IS ASSINGNED TO AN OBJECT
                    // FIND IF THAT OBJECT IS ARRAY OR OBJECT AND
                    targetObject[key] = Array.isArray(object[key])? [] : {};
                    mixin(targetObject[key], object[key]);
                } else {
                    Object.assign(targetObject, object);
                }
            }
        } 
    }
}