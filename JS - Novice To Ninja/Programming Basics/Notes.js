// typeof is used to identify the type of variable or literal

typeof("Chirag");
typeof([1, 2, 3]);
typeof({name: "Chirag"});

// Variable Declaration

let name = "Alexa", number = 1;

// If a variable is declared without let or const, it is considered as global variable athough it may be declared inside a block
{
     PI = 3.14 // PI is globally acessible
}

// Two ways for accessing properties of an object

const name = "Chirag";

name.length;
name["length"];


// String Methods/Properties
// Can Be Initialized Using String() Method
name.length;

name.toUpperCase();
name.toLowerCase();
name.charAt(1);
name.indexOf("h");
name.lastIndexOf("a");          //Last Occurance
name.includes("z");             //If String Contains
name.startsWith("C");
name.endsWith("g");
name.trim();                    //Removes Whitespaces, carriage returns and tabs
name.repeat(2);                 //ChiragChirag


// Concatenating Strings

name.concat(" Rajput");
name + "Rajput";

"Hello, " + "World"; 
"Hello, ".concat("World");
"Hello, ".concat("W", "o", "r", "l", "d");

// Template Literals

// Can be used to place both type of quotation marks inside string 

let statement = `She said, "I will be there in 5 minutes".`

// It allows to insert javaScript code inside of a string

let statement = `My name is ${name}.`

// Can also contain line breaks that are converted into line feed (\n)

let multiLineStatement = `The story starts here...


and  ends here...`
// 'The story starts here...\n\nand  ends here..'

// Symbols
// Datatype that is part of ES6 and created using Symbol() initializer
// It's used to create unique values to avoid naming collisions

let mySymbol = Symbol();
let mySymbol = Symbol("Name");

// Commonly used as unique property keys for the object 
let myObject = {};
myObject[mySymbol] = "Chirag";

mySymbol.toString();                        // Symbol(Name)

let symbolOne = Symbol("ABC");
let symbolTwo = Symbol("ABC");

console.log(symbolOne === symbolTwo);       //False

// Two or more variables with same symbol
symbolOne = Symbol.for("ABC");
symbolTwo = Symbol.for("ABC");

console.log(symbolOne === symbolTwo);       //True


// Numbers
// Can Be Initialized Using Number() Method
// Methods/Properties

Number.isFinite(Infinity);                  //False
Number.isFinite(1/0);                       //False
Number.isInteger(3.1415);                   //False
Number.isNaN(NaN);                          //True

5.1.toExponential();                        //5.1e+0
(5).toExponential();                        //5e+0

(3.14159).toFixed(3);                       //Round Off Upto 3 Decimal Places
(3.14159).toPrecision(4);                   //Round Off Upro 4 Significant Digits

// Number Systems/Representations

0x00012;                                    //Hexadecimal Number
0o77721;                                    //Octal Number
0b10111;                                    //Binary Number

5e3;                                        //5 X 10 ^ 3 = 5000
51e-1;                                      // 51 X 0.1 = 5.1

// Exponential Operation Can Be Performed Using ** Operator

5 ** 3                                      //125

Number.MAX_VALUE                            //Largest Number That Can Be Handled
Number.MIN_VALUE                            //Minimum Number That Can Be Handled


// Type Conversion

// Strings To Numbers
let num = Number("26");
let num = "26" * 1;
let num = +"26";

// Using Number.parseInt(String, fromBase)

Number.parseInt("10101", 2);
Number.parseInt("2A1", 16);
Number.parseInt("23466", 8);
Number.parseInt("2.9", 10);        //2
Number.parseFloat("2.456");        //2.456

// Numbers To String
let strNum = String(26); 
let strNum = "" + 26;
let strNum = 26..toString();

// Base Coversion

4566..toString(2);          //Binary
4566..toString(8);          //Octal
4566..toString(16);         //Hex

// Booleans
// Values can be checked if true or false using Boolean() Function
// 9 Falsy Values ==> "", '', ``, 0, -0, NaN, null, undefined, false
// Boolean() function also use to cast/check for true/false values

// valueOf() function
// This funtion returns litral value of a variable

let num = 10;
num.valueOf();                  //10

let num = new Number();         //num = [Number:0]
num.valueOf();                  //10

let bool = new Boolean(true);   //bool = [Boolean: true]
bool.name = "Chirag";           //bool = [Boolean: true name: 'Chirag']
bool.valueOf();                 //true

let str = new String();         //str = [String: '']


// Logical Operators
// Not Operator

!true;                          //false
!0;                             //ture

// Double Negation can be used to check truthy and falsy values

!!'';                           //false
!!0;                            //false
!!NaN;                          //false
!!"Hello";                      //true
!!{Name: "Chirag"};             //true

// Examples of Lazy Evaluation

let num = 0;
false && (num = 20);        //Value of num does not change
true || (num = 20);         //Value of num does not change
false || (num = 20);        //num = 20

// Bitwise Operator
// ~ NOT, & AND, | OR, ^ XOR, >> Right Shift, << Left Shift

// Avoiding type coercian 
// Use Hard Equlity (===) and Hard Inequility Operators(!==)
// For Greater than and less then equals use combination with ||(OR), i.e.

8 > 8 || 8 === 8;       //true
8 > "8" || 8 === "8"    //false


// Pitfalls

typeof(NaN);                //Number

2 * "8";                    //16
2 + "8";                    //28  

parseInt("221B XYZ", 10);   //221
Number("221B XYZ");         //NaN

10 + null;                  //10
10 + undefined;             //NaN
10 + NaN                    //NaN
"10" + null;                //10null
"10" + undefined;           //10undefined
"10" + Infinity;            //10Infinity
"10" + NaN;                 //10NaN
"10" + -Infinity;           //10-Infinity

5 == "5";                   //true
"" == 0;                    //true
"" == "0";                  //false
false == "0";               //true
"1" == true;                //true
"2" == true;                //false
1 == true;                  //true
2 == true;                  //false
"true" == true;             //true
null == undefined;          //true
NaN === NaN;                //false
NaN == NaN;                 //false
16 != "16"                  //false
18 >= "18"                  //true