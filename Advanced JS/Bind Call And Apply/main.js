function myFunc(name, message) {
    console.log(name + ' says ' + message);
    console.log(this);
}

function higherOrderTwo(callback) {
    let testObj = {
        name: "Test Object",
    };

    testObj.func = callback;
    testObj.func();
}

function higherOrder(callback) {
    getThis();
}
function getThis() {
    console.log(this);
}

getThis();  // WINDOW OBJECT

higherOrder(getThis); // WINDOW OBJECT

higherOrderTwo(getThis); // testObj

const myObj = {
    name: "Chirag",
    age: 20
}

// BIND() RETURNS A NEW FUNCTION THAT IS BINDED TO THE PASSED OBJECT
// THIS BINDING IS IMMUTABLE AND CAN'T BE CHANGED USING CALL AND APPLY

const bindedFunction = getThis.bind(myObj);

bindedFunction();   // myObj;

const myObjTwo = {
    name: "Bharat",
    age: 20
};

const newBinding = bindedFunction.bind(myObjTwo);

newBinding();  //myObj

// APPLY
// Function.apply(context, array of arguments);
// CALL
// Function.call(context, arg1, arg2, ...);
// THEY BOTH EXECUTE THE FUNCTION IMMEDIATELY

myFunc.apply(myObj, ["Chirag", "bind using apply"]);

myFunc.call(myObj, "Chirag", "bind using call");