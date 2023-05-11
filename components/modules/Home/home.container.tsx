import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PokemonResponse } from "@/services/models/pokemon.model"
import { pokemonService } from "@/services/modules/pokemon.service"
import { GENERIC_ERROR_MESSAGE } from "@/constants/messages"
import { HomeComponent } from "./home.component"

const { getPokemons } = pokemonService

export const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState<PokemonResponse>()

  const fetchPokemons = async (limit = 10, offset = 0) => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await getPokemons(limit, offset)
      setPokemons(response)
    } catch (error) {
      toast.error(GENERIC_ERROR_MESSAGE)
    }
    setIsLoading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchPokemons()
  }, [])

  if (!pokemons) return null
  return (
    <>
      <HomeComponent
        pokemons={pokemons}
        isLoading={isLoading}
        fetchPokemons={fetchPokemons}
      />
    </>
  )
}
