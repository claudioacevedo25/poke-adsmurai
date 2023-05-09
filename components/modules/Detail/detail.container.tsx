import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PokemonByIdResponse } from "@/services/models/pokemon.model"
import { DetailComponent } from "./detail.component"
import { pokemonService } from "@/services/modules/pokemon.service"

const { getPokemonById } = pokemonService

type Props = {
  id: number
}

export const DetailContainer = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<PokemonByIdResponse>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchPokemonById = async () => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await getPokemonById(id)
      setPokemon(response)
    } catch (error) {
      toast.error(
        "Ocurrió un error inesperado, intente nuevamente en unos minutos"
      )
    }
    setIsLoading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchPokemonById()
  }, [])
  if (!pokemon) return null
  return <DetailComponent pokemon={pokemon} />
}
