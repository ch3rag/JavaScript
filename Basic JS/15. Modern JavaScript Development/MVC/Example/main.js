// MODEL

// In JavaScript, a model is often represented by a class that can create new
// instances of an object. This will keep track of any properties the list item has, as
// well as any methods. 

"use strict";


const form = document.forms[0];

class Item {
    constructor(name) {
        this.name = name;

    }
}


// VIEW

// Next we’ll create a controller object. This will be responsible for adding an
// event listener to the form to see when the user adds information. When this
// happens, it will create a new instance of the model and then render the updated
// view.

const controller = {
    watch(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.add(form.name.value);
        }, false);
    },

    add(name) {
        const item = new Item(name);
        view.render(item);
    }
}

const view = {
    render(item) {
        const list = document.querySelector("#list");
        const li = document.createElement("li");
        li.textContent = item.name;
        list.appendChild(li);
        form.name.value = ""; 
    }
}


controller.watch(form);