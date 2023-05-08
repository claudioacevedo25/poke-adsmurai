import { PokemonResponse } from "@/services/models/pokemon.model"

type HomeProps = {
  pokemons: PokemonResponse
  isLoading: boolean
  fetchPokemons: (limit: number, offset?: number) => Promise<void>
}

export type { HomeProps }
