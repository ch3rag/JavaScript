// To use the HTTP server and client one must require('http').
const http = require("http");

// HTTP message headers are represented by an object
const headers = {
    "content-type": "application/json",
    "content-length": 67,
    "connection": "keep-alive"
}

// In order to support the full spectrum of possible HTTP applications, 
// Node.js's HTTP API is very low-level. It deals with stream handling 
// and message parsing only. 

// rawHeaders
// Unparesed Array Of Headers


// Class http.Agent

// An Agent is responsible for managing connection persistence and reuse for HTTP clients. It 
// maintains a queue of pending requests for a given host and port, reusing a single socket 
// connection for each until the queue is empty, at which time the socket is either destroyed or put 
// into a pool where it is kept to be used again for requests to the same host and port. Whether it 
// is destroyed or pooled depends on the keepAlive option.

// It is good practice, to destroy() an Agent instance when it is no longer in use, because unused 
// sockets consume OS resources.


