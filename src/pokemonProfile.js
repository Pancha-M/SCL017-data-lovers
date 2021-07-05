import { operation } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log("Función goToPreviousPokemon " + operation.goToPreviousPokemon);
console.log("Función goToNextPokemon " + operation.goToNextPokemon);
console.log(data);

const containerRoot = document.getElementById('root');
let htmlCode = ''

    
    ,searchOrClickedPokemonId = sessionStorage.getItem("searchOrClickedPokemonId")
    ,selectedPokemonIndex = searchOrClickedPokemonId -1
    ,nextPokemonIndex = 0
    ,previousPokemonIndex = 0
    ,selectedPokemonName = data.pokemon[selectedPokemonIndex].name
    ,nextEvolution = Object.prototype.hasOwnProperty.call(data.pokemon[selectedPokemonIndex].evolution, 'nextEvolution')
    ,nextEvolutionName = ''
    ,nextEvolutionCandyCost = ''
   
    ,nextNextEvolutionCandyCost  = '' 
   
    ,prevEvolution = Object.prototype.hasOwnProperty.call(data.pokemon[selectedPokemonIndex].evolution, 'prevEvolution')
    ,prevEvolutionName = ''
    ,prevEvolutionCandyCost = ''
   
    ,prevPrevEvolutionName = ''
    ,prevPrevEvolutionCandyCost = ''

    let nextNextEvolution = false
    if (nextEvolution==true){
        nextNextEvolution = Object.prototype.hasOwnProperty.call(data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0], 'nextEvolution') 
     }

    let prevPrevEvolution = false
    if (prevEvolution==true){
        nextNextEvolution = Object.prototype.hasOwnProperty.call(data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0], 'prevEvolution') 
    }

    let nextEvolutionLength = 0
    if(nextEvolution==true){
        nextEvolutionLength = data.pokemon[selectedPokemonIndex].evolution.nextEvolution.length
    }

     

switch(searchOrClickedPokemonId){
    case "001":
        nextPokemonIndex = selectedPokemonIndex +1;
    htmlCode = 
        `<div class=prevOrNextButtons>
            <button class=nextPokemonButton>${data.pokemon[nextPokemonIndex].name + " #" + data.pokemon[nextPokemonIndex].num}</button>
        </div>`
    break;

    case "251":
        previousPokemonIndex = selectedPokemonIndex -1;
    htmlCode = 
        `<div class=prevOrNextButtons>
           <button class=prevPokemonButton>${data.pokemon[previousPokemonIndex].name + " #" + data.pokemon[previousPokemonIndex].num}</button>
        </div>`
    break;

    default:
        nextPokemonIndex = selectedPokemonIndex +1;
        previousPokemonIndex = selectedPokemonIndex -1;
    htmlCode = 
        `<div class=prevOrNextButtons>
            <button class=prevPokemonButton>${data.pokemon[previousPokemonIndex].name + " #" + data.pokemon[previousPokemonIndex].num}</button>
            <button class=nextPokemonButton>${data.pokemon[nextPokemonIndex].name + " #" + data.pokemon[nextPokemonIndex].num}</button>
        </div>`
}

htmlCode += `<h1>${data.pokemon[selectedPokemonIndex].name + " #" + data.pokemon[selectedPokemonIndex].num}</h1>
            <figure>
                <img src=${data.pokemon[selectedPokemonIndex].largeImg}>
            </figure>
                <section class=about>
                    <h2 class=aboutTitle >${"Sobre " + data.pokemon[selectedPokemonIndex].name}</h2>
                    <div class = aboutText>${data.pokemon[selectedPokemonIndex].about}</div>
                </section>
                <section class=size>
                    <h2 class=sizeTitle>${"Tamaño"}</h2>
                    <div class = sizeText>
                        <div>${"Altura: " + data.pokemon[selectedPokemonIndex].size.height}</div>
                        <div>${"Peso: " + data.pokemon  [selectedPokemonIndex].size.weight}</div>
                    </div>
                </section>
            <section class=generationType>    
                <div class=generation>
                    <h2 class=generationTitle>${"Generación"}</h2>
                    <div class="${data.pokemon[selectedPokemonIndex].generation.name}">${data.pokemon[selectedPokemonIndex].generation.name}</div>
                </div>
                <div class=type>
                    <h2 class=typeTitle>${"Tipo"}</h2>
                    <div class=types>`
data.pokemon[selectedPokemonIndex].type.forEach(type => {
            htmlCode += `<div class="${type}">${type}</div>`}); 
        htmlCode += `</div>
                </div>  
            </section>    
            <section class=resistantWeakness>      
                    <div class=resistant>
                        <h2>${"Resistente a:"}</h2>
                        <ul>`
data.pokemon[selectedPokemonIndex].resistant.forEach(resistant =>{
                htmlCode += `<li>${resistant}</li>`})
            htmlCode += `</ul>
                    </div>
                    <div class=weakness>
                        <h2>${"Débil contra:"}</h2>
                        <ul>`
data.pokemon[selectedPokemonIndex].weaknesses.forEach(weaknesses =>{
                htmlCode += `<li>${weaknesses}</li>`})
            htmlCode += `</ul>
                    </div>
            </section>
            <section class=stats>
                        <h2>${"Estadísticas"}</h2>
                        <ul>
                            <li>${"Tasa de fuga base: " + data.pokemon[selectedPokemonIndex].encounter['base-flee-rate']}</li>
                            <li>${"Tasa de captura base: " + data.pokemon[selectedPokemonIndex].encounter['base-capture-rate']}</li>
                        </ul>
            </section>
            <section class=evolution>
                        <h2>${"Evoluciones y costo en caramelos"}</h2>`         

