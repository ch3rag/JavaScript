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
// given a parameter of true, it will force the browser to reload the page from the
// server, instead of using a cached page.
window.location.reload();                 

// REDIRECT TO A DIFFERENT PAGE
window.location.assign("https://www.google.com");
// OR
window.location.replace("https://www.google.com");
// OR
window.location.href = "https://www.google.com";
// The replace() method is almost the same as the assign() method, except the
// current page will not be stored in the session history, so the user will be
// unable to navigate back to it using the back button.

// STRING CONTAINING COMPLETE URL
window.location.toString();

// BROWSER HISTORY
window.history.go(-1);      // GO ONE PAGE BACK
//OR 
window.history.back();

window.history.go(0);       // CURRENT PAGE

window.history.go(1);       // GO ONE PAGE FORWARD
// OR 
window.history.forward();


// CREATING NEW WINDOWS
// window.open(URL, TITLE, PARAMS);
const newWindow = window.open("http://www.google.com", "Hey Google", "height=100px, width=100px, top=200px, left=200px");

// TO CLOSE THE WINDOW
newWindow.close();
// SCRIPTS CAN ONLY CLOSE THE WINDOWS THAT ARE OPENED BY IT
this.close();       //  THIS WON'T WORK

// MOVING WINDOWS
newWindow.moveTo(300, 300);

// BRING WINDOW TO FRONT
newWindow.focus();
// HIDE 
newWindow.blur();   

//RESIZE "NEW CREATED WINDOWS"
window.resizeTo(500, 500);

// ADD 10px TO CURRENT WIDTH AND HEIGHT
window.resizeBy(10, 10);

// SCREEN INFORMATION

// HEIGHT
window.screen.height;

// WIDTH
window.screen.width;

// CLIENT WIDTH
window.screen.availWidth;


// CLIENT HEIGHT
window.screen.availHeight;

// DOCUMENT OBJECT

// WRITING HTML/PLAINTEXT    IN DOCUMENT

document.write("Hey!")

// COOKIES

// CREATING COOKIES
document.cookie = "name=chirag";
document.cookie = "phone=123456678";

console.log(document.cookie);   // "name=chirag; phone=123456678"

document.cookie = "name=bharat";
console.log(document.cookie);   // "name=bharat; phone=123456678"

// TRAVERSING
let cookies = document.cookie.split("; ");
for(const [k, v] of cookies.map(x => x.split("="))) {
    console.log(`THE VALUE OF THE KEY ${k} IS ${v}`);
}

// Cookie Expiry Dates

// Cookies are session cookies by default. This means they are deleted once a
// browser session is finished (when the user closes the browser tab or window).
// Cookies can be made persistent ― that is, lasting beyond the browser session ―
// by adding "; expires=date" to the end of the cookie when it’s set, where date is
// a date value in the UTC String format Day, DD-Mon-YYYY HH:MM:SS GMT.


const expiryDate = new Date();
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24 ;
expiryDate.setTime(tomorrow);

document.cookie = `name=chirag; expires=${expiryDate.toUTCString()}`;

// ALTERNAME
// max-age=seconds
 
// The path can be changed so that any page in the root directory can read the cookie.
document.cookie = "name=chirag; path=/"

// Adding domain name will allow all subdomains of abc.com (x.abc.com, y.abc.com) to read it.
document.cookie = "name=chirag; domain=abc.com";

// Adding the string '; secure' to the end of a cookie will ensure it’s only transmitted over a secure HTTPS network
document.cookie = "name=chirag; secure";

// DELETING COOKIES
// To remove a cookie, you need to set it to expire at a time in the past
let past = new Date();
past.setTime(0);
document.cookie = `name=chirag; expires=${past.toUTCString()}`;


// TIMING FUNCTIONS

// SETTIMEOUT
let id = window.setTimeout(() => alert("Time's Up"), 5000);

// CLEARING TIMEOUTS
window.clearTimeout(id);

// SETINTERVAL
let id = window.setInterval(() => console.log("REPEAT"), 1000);

// CLEARING INTERVALS
window.clearInterval(id);

// ANIMATION

// SEE ANIMATION.HTML


