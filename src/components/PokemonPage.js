import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemons, setPokemons] = useState([])


useEffect(() => {
  fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(setPokemons)
},[])

const addPokemon = (formPokemon) => {
  setPokemons([...pokemons, formPokemon])
}




  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;