switch (true) {
    case prevEvolution == false && nextEvolutionLength <=1 && nextNextEvolution == true:
        //caso 1: 1° pokemon de una familia con una evolución con una evolución (evolución lineal e.g. Bulbasaur) 
            // o primer pokemon de una familia una evolución con 2 o más evoluciones (evolución mixta e.g. Poliwag)
        nextEvolutionName = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].name
        nextEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].candyCost
        nextNextEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].nextEvolution[0].candyCost

        htmlCode += `<div class=evolutionCandy>
                        <h3>${selectedPokemonName}</h3>
                        <figure>
                            <img class=firstArrow src="img/arrowpoint.png">                        
                            <figcaption class=candy>${"Costo en caramelos: " + nextEvolutionCandyCost}<figcaption>
                        </figure>
                        <h3>${nextEvolutionName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png" ">
                            <figcaption class=candy>${"Costo en caramelos: " + nextNextEvolutionCandyCost}<figcaption>
                        </figure>`
        data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].nextEvolution.forEach(nextEvolution => {
                htmlCode += `<h3>${nextEvolution.name}</h3>`}); 
                    `</div>`
                
        break;

    case prevEvolution == true && nextEvolution == true:    
        //caso 2: 2° pokemon de una familia de evolucion lineal (e.g. Ivysaur) o evolución mixta (e.g. Gloom)
        prevEvolutionName = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].name
        prevEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].candyCost
        nextEvolutionName = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].name
        nextEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].candyCost
        htmlCode += `<div class=evolutionCandy> 
                        <h3>${prevEvolutionName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png"> 
                            <figcaption class=candy>${"Costo en caramelos: " + prevEvolutionCandyCost}<figcaption>
                        </figure>
                        <h3>${selectedPokemonName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png"> 
                            <figcaption class=candy>${"Costo en caramelos: " + nextEvolutionCandyCost}<figcaption>
                        </figure>
                        <div>`
        data.pokemon[selectedPokemonIndex].evolution.nextEvolution.forEach(nextEvolution => {
                htmlCode += `<h3>${nextEvolution.name}</h3>`}); 
            htmlCode += `</div>
                    </div>`    
        break;

    case prevEvolution == true && nextEvolution == false && prevPrevEvolution== true:
        //caso 3: 3° pokemon de una familia con una pre evolución con una pre evolucion (e.g. Venusaur)
        prevEvolutionName = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].name
        prevEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].candyCost
        prevPrevEvolutionName = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].prevEvolution[0].name
        prevPrevEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].prevEvolution[0].candyCost
        htmlCode += `<div class=evolutionCandy>
                        <h3>${prevPrevEvolutionName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png"> 
                            <figcaption class=candy>${"Costo en caramelos: " + prevEvolutionCandyCost}<figcaption>
                        </figure>
                        <h3>${prevEvolutionName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png"> 
                            <figcaption class=candy>${"Costo en caramelos: " + prevPrevEvolutionCandyCost}<figcaption>
                        </figure>
                        <h3>${selectedPokemonName}</h3>
                    </div>`
        break;
    
    case prevEvolution == false && nextEvolutionLength >= 2:
        //caso 4: 1° pokemon de una familia con evolución ramificada (e.g. Eevee)
        nextEvolutionName = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].name
        nextEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].candyCost
        htmlCode += `<div class=evolutionCandy>
                        <h3>${selectedPokemonName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png"> 
                            <figcaption class=candy>${"Costo en caramelos: " + nextEvolutionCandyCost}<figcaption>
                        </figure>
                        <div>`
        data.pokemon[selectedPokemonIndex].evolution.nextEvolution.forEach(nextEvolution => {
                htmlCode += `<h3>${nextEvolution.name}</h3>`}); 
            htmlCode += `</div>
                    </div>`
        break;

    case prevEvolution == false && nextEvolutionLength <=1 && nextEvolution == true  && nextNextEvolution == false: 
        //caso 5: 1° pokemon de una familia con una evolución lineal (e.g. Rattata) 
        nextEvolutionName = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].name
        nextEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.nextEvolution[0].candyCost
        htmlCode += `<div class=evolutionCandy>
                        <h3>${selectedPokemonName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png"> 
                            <figcaption class=candy>${"Costo en caramelos: " + nextEvolutionCandyCost}<figcaption>
                        </figure>
                        <h3>${nextEvolutionName}</h3>
                    </div>`
        break;

    case prevEvolution == true && nextEvolution == false && prevPrevEvolution == false:
        //caso 6 : 2° pokemon de una familia de evolucion lineal sin evoluciones (e.g. Raticatte)
            // o segundos pokemones de una familia de evolución ramificada (e.g. Voporeon, Slowbro, Hitmontop) 
        prevEvolutionName = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].name
        prevEvolutionCandyCost = data.pokemon[selectedPokemonIndex].evolution.prevEvolution[0].candyCost
        htmlCode += `<div class=evolutionCandy>
                        <h3>${prevEvolutionName}</h3>
                        <figure>
                            <img class=secondArrow src="img/arrowpoint.png" >
                            <figcaption class=candy>${"Costo en caramelos: " + prevEvolutionCandyCost}<figcaption>
                        </figure>
                        <h3>${selectedPokemonName}</h3>
                    </div>`
        break;
    
    default:
        //caso 7 : pokemon único sin evoluciones ni pre evoluciones
        htmlCode += `<div class=evolutionCandy>
                        <div>${"Este pokémon no tiene evolucion ni pre evolución"}</div>
                    </div>`

}
            `</section>`

 
containerRoot.innerHTML = htmlCode


