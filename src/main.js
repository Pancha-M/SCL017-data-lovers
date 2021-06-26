import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example);
console.log(data);

const containerRoot = document.getElementById('root');


let htmlCode = '';


data.pokemon.forEach(element => {

    htmlCode += `<div id="${element.num}" class="pokemonCard">
                    <div class="num">${"#" + element.num}</div>
                    <img class= "img" src=${element.img}>
                    <div class="name">${element.name}</div>
                    <div class=type>`
    element.type.forEach(type => {
        htmlCode += `<div class="${type}">${type}</div>`
    });
    htmlCode += `</div>
                 </div>`

    containerRoot.innerHTML = htmlCode;
});

for (let i = 0; i < data.pokemon.length; i++) {
    document.querySelectorAll(".pokemonCard")[i].addEventListener("click", myFunction)
}

function myFunction() {
    let clickedPokemonId = event.currentTarget.getAttribute("id");
    sessionStorage.setItem("clickedPokemonId", clickedPokemonId)
    window.location.href = "pokemonProfile.html";
}


/* for (let i = 0; i < data.pokemon.length; i++) {
    document.querySelectorAll(".pokemonCard")[i].addEventListener("click", myFunction)
}

function myFunction() {

    let clickedPokemonId = event.currentTarget.getAttribute("id");

    console.log(event.currentTarget.getAttribute("id"))

    document.getElementById("searchEngine").style.visibility = 'hidden';
    document.getElementById("categories").style.visibility = 'hidden';

    let nextPokemonId = 0;
    let previousPokemonId = 0;

    switch (clickedPokemonId) {
        case "001":
            clickedPokemonId--;
            nextPokemonId = clickedPokemonId + 1;
            htmlCode =
                `<div>
                ${data.pokemon[clickedPokemonId].name}
                <button>${data.pokemon[nextPokemonId].name + " #" + data.pokemon[nextPokemonId].num}</button>
            </div>`;
            break;

        case "251":
            clickedPokemonId--
            previousPokemonId = clickedPokemonId - 1;
            htmlCode =
                `<div>
                <button>${data.pokemon[previousPokemonId].name + " #" + data.pokemon[previousPokemonId].num}</button>
                ${data.pokemon[clickedPokemonId].name}    
            </div>`;
            break;

        default:
            clickedPokemonId--
            nextPokemonId = clickedPokemonId + 1;
            previousPokemonId = clickedPokemonId - 1;
            htmlCode = `<div>
                <button>${data.pokemon[previousPokemonId].name + " #" + data.pokemon[previousPokemonId].num}</button>
                ${data.pokemon[clickedPokemonId].name}
                <button>${data.pokemon[nextPokemonId].name + " #" + data.pokemon[nextPokemonId].num}</button>
            </div>`;

    }
    containerRoot.innerHTML = htmlCode;
} */











/* if (clickedPokemonId == "001") {
    clickedPokemonId--
    let nextPokemonId = clickedPokemonId + 1;

    htmlCode =
        `<div>
        ${data.pokemon[clickedPokemonId].name}
        <button>${data.pokemon[nextPokemonId].name + " #" + data.pokemon[nextPokemonId].num}</button>
    </div>`;
} else {
    clickedPokemonId--
    let previousPokemonId = clickedPokemonId - 1;
    let nextPokemonId = clickedPokemonId + 1;
    htmlCode = `<div>
        <button>${data.pokemon[previousPokemonId].name + " #" + data.pokemon[previousPokemonId].num}</button>
        ${data.pokemon[clickedPokemonId].name}
        <button>${data.pokemon[nextPokemonId].name + " #" + data.pokemon[nextPokemonId].num}</button>
    </div>`;
}

containerRoot.innerHTML = htmlCode */






/* function myFunction() {

    let clickedPokemonId = event.currentTarget.getAttribute("id");

    document.getElementById("searchEngine").style.visibility = 'hidden';
    document.getElementById("categories").style.visibility = 'hidden';

    if (clickedPokemonId !== 0) {
        clickedPokemonId--
        let previousPokemonId = clickedPokemonId-1;
        let nextPokemonId = clickedPokemonId+1;

        containerRoot.innerHTML =
        `<div>
            <button>${data.pokemon[previousPokemonId].name + " #" + data.pokemon[previousPokemonId].num}</button>
            ${data.pokemon[clickedPokemonId].name}
            <button>${data.pokemon[nextPokemonId].name + " #" + data.pokemon[nextPokemonId].num}</button>
        </div>`;


    }
} */



