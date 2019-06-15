// Creating Server Using Express

const express = require("express");

// create an express app

const app = express();

app.use((req, res) => {
    res.status(200);
    res.type("text/plain");
    res.send("Hello!!")
});


// create a custom port property in app using set()
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log("Server started at localhost:" + app.get("port") + ". Press ctrl-c to terminate..");
});
