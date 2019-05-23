// Global variables are actual properties of a global object. In a browser
// environment, the global object is the window object.

x = 6;

console.log(window.x);          //6
console.log(window.x === x);    //true


window.alert("Hey");            // CREATES A MESSAGE BOX


let choice = window.confirm("Do you want to continue?");     // DISPLAYS A CONFIRMATION BOX
if(choice) { // IF USER SELECTS TO CONTINUE
    // DO STUFF
} else {
    // DO STUFF
}

let name = window.prompt("What's your name?");                         // DISPLAYS AN INPUT BOX
// IF USER CHOOSES CANCEL THEN NULL WILL BE RETURNED

// BROWSER INFORMATION
window.navigator.userAgent;

// URL INFORMATION
window.location.href;

// PAGE CAN BE REDIRECTED USING THIS PROPERTY
window.location.href = "https://www.google.com/"

// PROTOCOL
window.location.protocol;

// The host property returns a string describing the domain of the current URL and the port number
window.location.host;

// HOST NAME ONLY
window.location.hostname;

// PORT NUMBER ONLY
window.location.port;

// PATH NAME (HOST IS OMMITED FROM URL)
window.location.pathname;

// The search property returns a string that starts with a '?' followed by the query
// string parameters. It returns an empty string if there are no query string
// parameters. 
window.location.search;

// The hash property returns a string that starts with a "#" followed by the fragment
// identifier. It returns an empty string if there is no fragment identifier:
window.location.hash;

// The origin property returns a string that shows the protocol and domain where
// the current page originated from. This property is read-only, so cannot be
// changed.
window.location.origin;

// METHODS
// RELOAD PAGE
window.location.reload();                  

// LOAD AN
