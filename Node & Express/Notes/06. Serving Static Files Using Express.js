const express = require("express");
const app = express();

// to serve static files use express.static middleware

app.use(express.static(__dirname + "/public", {
    index: false        // dont serve index.html for root request
}));

app.get("/logo", (req, res) => {
    res.type("text/html");
    res.send("<img src='/img/logo.png' alt='logo' />");
});


app.get("/", (req, res) => {
    res.type("text/html");
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/about*", (req, res) => {
    res.type("text/html");
    res.sendFile(__dirname + "/public/index.html");
})


app.use((req, res) => {
    res.status(404);
    res.type("text/plain");
    res.send("404 - Not Found")
});


app.use((error, req, res, next) => {
    res.status(500)
    res.type("text/plain");
    res.send("500 - Server Error")
});


app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log("Server started at localhost:" + app.get("port") + ". Press ctrl-c to terminate..");
});
