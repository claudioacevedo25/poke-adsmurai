import { CircularProgress, TablePagination } from "@mui/material"
import { Toaster } from "react-hot-toast"
import { CardName } from "@/components/molecules/CardName"
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

      <div className={styles.header}>POKEMONS</div>
      {isLoading && <CircularProgress sx={{ margin: "0 auto" }} />}
      <section className={styles.cards__container}>
        {pokemons.results.length &&
          !isLoading &&
          pokemons.results.map(({ name, url }) => (
            <CardName id={getPokemonId(url)} name={name} key={`${name}`} />
          ))}
      </section>

      <TablePagination
        component="div"
        count={pokemons.count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}
