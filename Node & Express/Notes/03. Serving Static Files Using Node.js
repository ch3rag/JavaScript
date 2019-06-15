const http = require("http");
const fs = require("fs");

function serveStaticFile(res, path, contentType, responseCode) {

    // __dirname will resolve to the directory the executing script resides in.
    // So if your script resides in /home/sites/app.js, __dirname will resolve
    // to /home/sites.
    
    fs.readFile(__dirname + path, (error, data) => {
        if(error) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.write("500 - Internal Error");
            res.end();
        } else {
            res.writeHead(responseCode, {
                "Content-Type": contentType
            });
            res.write(data)
            res.end();
        }
    });
}

http.createServer((req, res) => {
    const path = req.url.replace(/\/?(\?.*)?$/, "").toLowerCase();
    switch(path) {
        case "":
            serveStaticFile(res, "/public/index.html", "text/html", 200);
            break;
        case "/about":
            serveStaticFile(res, "/public/about.html", "text/html", 200);
            break;
        case "/img/logo.png":
            serveStaticFile(res, "/public/img/logo.png", "image/png", 200);
            break;
        default:
            serveStaticFile(res, "./public/notfound.html", "text/html", 404);
            break;
    }
}).listen(3000);

console.log("Server started on localhost:3000. Press ctrl-c to terminate..")
