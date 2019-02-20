function doSomething(event) {
    // TYPE OF EVENT
    console.log(event.type);   

    // NODE THAT ORIGINATED THE EVENT
    console.log(event.target)

    // COORDINATED OF MOUSE
    const screenCoord = `X : ${event.screenX}, Y : ${event.screenY}\n`;
    const windowCoord = `X : ${event.clientX}, Y : ${event.clientY}\n`;
    const documentCoord = `X : ${event.pageX}, Y : ${event.pageY}\n`;

    console.log(screenCoord, windowCoord, documentCoord);
}

// ADDING EVENTS TO WINDOW
this.addEventListener("click", doSomething);

// KEYBOARD EVENTS

// KEY IS PRESSED AND AS LONG AS IT IS PRESSED
addEventListener("keydown", (event) => event.target.classList.toggle("highlight"));
addEventListener("keydown", (event) => console.log(`You Presseed ${event.key} Key`));

// USER RELEASES THE KEY
addEventListener("keyup", () => console.log(`You Stopped Pressing The Key On ${new Date()}`));

// INPUT CHARACTER
addEventListener("keypress", (event) => console.log(`You Presseed ${event.key} Key`));



// ALT SHIFT AND CTRL STATUS
addEventListener("keypress", (event) => {
    console.log(`Key Pressed: ${event.key}\nAlt: ${event.altKey}\nShift: ${event.shiftKey}\nControl: ${event.ctrlKey}`);
})


// MOUSE EVENTS
const clickParagraph = document.getElementById("click");
clickParagraph.addEventListener("mousedown", () => console.log("down"));
clickParagraph.addEventListener("mouseup", () => console.log("up"));
clickParagraph.addEventListener("click", () => console.log("click"));

const dblClickParagraph = document.getElementById("dblclick");
dblClickParagraph.addEventListener("dblclick", (event) => event.target.classList.toggle("highlight"));

const mouseParagraph = document.getElementById("mouse");
mouseParagraph.addEventListener("mouseenter", (event) => event.target.classList.toggle("highlight"));
mouseParagraph.addEventListener("mouseleave", (event) => event.target.classList.toggle("highlight"));
mouseParagraph.addEventListener("mousemove", () => console.log("Mouse Moved"));


// TOUCH EVENTS
const touchParagraph = document.getElementById("touch");
// START TOUCHING THE ELEMENT
//touchParagraph.addEventListener("touchstart", () => console.log("Touch Started"));
// PICKS UP FINGER
touchParagraph.addEventListener("touchend", () => console.log("Touch Ended"));
// TOUCHING ALREADY AND THEN ENTERS ELEMENT
touchParagraph.addEventListener("touchenter", () => console.log("Touch Entered"));
// STILL TOUCHING BUT LEAVES THE ELEMENT
touchParagraph.addEventListener("touchleave", () => console.log("Touch Leave"));
// TOUCH BEING INTERRUPED SUCH AS USER LEAVES BROWSER WINDOW
touchParagraph.addEventListener("touchcancel", () => console.log("Touch Cancelled"));


// NUMBER AND COORDINATES OF TOUCHES
touchParagraph.addEventListener("touchstart", (event) => {
    console.log(event.touches, event.touches.length);
    console.log(event.touches[0].screenX, event.touches[0].screenY);
    console.log(event.touches[0].radiusX, event.touches[0].radiusY);
    console.log(event.touches[0].force);
    console.log(event.touches[0].identifier);
});


// REMOVING EVENT LISTENERS
this.removeEventListener("click", doSomething);

// PREVENTING DEFUALT BEHIVIOR 
// SUCH AS BROWSER OPENING A LINK WHEN USER CLICKS IT
const link = document.getElementById("broken");
link.addEventListener("click", () =>  {
   console.log("Broken Link");
   event.preventDefault(); 
});

// EVENT PROPAGATION
// CAPTURING AND BUBBLING

// Bubbling is when the event fires on the element clicked on first, then bubbles up
// the document tree, firing an event on each parent element until it reaches the root
// node.

// Capturing starts by firing an event on the root element, then propagates
// downwards, firing an event on each child element until it reaches the target
// element that was clicked on.

// DEFAULT IS BUBBLING
// CAPTURING CAN BE ENABLED BY PASSING 'true' IN THE THIRD PARAMENT IN addEventListener()

// STOPPING PROPAGATION
// USE event.stopPropagation() IN CALLBACK TO STOP PROPAGATION AT ANY POINT

// EVENT DELEGATION
// ATTACHING EVENT LISTENER TO PARENT NODE TO FIND WHICH CHILD NODE TRIGGERED THE EVENT
document.getElementById("list").addEventListener("click", (event) => {
    //event.target.style.classList.toggle("highlight");
    console.log(event.target.classList.toggle("highlight"));
});


