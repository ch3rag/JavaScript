// ASYNCHRONOUS JAVSCRIPT AND XML
// MODERN BROWSERS USE JSON RATHER THAN XML
// NOW IT HAS BECOME AJAJ

// FETCH API
// A REPONSE IS CONSIDERED OK FOR STATUS CODE 200 TO 299

fetch(url)
.then(response => {
    if(response.ok) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
})
.then(response => processTheResponse(response))
.catch(error => console.log("There was an error!"));

// PROPERTIES OF RESPONSE OBJECT
// 1. HEADERS
// CONTAINS HEADER ASSOCIATED WITH THE RESPONSE

// 2. URL
// STRING CONTAINING URL OF THE RESPONSE

// 3. REDIRECTED
// A boolean value that specifies if the response is the result of a redirect

// 4. TYPE
// A string value of “basic”, “cors”, “error” or “opaque”. A value of
// “basic” is used for a response from the same domain. A value of “cors” means
// the data was received from a valid cross-origin request from a different
// domain. A value of “opaque” is used for a response received from “no-cors”
// request from another domain, which means access to the data will be severely
// restricted. A value of “error” is used when a network error occurs.

// METHODS OF THE RESPONSE OBJECT
// 1. REDIRECT(URL)
// USED TO REDIRECT TO ANOTHER URL
// IT IS "NOT" SUPPORTED ANYMORE :(
fetch(url)
.then(response => response.redirected(newURL, optionalStatusCode))
.catch(error => console.log("ERROR"))

// 2. TEXT()
// The text() method takes a stream of text from the response, reads it to
// completion and then returns a promise that resolves to a USVSting object that can
// be treated as a string in JavaScript.

fetch(url)
.then(response => response.text())
.then(text => processText(text))
.catch(error => console.log("ERROR"));

// 3. BLOB
// The blob() method is used to read a file of raw data, such as an image or a
// spreadsheet. Once it has read the whole file, it returns a promise that resolves
// with a blob object.

fetch(url)
.then(response => response.blob())
.then(file => processFile(file))
.catch(error => console.log("ERROR"));

// file.type RETURNS MIME (Multipurpose Internet Mail Extensions) TYPE OF RECEIVED FILE

// 4. JSON()
// JSON is probably the most common format for AJAX responses. The json()
// method is used to deal with these by transforming a stream of JSON data into a
// promise that resolves to a JavaScript object.

fetch(URL)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log("ERROR"));

// CREATING CUSTOM RESPONSES

const response = new Response("Hello!", {
    ok: true,
    status: 200,
    statusText: "OK",
    type: "cors",
    url: "/api"
});

// REQUEST OBJECT
// PROVIDE MORE FINE GRAIN CONTROL OVER THE REQUEST MADE TO THE SERVER

// PROPERTIES
// 1. URL
// The URL of the requested resource (the only property that is required).

// 2. METHOD
// A string that specifies which HTTP method should be used for the request. By default, this is GET

// 3. HEADERS
// This is a Headers object (see later section) that provides details of the request’s headers.

// 4. MODE
// Allows you to specify if CORS is used or not. CORS is enabled by default

// 5. CACHE
// Allows you to specify how the request will use the browser’s cache.
// For example, you can force it to request a resource and update the cache with
// the result, or you can force it to only look in the cache for the resource.

// 6. CREDENTIALS
// Lets you specify if cookies should be allowed with the request.

// 7. REDIRECT
// Specifies what to do if the response returns a redirect. There’s a
// choice of three values: “follow” (the redirect is followed), “error” (an error is
// thrown) or “manual” (the user has to click on a link to follow the redirect).

// HTTP VERBS
// In HTTP’s terms, verbs are called “request methods”, and they determine how the server should
// respond to a particular request. They mean that, if a URL defines a resource (a blog post, for
// example, or an image), different actions can be performed on that resource without needing to
// create different URLs or pass different types of request data.

// The valid HTTP methods are GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, CONNECT, and PATCH

// GET
// GET is, as discussed, by far the most common type of request. Along with HEAD, it’s the only one
// that webservers are required to implement. It also has some special qualities. GET requests should
// fetch information, and that’s it; they should have no side-effects, make no modifications to the
// system, create nothing, and destroy nothing.

// HEAD
// A HEAD request is functionally identical to a GET, but instead of returning the response body
// so, typically, the HTML content of a page, or the JSON result returned by an API, and so on
// only the headers are returned. This allows you to check the headers before deciding whether
// or not to fetch the whole body. So, you might check what the Last-Modified value was, to see
// if your local copy was out of date; if it was, you could then make a GET request.

// POST
// A POST request is a statement by the client that a new “subordinate resource” should be created
// beneath the given URI. In practice, that means that POST requests should be used for things
// like adding a new post to a messageboard thread, adding a new post to a blog; or sending a
// message via a contact form.

// PUT
// A PUT request instructs the server to replace a resource. So if you were to send the request.

// DELETE
// Perhaps the simplest of all to understand, a DELETE request instructs the server to delete the
// resource identified by the given URL.

// CREATING CUSTOM REQUESTS

const request = new Request(url, {
    method: "GET",
    mode: "cors",
    redirect: "follow",
    cache: "no-cache"
});

// WE CAN THEN USE THIS REQUEST TO FETCH

fetch(request)
.then(response => console.log(response))
.catch(error => console.log(error));

// WE CAN ALSO DO THIS AT ONCE IN FETCH

fetch(url, {
    method: "GET",
    mode: "cors",
    redirect: "follow",
    cache: "no-cache"
})
.then(response => console.log(response))
.catch(error => console.log(error));

//  HEADERS INTERFACE
// HTTP headers are used to pass on any additional information about a request or
// response. Typical information contained in headers includes the file-type of the
// resource, cookie information, authentication information and when the resource
// was last modified.

const headers = new Headers({
    "Content-Type": "text/plain",
    "Accept-Charset": "utf-8",
    "Accept-Encoding": "gzip,deflate"
});

// HEADERS METHODS

// HAS()
// TO CHECK IF THE HEADER HAS A PROPERTY

if(headers.has("Content-Type")) {
    // DO SOMETHING
}

// GET()
// GETTING VALUE OF THE PROPERTY

let contentType = headers.get("Content-Type");

// SET()
// CREATE A NEW PROPERTY OF UPDATE EXISTING IF ALREADY EXISTS

headers.set("Content-Type", "application/json");

// APPEND()
// CREATE A NEW PROPERTY IN THE HEADER
headers.append("Connection", "Keep-alive");

// DELETE()
// DELETING AN ENTRY
headers.delete("Content-Type");

// IN ADDITION TO THIS keys(), values() AND entries() CAN BE USED TO ITERATE OVER THE HEADERS

for (const [k, v] of headers.entries()) {
    console.log(`${k} => ${v}`);
}

// THESE HEADERS CAN NOW BE USED IN FETCH

const request = new Request(url, {
    headers: headers,
    mode: "cors",
    cache: "no-cache"
});


// FormData Interface
// The Fetch API includes the FormData interface, which makes it much easier to
// submit information in forms using Ajax.

const data = new FormData(form);
// If a form is passed to this constructor function as an argument, the form data
// instance will serialize all the data automatically, ready to be sent using Ajax.

// ADDING ADDITIONAL DATA TO FormData OBJECT

data.append("Name", "Chirag");
