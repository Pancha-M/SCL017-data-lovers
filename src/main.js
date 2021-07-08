import { operation } from './data.js';
// import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

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
document.getElementById('searchInput').addEventListener("keyup", operation.searchInputFilter);


for (let i = 0; i < data.pokemon.length; i++) {
    document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
}



document.getElementById('generationButton').addEventListener('click', function () {
    document.getElementById("generationOverlay").style.display = "flex";
    document.getElementById("typeOverlay").style.display = "none"
    document.getElementById("weaknessesOverlay").style.display = "none"
});
document.getElementById('generationOverlay').addEventListener('click', function () {
    document.getElementById("generationOverlay").style.display = "none"
});


document.getElementById('typeButton').addEventListener('click', function () {
    document.getElementById("typeOverlay").style.display = "flex";
    document.getElementById("generationOverlay").style.display = "none"
    document.getElementById("weaknessesOverlay").style.display = "none"
});
document.getElementById('typeOverlay').addEventListener('click', function () {
    document.getElementById("typeOverlay").style.display = "none"
});


document.getElementById('weaknessesButton').addEventListener('click', function () {
    document.getElementById("weaknessesOverlay").style.display = "flex";
    document.getElementById("generationOverlay").style.display = "none"
    document.getElementById("typeOverlay").style.display = "none"
});
document.getElementById('weaknessesOverlay').addEventListener('click', function () {
    document.getElementById("weaknessesOverlay").style.display = "none"

});


document.getElementById('kantoButton').addEventListener('click', operation.generationFilter);
document.getElementById('johtoButton').addEventListener('click', operation.generationFilter);


document.getElementById('normalTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('fightingTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('flyingTypeButton').addEventListener("click", operation.pokemonFilterType)  
document.getElementById('poisonTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('groundTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('rockTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('bugTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('ghostTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('steelTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('fireTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('waterTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('grassTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('electricTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('psychicTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('iceTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('dragonTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('darkTypeButton').addEventListener("click", operation.pokemonFilterType)
document.getElementById('fairyTypeButton').addEventListener("click", operation.pokemonFilterType)


document.getElementById('weakAgainstNormalButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstFightingButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstFlyingButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstPoisonButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstGroundButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstRockButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstBugButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstGhostButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstSteelButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstFireButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstWaterButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstGrassButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstElectricButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstPsychicButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstIceButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstDragonButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstDarkButton').addEventListener("click", operation.pokemonFilterWeakness)
document.getElementById('weakAgainstFairyButton').addEventListener("click", operation.pokemonFilterWeakness)
