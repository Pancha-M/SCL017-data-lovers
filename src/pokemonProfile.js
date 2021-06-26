import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example);
console.log(data);


const containerRoot = document.getElementById('root');
let htmlCode = '';
let clickedPokemonId = sessionStorage.getItem("clickedPokemonId")

console.log(clickedPokemonId)

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
        htmlCode = 
            `<div>
                <button>${data.pokemon[previousPokemonId].name + " #" + data.pokemon[previousPokemonId].num}</button>
                ${data.pokemon[clickedPokemonId].name}
                <button>${data.pokemon[nextPokemonId].name + " #" + data.pokemon[nextPokemonId].num}</button>
            </div>`;

}
containerRoot.innerHTML = htmlCode;
console.log(htmlCode)
