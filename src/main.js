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
document.getElementById('searchInput').addEventListener("keyup", searchFilter);


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



document.getElementById('kantoButton').addEventListener('click', pokemonFilterGeneration);
document.getElementById('johtoButton').addEventListener('click', pokemonFilterGeneration);



//FILTRO POR GENERACION
function pokemonFilterGeneration () {

    let pokemonGeneration = data.pokemon
    .filter(function(pokemon){
    let selectedGeneration = event.currentTarget.getAttribute("value")
    return pokemon.generation.name === selectedGeneration
})

console.log(pokemonGeneration)

let htmlCode = '';
    pokemonGeneration.forEach(element => {
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

    for (let i = 0; i < pokemonGeneration.length; i++) {
        document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
    }
}

document.getElementById('normalTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('fightingTypeButton').addEventListener("click",pokemonFilterType)
document.getElementById('flyingTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('poisonTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('groundTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('rockTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('bugTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('ghostTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('steelTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('fireTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('waterTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('grassTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('electricTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('psychicTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('iceTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('dragonTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('darkTypeButton').addEventListener("click", pokemonFilterType)
document.getElementById('fairyTypeButton').addEventListener("click", pokemonFilterType)

//FILTRO POR TIPO
function pokemonFilterType () {

    let pokemonTypeFilter = data.pokemon.filter(function(pokemon){
    let selectedType = event.currentTarget.getAttribute("value")
        
     let pokemonType = pokemon.type.filter(function(type){

        
        return type == selectedType 
      
     })
            return pokemonType == selectedType  
    })

  
console.log(pokemonTypeFilter)

let htmlCode = '';
    pokemonTypeFilter.forEach(element => {
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
    })

    for (let i = 0; i < pokemonTypeFilter.length; i++) {
        document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
    }
}

document.getElementById('weakAgainstNormalButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstFightingButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstFlyingButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstPoisonButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstGroundButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstRockButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstBugButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstGhostButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstSteelButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstFireButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstWaterButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstGrassButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstElectricButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstPsychicButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstIceButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstDragonButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstDarkButton').addEventListener("click", pokemonFilterWeakness)
document.getElementById('weakAgainstFairyButton').addEventListener("click", pokemonFilterWeakness)

//FILTRO POR DEBILIDAD
function pokemonFilterWeakness () {

    let pokemonWeaknessFilter = data.pokemon
    .filter(function(pokemon){
    let selectedWeakness = event.currentTarget.getAttribute("value")
     let pokemonWeakness = pokemon.weaknesses.filter(function(weaknesses){

        return weaknesses == selectedWeakness     
     })

    return pokemonWeakness == selectedWeakness
    })
 
  
console.log(pokemonWeaknessFilter)

let htmlCode = '';
pokemonWeaknessFilter.forEach(element => {
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
    })

    for (let i = 0; i < pokemonWeaknessFilter.length; i++) {
        document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
    }
}

function searchFilter () {

    let pokemonSearchFilter = data.pokemon.filter(function(pokemon){
    let inputValue = document.getElementById('searchInput').value.toLowerCase()
    console.log("valor ingresado " + inputValue )
    
    // let namePokemon = pokemon.name.filter(function(name){

    //  return name == pokemonSearchFilter   
    //  })
    return pokemon.name.toLowerCase().includes(inputValue);
})

console.log("pokemones encontrados " + pokemonSearchFilter)

let htmlCode = '';
    pokemonSearchFilter.forEach(element => {
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
})
}
