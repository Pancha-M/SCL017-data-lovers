import data from './data/pokemon/pokemon.js';

const containerRoot = document.getElementById('root');

export const operation = {


  //BUSCADOR BOTON 
  search: function () {

    let searchPokemonByName = document.getElementById('searchInput').value.toLowerCase()
    let searchOrClickedPokemonId = ''
    data.pokemon.forEach(element => {
    if (searchPokemonByName == element.name){
     
      searchOrClickedPokemonId = element.num
      sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
      window.location.href = "pokemonProfile.html";
      }
    })

  }

  //BUSCAR Y FILTRAR A TRAVES DEL INPUT
  ,searchInputFilter: function (){
    let pokemonSearchFilter = data.pokemon.filter(function(pokemon){
      let inputValue = document.getElementById('searchInput').value.toLowerCase()
        console.log("valor ingresado " + inputValue )
      
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


    //DESPLEGAR PERFIL COMPLETO POKEMON
  ,clickedPokemonProfileDisplay: function () {
    let searchOrClickedPokemonId = event.currentTarget.getAttribute("id");
    sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
    window.location.href = "pokemonProfile.html";
  }


    //BOTON HACIA ATRAS PERFIL COMPLETO POKEMON
  ,goToPreviousPokemon: function () {

    let pokemonPage = sessionStorage.getItem("searchOrClickedPokemonId");
    let pokemonPageNumber =  parseInt(pokemonPage);
    let searchOrClickedPokemonId = pokemonPageNumber -1 ;
  console.log("numero Pokemon " +searchOrClickedPokemonId);

  let previousPokemon = data.pokemon[searchOrClickedPokemonId].num -1;  
   console.log("previousPokemonLength " +previousPokemon);

   if ( searchOrClickedPokemonId === previousPokemon){

    searchOrClickedPokemonId == data.pokemon.num;
    console.log("valorfinal" + searchOrClickedPokemonId);
   sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
   window.location.href = "pokemonProfile.html";
  }

}


  //BOTON SIGUIENTE PERFIL COMPLETO POKEMON
 ,goToNextPokemon: function () {
   let pokemonPage = sessionStorage.getItem("searchOrClickedPokemonId")
    let pokemonPageNumber =  parseInt(pokemonPage);
    let searchOrClickedPokemonId = pokemonPageNumber +1
  console.log("numero Pokemon " + searchOrClickedPokemonId)

  let nextPokemon = data.pokemon[searchOrClickedPokemonId].num-1;  
   console.log("nextPokemonLength " +nextPokemon);
    if (searchOrClickedPokemonId === nextPokemon){

      searchOrClickedPokemonId == data.pokemon.num 
    console.log("valorfinal" + searchOrClickedPokemonId)
     sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
     window.location.href = "pokemonProfile.html";
     
    }
  }

    //FILTRO POR GENERACION
  ,generationFilter: function () {

    let pokemonGeneration = data.pokemon.filter(function(pokemon){
      let selectedGeneration = event.currentTarget.getAttribute("value");

        return pokemon.generation.name === selectedGeneration;
    })

      console.log(pokemonGeneration);

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

  //FILTRO POR TIPO
  ,pokemonFilterType: function () {

    let pokemonTypeFilter = data.pokemon.filter(function(pokemon){
      let selectedType = event.currentTarget.getAttribute("value");

         let pokemonType = pokemon.type.filter(function(type){
            return type == selectedType; 
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

  //FILTRO POR DEBILIDAD
  ,pokemonFilterWeakness: function () {

    let pokemonWeaknessFilter = data.pokemon.filter(function(pokemon){
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

};






