
setInterval(function sizer() {
    const list = document.querySelector("#items");
    Object.assign(list.style, {
        position: "absolute",
        border: "1px solid black",
        width: (Math.random() * 200) + "px",
        height: (Math.random() * 200) + "px",
        boxShadow: "0px 0px 5px 0px black",
        overflow: "hidden",
        padding: "2px",
        listStyle: "none"
    });
}, 1000);


var items = ["Banana", "Apple", "Oranges", "Guava", "Grapes"];

setInterval(function addItem() {
    const listItem = document.createElement("li");
    listItem.innerText = items[Math.floor(items.length * Math.random())]
    document.querySelector("#items").appendChild(listItem);
}, Math.random() * 500);

setInterval(function addItem() {
    const list = document.querySelector("#items")
    list.removeChild(list.lastElementChild);
}, Math.random() * 3000);

const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            console.log("Added: ", mutation.addedNodes[0]);
        }
        if (mutation.removedNodes.length) {
            console.log("Removed: ", mutation.removedNodes[0]);
        }
        if(mutation.attributeName === "style") {
            centerModal();
        }
    })
});
const list = document.querySelector("#items");

observer.observe(list, {
    childList: true,
    attributes: true
});

function centerModal() {
    const items = document.querySelector("#items");
    const width = parseInt(items.style.width, 10);
    const height = parseInt(items.style.height, 10);
    Object.assign(items.style, {
        top: "50%",
        left: "50%",
        marginTop: -(height/2) + "px",
        marginLeft: -(width/2) + "px"
    })
}
