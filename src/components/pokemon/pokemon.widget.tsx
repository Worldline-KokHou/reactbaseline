import React from 'react'
import { useGetPokemonsQuery } from '../../services/pokemon.slice'

const PokemonWidget = () => {
  // const {
  //   data,
  //   error,
  //   isLoading
  // } = useGetPokemonByNameQuery('bulbasaur')

  const pokemonList = useGetPokemonsQuery('0')

  if (pokemonList.data) {
    return (
      <div>
        {pokemonList.data!.results.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default PokemonWidget
