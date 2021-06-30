import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log(example);
console.log(data);

const containerRoot = document.getElementById('root');



/* document.body.onload = addElement;
function addElement() {
    //    crea un nuevo div
    //     y añade contenido
    var divInputButton = document.createElement("div");
    divInputButton.className = "divInputButton"
    var inputSearch = document.createElement("input");
    inputSearch.value = "Ingresa el nombre de un pokemon";
    inputSearch.className = "inputSearch"
    divInputButton.appendChild(inputSearch);
    var btnSearch = document.createElement("button");
    btnSearch.type = "button";
    btnSearch.innerText = "buscar";
    btnSearch.className = "btnSearch"
    divInputButton.appendChild(btnSearch);
    //   //insertar el div entre el root y el container de las cartas
    containerRoot.insertBefore(divInputButton);
}
 */

let htmlCode = '';

const pokemonNames = data.pokemon.name;


const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton")

const selection = () => {
const userPokemonName = searchInput.value.toLowerCase();
    for(let pokemonName of pokemonNames);
let pokemonNames = pokemonName.pokemonNames;
if(pokemonNames.indexOf(userPokemonName) !== 1){

}

// searchButton.addEventListener("click",selection)


data.pokemon.forEach(element => {
    htmlCode += `<div id=${element.num} class="pokemonCard">
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

for (let i = 0; i < data.pokemon.length; i++ ){
document.querySelectorAll(".pokemonCard")[i].addEventListener("click", myFunction);
}

function myFunction(){
    let clickedPokemonId = event.currentTarget.getAttribute("id");
    sessionStorage.setItem("clickedPokemonId", clickedPokemonId);
    window.location.href = "pokemonProfile.html";
}




