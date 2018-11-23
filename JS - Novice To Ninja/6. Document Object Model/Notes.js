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

ul.firstChild;                                                  //Returns first child
ul.lastChild;                                                   //Returns last child
ul.parentNode;                                                  //Returns Parent Node
ul.parentElement;                                               //Returns Parent Element(With few expceptions)


ul.nextSibling;                                                 //returns next adjacent node
ul.previousSibling;                                             //returns previous adjacent node










