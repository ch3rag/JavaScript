const http = require("http");

const server = http.createServer(function(req, res) {
    res.end("Hello");
});

server.listen(3000);

console.log(server.address());