const form = document.forms.hero;
form.addEventListener("submit", makeHero);
form.heroName.focus();

const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X";
label.append(error);


function validateInLine() {
    const heroName =  this.value.toUpperCase();
    if(heroName.startsWith('X')) {
        error.style.display = "block"; 
    } else {
        error.style.display = "none";
    }
}

form.heroName.addEventListener("change", (e) => {
    console.log("Hero Name is changed");
});

form.heroName.addEventListener("keyup", (e) => {
    validateInLine.call(form.heroName);
});

function makeHero(event) {
    event.preventDefault();
    if(form.heroName.value[0].toUpperCase() === 'X') {
        event.preventDefault();
        alert("Hero Names starting with a letter 'X' are not allowed");
    }
    const hero = {
        "name": form.heroName.value,
        "realName": form.realName.value,
        "powers": [...form.powers].filter(x => x.checked).map(x => x.value),
        "heroType": form.heroType.value,    
        "city": [...form.city].filter(x => x.selected).map(x => x.value)
    };
    console.log(JSON.stringify(hero));
    return hero;
}