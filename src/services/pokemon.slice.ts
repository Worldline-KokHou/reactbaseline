// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../views/pokemon/pokemon.interface'

// Define a service using a base URL and expected endpoints

interface IPokemonItem {
  name: string
  url: string
}

interface IPokemonList {
  count: number,
  next: string,
  previous: string
  results: IPokemonItem[]
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`
    }),
    getPokemons: builder.query<IPokemonList, string>({
      query: (offset = '0') => `pokemon?offset=${offset}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetPokemonsQuery
} = pokemonApi
