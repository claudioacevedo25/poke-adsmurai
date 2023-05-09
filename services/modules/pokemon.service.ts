import api from "../api.client"
import { PokemonByIdResponse, PokemonResponse } from "../models/pokemon.model"
import { BASE_URL } from "@/constants/urls.constants"

const pokemonService = {
  getPokemons: async (limit: number, offset: number) => {
    const { data } = await api.get<PokemonResponse>(
      `${BASE_URL}/pokemon/?limit=${limit}&offset=${offset}`
    )

    return data
  },

  getPokemonById: async (id: number) => {
    const { data } = await api.get<PokemonByIdResponse>(
      `${BASE_URL}/pokemon/${id}`
    )

    return data
  },
}

export { pokemonService }
