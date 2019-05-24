const colors = ["red", "blue", "green", "orange", "purple", "magenta", "yellow", "cyan"]
const colorButton = document.querySelector("#changeColor");

colorButton.addEventListener("click", (e) => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

const resultSpan = document.querySelector("#result");
const form = document.forms[0];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let number = parseInt(form.number.value);
    if(Number.isNaN(number)) {
        resultSpan.textContent = "Invalid Input";
    } else {
        resultSpan.textContent = "Computing... It May Take A While.";
        let myWorker;
        if(typeof(Worker) === "undefined") {
            console.log("Worker Not Supported");
        } else {
            try {
                myWorker = new Worker("./factorizer.js");
                myWorker.postMessage(number);
                myWorker.addEventListener("message", (e) => {
                    resultSpan.textContent = String(e.data);  
                });
            } catch(err) {
                console.log("Error: " + err);
            }
        }
    }
});