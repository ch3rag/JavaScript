// MODULES

// In the Node.js module system, each file is treated as a separate module  

const circle = require("./CircleModule.js");

console.log(circle.area(2));

// Variables local to the module will be private, because the module is wrapped in a function by 
// Node.js

// module.exports vs. exports
/*
var module = { exports: {} };
var exports = module.exports;
return module.exports;

exports.area = (x) => x * x;        // WORK
exports = function(x) => x * x;     // WON'T WORK AS REFERENCE TO EXPORTS IS CHANGED
*/

const Square = require("./SquareModule.js");

const mySquare = new Square(5);
console.log(mySquare.area());

// THE MODULE WHICH IS RUN BY NODE IS CALLED MAIN MODULE
// THE PROPERTY require.main IS SET TO module PROPERTY OF THAT FILE
// i.e., For a file foo.js, this will be true if run via node foo.js, but false if run by require('./foo').

console.log(require.main === module);       // TRUE

// THE NAME OF THE MAIN MODULE CAN BE ACCESSED:

require.main.filename;      // ABSOLUTE PATH OF THE MAIN MODULE

// Core Modules
// Core modules are always preferentially loaded if their identifier is passed to require(). 
// For instance, require('http') will always return the built in HTTP module, even if there is a 
// file by that name.

// File Modules
// If the exact filename is not found, then Node.js will attempt to load the required filename 
// with the added extensions: .js, .json, and finally .node.
// Without a leading '/', './', or '../' to indicate a file, the module must either be a core 
// module or is loaded from a node_modules folder.
// If the given path does not exist, require() will throw an Error with its code property set 
// to 'MODULE_NOT_FOUND'.

try {
    require("./abc.js")
} catch(err) {
    console.log(err.code);      // MODULE_NOT_FOUND
}

// Folders as Modules
// It is convenient to organize programs and libraries into self-contained directories, and then 
// provide a single entry point to that library.

// WAY 1:
// Create a package.json file in the root of the folder, which specifies a main module.

// { 
//    "name" : "some-library",
//    "main" : "./lib/some-library.js" 
// }

// If this was in a folder at ./some-library, then require('./some-library') would attempt to 
// load ./some-library/lib/some-library.js.

const geom = require("./Geometry");

console.log(geom.circle.areaOfCircle(5));
console.log(geom.square.perimeterOfSquare(10));

// WAY 2:
// If there is no package.json file present in the directory, or if the 'main' entry is missing or
// cannot be resolved, then Node.js will attempt to load an index.js or index.node file out of 
// that directory.

const geomTwo = require("./GeometryTwo");

console.log(geomTwo.circle.areaOfCircle(5));
console.log(geomTwo.square.perimeterOfSquare(10));


// Loading from node_modules Folders

// If the module identifier passed to require() is not a core module, and does not begin with '/', 
// '../', or './', then Node.js starts at the parent directory of the current module, and adds 
// /node_modules, and attempts to load the module from that location. Node.js will not append
//  node_modules to a path already ending in node_modules.

// For example, if the file at '/home/ry/projects/foo.js' called require('bar.js'), then Node.js
// would look in the following locations, in this order:
/*
$ /home/ry/projects/node_modules/bar.js
$ /home/ry/node_modules/bar.js
$ /home/node_modules/bar.js
$ /node_modules/bar.js
*/


// The module wrapper
// Before a module's code is executed, Node.js will wrap it with a function wrapper that looks
//  like the following:

(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});

// By doing this, Node.js achieves a few things:

// 1. It keeps top-level variables (defined with var, const or let) scoped to the module rather than 
// the global object.

// 2. It helps to provide some global-looking variables that are actually specific to the module:
// A) The module and exports objects that the implementor can use to export values from the module.
// B) The convenience variables __filename and __dirname.

// The module scope

// __dirname        The directory name of the current module. 
// __filename       The file name of the current module. 
// exports          A reference to the module.exports that is shorter to type.
// module           A reference to the current module

// require.resolve(path, options)
// Use require() to look up the location of a module, and return the resolved filename.

// require.resolve.paths(path)
// Returns an array containing the paths searched during resolution of request or null if the 
// request string references a core module


// module Object

// module.children      The module objects required for the first time by this one.
// module.exports
// module.filename      The fully resolved filename of the module.
// module.id            The identifier for the module. Typically this is the fully resolved filename.
// module.loaded        Whether or not the module is done loading, or is in the process of loading.
// module.parent        The module that first required this one.
// module.paths         The search paths for the module.
// module.require(id)   The module.require() method provides a way to load a module as if require() was called from the original module.

console.log(module.children);
console.log(module.parent);
console.log(module.filename);
console.log(module.id);
console.log(module.paths);

// The "M"odule Object
// Provides general utility methods when interacting with instances of Module
    
const Module = require("module");

// Module.builtinModules                    A list of the names of all modules provided by Node.js.
// Module.createRequire(filename)           Filename to be used to construct the require function.
// Module.createRequireFromPath(filename)   Deprecated Version Of createRequire()

console.log(Module.builtinModules);





