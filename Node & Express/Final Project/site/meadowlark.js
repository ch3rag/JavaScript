const express = require("express");
const fortune = require("./lib/fortune.js");

var app = express();

var handlebars = require("express3-handlebars").create({
    defaultLayout: "main"
});

app.set("port", process.env.PORT || 3000);

// use handlebars.engine to render *.handlebars file
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars")

// setup public directory for static files
app.use(express.static(__dirname + "/public"));


// defining a test middleware
// when using a view engine with Express, you can set intermediate data on res.locals in your middleware, and that data will 
// be available in your view
const testWare = (req, res, next) => {
    res.locals.showTests = app.get("env") != "production" && req.query.test === "1";
    next();
};

app.use(testWare);

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", (req, res) => {
    res.render("about", {
        fortune: fortune.getFortune()
    });
});

// This will be used for every request to app that  does not intercepted by app.get()
app.use((req, res) => {
    res.status(404);
    res.render("404")
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render("500")
});

app.listen(app.get("port"), () => {
    console.log("Express started on localhost:" + app.get("port") + ". Press ctrl-c to terminate..");
});


