// Root Files

// In the root of any folder structure you will find a file called index.html. This is
// traditionally the page that a web browser will load by default, although it is
// possible to instruct it to load any file by programming how the server responds to
// requests.


// src

// Code that needs to be transpiled is often placed inside a folder called src (short
// for “source”). The transpiler can then compile the JavaScript code into a single
// file in a different location


// dist

// The output of any transpiled code from the src folder is usually placed inside a
// folder called dist (short for “distribution”). This is the only part of the
// application code that is actually distributed when it is deployed. Even though
// there might be many different files inside the src folder, the result of
// transpilation means there is usually only a single JavaScript file inside the dist
// folder, usually called budle.js or bundle.min.js if it has also been minified.


// lib
// Any modules are usually stored in a folder called lib (short for “library”) that is
// usually placed inside the src folder. Third-party libraries are often placed inside
// a folder called vendor, although they are sometimes also placed inside the lib
// folder.

/*

+ src
|---- CSS
|---- JS
|---- views
|---- tests
+ dist
|---- index.html
|---- bundle.min.js
package.json
node_modules
README

*/