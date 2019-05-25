// then(callback) is used when the promise is fullfilled
// catch(callback) is used when the promise is rejected

async function loadGif() {
    // DATAMUSE API TO GET 6 LETTER WORD
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let dataMuseAPI = `https://api.datamuse.com/words?sp=${chars.charAt(Math.floor(Math.random() * chars.length))}${"?".repeat(Math.floor(Math.random() * 6))}`;
    let giphyAPI = "http://api.giphy.com/v1/gifs/search?&api_key=qumxNc8ObwW96P2aSff907dpJ9Ibu0Pl&limit=1&q=";

    try {
        let wordData = await fetch(dataMuseAPI);
        let wordJSON = await wordData.json();
        let randomWord = wordJSON[Math.floor(Math.random() * 100)].word;
        let giphyData = await fetch(giphyAPI + randomWord);
        let giphyJSON = await giphyData.json();

        let heading = document.createElement("h1");
            heading.innerText = randomWord;
            document.body.appendChild(heading);

        let image = document.createElement("img");
            image.setAttribute("src", giphyJSON.data[0].images["fixed_height"].url);
            document.body.appendChild(image);
    } catch(err) {
        throw new Error(err);
    }
}

loadGif();
