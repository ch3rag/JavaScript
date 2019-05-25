// DATA ATTRIBUTE
// The data- attribute is a way of embedding data in a web page using custom
// attributes that are ignored by the browser. They’re also private to a page, so are
// not intended to be used by an external service – their sole purpose is to be used
// by a JavaScript program

// ACCESSED USING ELEMENT.DATASET.PROPERTYNAME

// The names of these attributes can be decided by the developer, but they must:

// Start with data-.
// Contain only lowercase letters, numbers, hyphens, dots, colons or underscores.
// Include an optional string value.


// HTML 5 WEB STORAGE API
// The Web Storage API provides a key-value store on the client’s computer that is
// similar to using cookies but has fewer restrictions, more storage capacity, and is
// generally easier to use. This makes it perfect for storing information about users,
// as well as storing application-specific information that can then be used during
// future sessions.

// IF BROWSER SUPPORTS IT, WINDOW OBJECT HAS
// localStorge      // SAVE DATA FOR FUTURE
// sessionStorge    // SAVE DATA ONLY FOR CURRENT SESSION

// SETTING ITEM
localStorage.name = "Chirag";
localStorage.setItem("name", "Chirag");

// GETTING ITEM
const data = localStorage.name;
const data = localStorage.getItem("name");

// DELETE
localStorage.removeItem("name");
delete localStorage.name;

// CLEAR
localStorage.clear();

// Every time a value is saved to local storage, a storage event is fired by window object. Note that
// this event is only fired on any other windows or tabs from the same domain, and
// only if the value of the item being saved changes. The event object sent by the
// event listener to the callback has a number of properties that provide information
// about the updated item:

// KEY tells us the key of the item that changed
// NEWVALUE tells us the new value to which it has been changed
// OLDVALUE tells us the previous value before it was changed
// STORAGEAREA tells us if it is stored in local or session storage.

// Geolocation
// If geolocation is available, it will be a property of the navigator object that we
// met. This property has a method called getCurrentPosition() that
// will return a position object to a specified callback function

window.navigator.geolocation.getCurrentPosition(printTheLocation);

// GETTING POSITION EVERYTIME IT'S CHANGED
const id = window.navigator.geolocation.watchPosition(printTheLocation);

// CLEARING THE WATCH
window.navigator.geolocation.clearWatch(id);

function printTheLocation(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.speed);
    console.log(location.altitude);
    console.log(location.heading);
    console.log(location.timeStamp);

    // ACCURACY OF LOCAION IN METERS
    console.log(location.accuracy);
    console.log(location.altitudeAccuracy);
}



// WORKER API
// Web workers allow processes to be run in the background, adding support for concurrency in
// JavaScript. The idea is that any processes that could take a long time are carried out in 
// the background, so a website will continue to function.

const worker = new Worker(scriptURL);

// The variable that’s assigned to the constructor function (worker) can now be used to refer
// to the worker in the main program. In the worker script (task.js), the keyword self is
// used to refer to the worker

