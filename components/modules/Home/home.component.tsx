import { TablePagination, Typography } from "@mui/material"
import { Toaster } from "react-hot-toast"
import { CardName } from "@/components/molecules/CardName"
import { CustomSkeleton } from "@/components/atoms/Skeleton"
import { HomeProps } from "./home.model"
import { getPokemonId } from "@/helpers /getPokemonId"
import styles from "./home.module.scss"
import { useState } from "react"

export const HomeComponent = ({
  pokemons,
  isLoading,
  fetchPokemons,
}: HomeProps) => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
    fetchPokemons(rowsPerPage, rowsPerPage * newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const limit = Number(event.target.value)
    setRowsPerPage(limit)
    fetchPokemons(limit)
    setPage(0)
  }
  return (
    <div className={styles.container}>
      <Toaster />

      <div className={styles.header}>
        <Typography>LISTA DE POKEMONS</Typography>
      </div>
      <div className={styles.cards__container}>
        {isLoading && <CustomSkeleton />}
        {pokemons.results.length && !isLoading && (
          <ul className={styles.cards__list}>
            {pokemons.results.map(({ name, url }) => (
              <li className={styles.card__pokemon} key={`${name}`}>
                <CardName id={getPokemonId(url)} name={name} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.pagination}>
        <TablePagination
          component="div"
          count={pokemons.count}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  )
}
