// DOM
// Getting DOM Elements

const body = document.body;                                 //Gets Body Element
body;                                                       //Returns actual HTML code of the HTML Documnent
typeof body;                                                //Object

body.nodeType;                                              //Returns the type of node

// Some Usual Values of Node types
// 1	Element
// 2    Attribute
// 3    Text
// 8    Comment
// 9    Root (Document)

document.nodeType;                                          //9

// nodeName property can be used to display the name of DOM element

body.nodeName;                                              //"BODY"

// Legacy DOM Methods

document.body;                                              //Returns Body Element
document.images;                                            //Returns node list of all images in  the document
document.links;                                             //Returns node list of all <a> and <area> elements that have href attribute
document.anchors;                                           //Returns node list of all <a> that have name property
document.forms;                                             //Returns node list of all forms in the document


// Getting Elements by ID

const title = document.getElementById("title");

// Getting Elemnets by their Tag name

const allListItems = document.getElementsByTagName("li");               //Retuns Node List of all li tags

allListItems[1];                                                        //<li class="vigilante hero" id="bats">Batman</li>

// Getting Elements by thier Class Name

const heroes = document.getElementsByClassName("hero");

// Query Selectors
// They are quite powerful and can emulate all above discussed methods

// Getting Elements by ID

const title = document.querySelector("#title");

// Getting Elements by thier Class Name

const heroes = document.querySelector(".hero");

// Getting Last Element of li

const wonderWoman = document.querySelector("li:last-child");

// Getting referance to ul element

const ul = document.querySelector("ul#roster");                 // Says Select ul element having id = "roster"

const bats = ul.querySelector("li#bats");                       // li element having id =  "bats"

// Navigating DOM Tree

// Getting all child nodes

const ul = document.querySelector("#roster");

ul.childNodes;                                                  //Returns list of child nodes(including text nodes)
ul.childElementCount;                                           //Returns the number of child nodes 
ul.children;                                                    //Returns list of child nodes(excluding text nodes)

ul.firstChild;                                                  //Returns first child(Text in this case)
ul.lastChild;                                                   //Returns last child(Text in this case)
ul.firstElementChild;                                           //Returns first li element
ul.lastElementChild;                                            //Returns last li element
ul.parentNode;                                                  //Returns Parent Node
ul.parentElement;                                               //Returns Parent Element(With few exceptions)


ul.nextSibling;                                                 //Returns next adjacent node
ul.previousSibling;                                             //Returns previous adjacent node

// Getting Values Of Nodes
const wonderWoman = document.querySelector("ul#roster > li:last-child");
wonderWoman.innerHTML;                                          
wonderWoman.nodeValue;

// These are same but innerText is CSS Aware method and not return any text hidden using CSS
wonderWoman.innerText;              
wonderWoman.textContent;

// Getting And Setting Attributes

wonderWoman.getAttribute("id");                                 //Return id value
wonderWoman.setAttribute("id", "xyz");                          //Sets id to xyz

// Setting Class Name
wonderWoman.setAttribute("class", "xyz");
wonderWoman.className = "xyz;"

// ClassLists

// Append a new class
wonderWoman.classList.add("abc");

// Removing class
wonderWoman.classList.remove("abc");

// Toogle class 
// Returns true if added and false if it was removed
wonderWoman.classList.toggle("abc");

// Checking if element contains class
wonderWoman.classList.contains("abc");


// Creating New Html Elements
const listItem = document.createElement("li");
listItem.innerText = "Chirag";

// USING FUNCTIONS
function createTag(tagName, text) {
    const el = document.createElement(tagName);
    el.innerText =  text;
    return el;
}

// APPEND AT THE END OF THE LIST
document.querySelector("ul#roster").appendChild(createTag("li", "Chirag"));

// OR INSERT AT SPECIFIC LOCATION USING INSERTBEFORE
// THIS METHOD MUST BE EXECUTED ON THE REFERENCE TO THE PARENT OF THE CHILD NODES TO WHICH NEW NODE IS TO BE INSERTED
document.querySelector("ul#roster").insertBefore(createTag("li", "Aquaman"), document.querySelector("ul#oster > li:nth-child(3)"));
// AQUAMAN WILL INSERTED BEFORE WONDERWOMAN


// REMOVING ELEMENTS
document.querySelector("ul#roster").removeChild(document.querySelector("ul#roster > li:nth-child(3)"));
// REMOVES AQUAMAN

// REPLACING NODES
document.querySelector("header").replaceChild(newTitle, document.getElementById("title"));

// UPDATING CSS USING JS
document.getElementById("title").style["background-color"] = "red";
document.getElementById("title").style.backgroundColor = "red";

// GETTING ALL STYLING ON ELEMENT USING getComputedStyle();
getComputedStyle(document.getElementById("title"));

// SPECIFIC PROPERTY
getComputedStyle(document.getElementById("title")).getPropertyValue("color");


















