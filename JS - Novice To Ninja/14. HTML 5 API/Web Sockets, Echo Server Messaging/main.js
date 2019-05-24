const URL = "wss://echo.websocket.org/";
const outputDiv = document.querySelector("#output");
const form = document.forms[0];

// CREATE A CONNECTION OBJECT
const connection = new WebSocket(URL);


// When the code new WebSocket(URL) runs, it creates an instance of a WebSocket
// object and tries to connect to the URL. When this is successful, it fires an event
// called “open”.

connection.addEventListener("open", () => {
    output("Connected!");
});

form.addEventListener("submit", message);

function message(e) {
    e.preventDefault();
    if(form.message.value === "") return; 
    const text = form.message.value;
    output("Me: " + text);
    connection.send(text);
    form.message.value = "";
}

// This sends the message to the URL that the websocket is connected to. When this message is 
// received, the server will process it and send a response. The connection object waits for the 
// response, and when it receives one, a “message” event is fired.

connection.addEventListener("message", (e) => {
    output("Server: " + e.data);
});

// CLOSE EVENT IS FIRED WHEN CONNECTION IS CLOSED

connection.addEventListener("close", () => {
    output("Disconnected.");
});

// TO CLOSE THE CONNECTION
// connection.close();

// ERROR EVENT
connection.addEventListener("error", (e) => {
    output("Error: " + e.data);
});

function output(message) {
    const para =document.createElement("p");
    para.textContent = message;
    outputDiv.appendChild(para);
}
