// Routing refers to the mechanism for serving the client the content it has asked for. For web-based client/server applications, 
// the client specifies the desired content in the URL; specifically, the path and querystring 

const http = require("http");

const server = http.createServer((req, res) => {
    let trimmedURL = req.url.replace(/\/?(\?.*)?$/g, "").toLowerCase();
    switch(trimmedURL) {
        case "": 
            res.writeHead(200, {"content-type": "text/plain"});
            res.write("Welcome to home page!");
            break;
        case "/about":
            res.writeHead(200, {"content-type": "text/plain"});
            res.write("Welcome to about page");
            break;
        default:
            res.writeHead(404, {"content-type": "text/plain"});
            res.write("Not Found");
            break;
    }
    res.end();
});

server.listen(3000);

console.log("Server running on localhost:3000. Press ctrl-c to terminate..");