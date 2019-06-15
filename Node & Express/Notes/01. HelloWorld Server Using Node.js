const http = require("http");

// http.createServer(callback)
// THE FUNCTION IS INVOKED EVERYTIME A REQUEST IS MADE TO THE SERVER
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><head><title>Hello</title></head><body><h1>Hello World</h1></body></html>");
    res.end();
});

server.listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate...");