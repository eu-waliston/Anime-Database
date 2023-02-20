let animeInfo = [];

const animeImg = document.querySelector("#anime-img");
const animeTitle = document.querySelector("#anime-title");
const animeInput = document.querySelector(".anime-nome");


//Populate HTML
function searchedAnime(anime) {
    const card = document.createElement('a');
    card.classList.add("card")


    const animeTitle = document.createElement('h2')
    animeTitle.textContent = anime.title;
    animeTitle.classList.add("h-2")

    const flag = document.createElement('img')
    flag.src = anime.images.jpg.image_url;

    card.append(flag, animeTitle)
    document.querySelector('#card--grid').append(card);

}

function newAnime(anime) {

    const card = document.createElement('a');
    card.classList.add("card")


    const animeTitle = document.createElement('h2')
    animeTitle.textContent = anime.title;
    animeTitle.classList.add("h-2")

    const flag = document.createElement('img')
    flag.src = anime.images.jpg.image_url;

    card.append(flag, animeTitle)
    document.querySelector('#card--grid').append(card)

}

//Get animes from API
async function getAnime() {
    const apiURL = ('https://api.jikan.moe/v4/anime?&limit=30');

    try {
        const response = await fetch(apiURL);
        let res = await response.json();
        animeInfo = res.data;
        console.log(animeInfo);
        animeInfo.forEach(newAnime);

  
    } catch (error) {
        console.log(error);
    }
}

//Form protected
document.getElementById("form--protect").addEventListener("submit", function (event) {
    event.preventDefault()
});


let searched;
async function animesSearch() {
    searched = animeInput.value
    const apiURL = (`https://api.jikan.moe/v4/anime?q=${searched}/full`);

    try {
        const response = await fetch(apiURL);
        let res = await response.json();
        animeInfo = res.data;
        console.log(animeInfo);
        animeInfo.forEach(searchedAnime);
    } catch (error) {
        console.log(error);
    }

}

//Event Lisntenner
animeInput.addEventListener("change", animesSearch)


//on load
animesSearch();
getAnime();