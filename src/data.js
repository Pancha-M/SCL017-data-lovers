import data from './data/pokemon/pokemon.js';

export const operation = {

  search: function () {
    let searchPokemonByName = document.getElementById('searchInput').value.toLowerCase()
    let searchOrClickedPokemonId = ''
    data.pokemon.forEach(element => {
    if (searchPokemonByName == element.name){
     
      searchOrClickedPokemonId = element.num
      sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
      window.location.href = "pokemonProfile.html";
      }
    });

  }

  ,clickedPokemonProfileDisplay: function () {
    let searchOrClickedPokemonId = event.currentTarget.getAttribute("id");
    sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
    window.location.href = "pokemonProfile.html";
  }

  ,goToPreviousPokemon: function () {

  }

  ,goToNextPokemon: function () {

  }
  
  ,generationFilter: function () {

  }

  ,typeFilter: function () {

  }

  ,weaknessesFilter: function () {

  }

};






