const http = require("http");

http.createServer((req, res) => {
    console.log(req.rawHeaders);
    res.end("Bye!");
}).listen(3000);