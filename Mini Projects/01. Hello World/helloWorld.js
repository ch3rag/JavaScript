const http = require("http");

// http.createServer(func)
// THE FUNCTION IS INVOKED EVERYTIME A REQUEST IS MADE TO THE SERVER
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end("Hello <i>World<i>");
    // end FUNCTION CLOSES THE CONNECTION
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate...");