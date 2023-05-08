import api from "../api.client"
import { PokemonByIdResponse, PokemonResponse } from "../models/pokemon.model"
import { BASE_URL } from "@/constants/urls.constants"

const pokemonService = {
  getPokemons: async (offset = 0) => {
    const { data } = await api.get<PokemonResponse>(
      `${BASE_URL}/pokemon/?limit=20&offset=${offset}`
    )

    return data.results
  },

  getPokemonById: async (id: string) => {
    const { data } = await api.get<PokemonByIdResponse>(
      `${BASE_URL}/pokemon/${id}`
    )

    return data
  },
}

export { pokemonService }
