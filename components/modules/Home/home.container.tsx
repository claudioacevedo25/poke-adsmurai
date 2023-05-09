import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PokemonResponse } from "@/services/models/pokemon.model"
import { pokemonService } from "@/services/modules/pokemon.service"
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
      toast.error(
        "Ocurrió un error inesperado, intente nuevamente en unos minutos"
      )
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
