const express = require("express");
const app = express();

// routes must be place above catch all handler

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("Index Page")
});

// wild card to specify about+anythig (aboutcats, aboutdogs etc.)
app.get("/about*", (req, res) => {
    res.type("text/plain");
    res.send("About page");
})

// catch all handler used for 404 defined by 2 parameter middleware
app.use((req, res) => {
    res.status(404);
    res.type("text/plain");
    res.send("404 - Not Found")
});

// 500 handler defined by 4 parameter call back middleware
app.use((error, req, res, next) => {
    res.status(500)
    res.type("text/plain");
    res.send("500 - Server Error")
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log("Server started at localhost:" + app.get("port") + ". Press ctrl-c to terminate..");
});
