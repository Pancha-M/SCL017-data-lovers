import {operation} from '../src/data.js';


describe('operation', () => {
  it('should be an object', () => {
    expect(typeof operation).toBe('object');
  });

  describe('operation.search', () => {
    it('should be an function', () => {
      expect(typeof operation.search).toBe('function');
    });

    describe("nombre pokemon ingresado por usuario", () => {
      const pokemonName = "pikachu"
      const pokemonNum =  "025"
      
      test("comprobar que el nombre corresponde con el numero")
      expect(pokemonName). toBe(pokemonNum)
    });
  });

    describe("nombre pokemon ingresado por usuario", () => {
      const pokemonName = "pikachu"
      const pokemonNum =  "025"
      
      test("comprobar que el nombre corresponde con el numero")
      expect(pokemonName).toContainer(pokemonNum);
    });
  // });

 /*  describe('operation.search.searchOrClickedPokemonId', () => {
    it('should be 025 for pikachu search', () => {
      const searchPokemonByName = 'pikachu'
      expect('operation.search.searchOrClickedPokemonId').toBe('025');
    });
  }); */




  describe('operation.clickedPokemonProfileDisplay', () => {
    it('should be an function', () => {
      expect(typeof operation.clickedPokemonProfileDisplay).toBe('function');
    });
  });

});



