const form = document.forms.hero;
form.addEventListener("submit", makeHero);

function makeHero(event) {
    event.preventDefault();
    const hero = {
        "name": form.heroName.value,
        "realName": form.realName.value
    };
    console.log(JSON.stringify(hero));
    return hero;

}