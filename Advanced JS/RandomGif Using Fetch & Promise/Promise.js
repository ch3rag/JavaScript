// then(callback) is used when the promise is fullfilled
// catch(callback) is used when the promise is rejected


// DATAMUSE API TO GET 6 LETTER WORD
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let dataMuseAPI = `https://api.datamuse.com/words?sp=${chars.charAt(Math.floor(Math.random() * chars.length))}${"?".repeat(Math.floor(Math.random() * 6))}`;
let giphyAPI = "http://api.giphy.com/v1/gifs/search?&api_key=qumxNc8ObwW96P2aSff907dpJ9Ibu0Pl&limit=1&q=";

fetch(dataMuseAPI)
    .then(response => {
        return response.json()
    })
    .then(json => {
        let randomWord = json[Math.floor(Math.random() * 100)].word;
        let heading = document.createElement("h1");
        heading.innerText = randomWord;
        document.body.appendChild(heading);
        return fetch(giphyAPI + randomWord);
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        let image = document.createElement("img");
        image.setAttribute("src", json.data[0].images["fixed_height"].url);
        document.body.appendChild(image);
    })
    .catch(err => {
        console.log(err);
    })