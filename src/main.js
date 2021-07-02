import { operation } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log("Función generationFilter " + operation.generationFilter)
console.log("Función TypeFilter " + operation.typeFilter)
console.log("Función weaknessesFilter " + operation.weaknessesFilter)
console.log(data);

const containerRoot = document.getElementById('root');


let htmlCode = '';

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton")



const buscador = () => {

data.pokemon.forEach(search => {
let dataPokemon = search.name
    htmlCode = "";
    
    const userPokemonName = searchInput.value.toLowerCase();

    for(let name of dataPokemon){
    if(name.indexOf(userPokemonName) !== 1){
        document.getElementById('root').innerHTML = '';

        // htmlCode += `<li>${nombre}</li>`
        // htmlCode += `<div id=${search.num} class="pokemonCard">
        //             <div class="num">${"#" + search.num}</div>
        //             <img class= "img" src=${search.img}>
        //             <div class="name">${search.name}</div>
        //             <div class=type>`
        //            search.type.forEach(type => {
        //                 htmlCode += `<div class="${type}">${type}</div>`
        //             });
                
        //             htmlCode += `</div>
        //                          </div>`
                
                    containerRoot.innerHTML = htmlCode;
              htmlCode +=      `<div>${name.dataPokemon}</div>`
              containerRoot.innerHTML = htmlCode;
    }
}
})
};

searchButton.addEventListener("click",buscador);
// searchInput.addEventListener("keyup",buscador);








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


<<<<<<< HEAD
=======
document.getElementById('searchButton').addEventListener("click", operation.search);
>>>>>>> upstream/master



for (let i = 0; i < data.pokemon.length; i++ ){
document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
}

<<<<<<< HEAD
function myFunction(){
    let clickedPokemonId = event.currentTarget.getAttribute("id");
    sessionStorage.setItem("clickedPokemonId", clickedPokemonId);
    window.location.href = "pokemonProfile.html";
}
=======




>>>>>>> upstream/master
