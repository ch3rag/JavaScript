// REFERENCING THE FORM
let form;
form = document.forms[0];             // FIRST FORM
form = document.getElementsByTagName("form")[0];
form = document.forms.search;         // CAUTION
form = document.forms["search"];        

// ELEMENTS INSIDE THE FORM
console.log(form.elements);
let [input, button] = form.elements;            //OR
input = form["searchinput"];                    //OR
input = form.searchinput;

// form.submit();          // SUBMIT FORM AUTOMATICALLY(DOESN'T TRIGGER SUBMIT EVENT)
// form.reset();           // RESET FORM AUTOMATICALLY
form.action = "url";    // SET ACTION URL FOR PROCESSING FORM 

// FOCUS ON A INPUT ELEMENT
input.addEventListener("focus", () => { 
    console.log("Focused")
    if(input.value === "Type...") input.value = "";
});

// WHEN ELEMENT GET OUT OF FOCUS(BLUR EVENT)
input.addEventListener("blur", () => {
    console.log("Focus Lost")
    if(input.value === "") input.value = "Type...";
});

// WHEN ELEMENT LOOSES FOCUS AFTER USER HAD MADE CHANGES
input.addEventListener("change", () => console.log("Change Has Been Made"));


// GETTING AND SETTING VALUES OF FORM ELEMENT
input.value = "Type...";        // SET
console.log(input.value);       // GET
// SUBMIT EVENT
form.addEventListener("submit", (event) => {
    console.log("Form Submitted");
    console.log(`You Have Searched For ${input.value}.`);
    event.preventDefault();
});