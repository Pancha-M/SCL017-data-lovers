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

    let pokemonPage = sessionStorage.getItem("searchOrClickedPokemonId")
    let pokemonPageNumber =  parseInt(pokemonPage);
    let searchOrClickedPokemonId = pokemonPageNumber -1 ;
  console.log("numero Pokemon " +searchOrClickedPokemonId)

  let previousPokemon = data.pokemon[searchOrClickedPokemonId].num -1;  
   console.log("previousPokemonLength " +previousPokemon)

   if ( searchOrClickedPokemonId === previousPokemon){

    searchOrClickedPokemonId == data.pokemon.num;
    console.log("valorfinal" + searchOrClickedPokemonId)
   sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
   window.location.href = "pokemonProfile.html";
  }

}



 ,goToNextPokemon: function () {
   let pokemonPage = sessionStorage.getItem("searchOrClickedPokemonId")
    let pokemonPageNumber =  parseInt(pokemonPage);
    let searchOrClickedPokemonId = pokemonPageNumber +1
  console.log("numero Pokemon " + searchOrClickedPokemonId)

  let nextPokemon = data.pokemon[searchOrClickedPokemonId].num-1;  
   console.log("nextPokemonLength " +nextPokemon)
    if (searchOrClickedPokemonId === nextPokemon){

      searchOrClickedPokemonId == data.pokemon.num 
    console.log("valorfinal" + searchOrClickedPokemonId)
     sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
     window.location.href = "pokemonProfile.html";
     
    }
  }


  
  ,generationFilter: function () {

  }

  ,typeFilter: function () {

  }

  ,weaknessesFilter: function () {

  }

};






