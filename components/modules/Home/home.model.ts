import { PokemonResponse } from "@/services/models/pokemon.model"

type HomeProps = {
  pokemons: PokemonResponse["results"]
  isLoading: boolean
}

export type { HomeProps }
