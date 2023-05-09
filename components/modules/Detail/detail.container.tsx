import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { CircularProgress } from "@mui/material"
import { PokemonByIdResponse } from "@/services/models/pokemon.model"
import { pokemonService } from "@/services/modules/pokemon.service"
import { DetailComponent } from "./detail.component"

const { getPokemonById } = pokemonService

type Props = {
  id?: string | string[]
}

export const DetailContainer = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonByIdResponse>()

  useEffect(() => {
    const fetchPokemonById = async () => {
      if (!id) return
      setIsLoading((prevState) => !prevState)
      try {
        const response = await getPokemonById(Number(id))
        setPokemon(response)
      } catch (error) {
        toast.error(
          "Ocurrió un error inesperado, intente nuevamente en unos minutos"
        )
      }
      setIsLoading((prevState) => !prevState)
    }
    void fetchPokemonById()
  }, [id])

  if (isLoading)
    return (
      <CircularProgress size={80} sx={{ margin: "auto", display: "flex" }} />
    )
  if (!pokemon) return null
  return <DetailComponent pokemon={pokemon} isLoading={isLoading} />
}
