import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PokemonResponse } from "@/services/models/pokemon.model"
import { HomeComponent } from "./home.component"
import { pokemonService } from "@/services/modules/pokemon.service"

const { getPokemons } = pokemonService

export const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState<PokemonResponse["results"]>([])

  const fetchPokemons = async () => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await getPokemons()
      setPokemons(response)
    } catch (error) {
      toast.error(
        "Ocurrió un error inesperado, intente nuevamente en unos minutos"
      )
    }
    setIsLoading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchPokemons() // NTH abort Controller
  }, [])
  return (
    <>
      <HomeComponent pokemons={pokemons} isLoading={isLoading} />
    </>
  )
}
