# HTTP PROTOCOL
---
```javascript
             REQUEST
 CLIENT =================> SERVER
 CLIENT <================= SERVER
             RESPONSE
```

## REQUEST MESSAGE

* REQUEST LINE
* HEADERS
* EMPTY LINE
* OPTIONAL MESSAGE BODY

### 1. REQUEST LINE
```
METHOD <SPACE> REQUEST-URI <SPACE> HTTP-VERSION CRLF
```

#### METHODS:

#### 1. GET              
 Retrieve information identified by the Request-URI.

#### 2. POST
 The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
 ######  Request
```http
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

#### 3. PUT
 The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
######  Request
``` http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

######  Response (if target resource doesn't have requested representation)
```
HTTP/1.1 201 Created
Content-Location: /new.html
```

######  Response (if target resource does have requested representation)
```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

#### 4. DELETE
The HTTP DELETE request method deletes the specified resource.

######  Request
```http
DELETE /file.html HTTP/1.1
```
###### Responses
* **_202_** (Accepted) status code if the action will likely succeed but has not yet been enacted.
**_204_** (No Content) status code if the action has been enacted and no further information is to be supplied.
**_200_** (OK) status code if the action has been enacted and the response message includes a representation describing the status.

```html
HTTP/1.1 200 OK 
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1> 
  </body>
</html>
```

#### 5. HEAD
HEAD method requests the headers that are returned if the specified resource would be requested with an HTTP GET method. Such a request can be done before deciding to download a large resource to save bandwidth. A response to a HEAD method should not have a body. If so, it must be ignored.

#### 6. TRACE
'TRACE' is a HTTP request method used for debugging which echo's back input back to the user.

#### 7. CONNECT
The HTTP CONNECT method method starts two-way communications with the requested resource. It can be used to open a tunnel.
######  Request
```http
CONNECT server.example.com:80 HTTP/1.1 
Host: server.example.com:80 
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

#### 8. PATCH
The HTTP PATCH request method applies partial modifications to a resource. Unlike PUT which only allows complete replacement of a document.
######  Request
```http
PATCH /file.txt HTTP/1.1 
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```
###### Response
A successful response is indicated with a 204 response code.
```http
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```
#### 9. OPTIONS
The HTTP OPTIONS method is used to describe the communication options for the target resource. The client can specify a URL for the OPTIONS method, or an asterisk (*) to refer to the entire server.

###### Request
```http
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```
```bash
curl -X OPTIONS http://example.org -i
```
###### Response
```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
```
