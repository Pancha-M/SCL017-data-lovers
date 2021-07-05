import { operation } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log("Función generationFilter " + operation.generationFilter)
console.log("Función TypeFilter " + operation.typeFilter)
console.log("Función weaknessesFilter " + operation.weaknessesFilter)
console.log(data);

const containerRoot = document.getElementById('root');


let htmlCode = '';

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


document.getElementById('searchButton').addEventListener("click", operation.search);



for (let i = 0; i < data.pokemon.length; i++ ){
document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
}





