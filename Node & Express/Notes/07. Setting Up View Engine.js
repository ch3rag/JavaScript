// A template engine enables you to use static template files in your application. At runtime, the template engine replaces 
// variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This 
// approach makes it easier to design an HTML page.

// Set up these two app settings:

// views: the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views 
// directory in the application root directory.

// view engine: the template engine to use.


const express = require("express");
const app = express();
const handlebars = require("express-handlebars");


// some options to show how it can be configured. 
// you can use default to make it more convenient
// https://github.com/ericf/express-handlebars for more options

// configure a ".hbs" engine
app.engine(".hbs", handlebars.create({
    defaultLayout: "skeleton",      // defaults to: main
    extname: ".hbs"                 // defaults to: .handlebars
}).engine);

// 
app.set("view engine", ".hbs");


app.get("/", (req, res) => {
    res.render("main", {
        title: "Home"
    });
});


app.get("/about*", (req, res) => {
    res.render("about", {
        title: "About us"
    });
})


app.use((req, res) => {
    res.status(404);
    res.render("404", {
        title: "Not Found"
    });
});


app.use((error, req, res, next) => {
    res.status(500)
    res.render("500", {
        title: "Server Error"
    });
});


app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log("Server started at localhost:" + app.get("port") + ". Press ctrl-c to terminate..");
});
