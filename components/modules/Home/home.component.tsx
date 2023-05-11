import { useState } from "react"
import { CircularProgress, TablePagination } from "@mui/material"
import { Toaster } from "react-hot-toast"
import { CardName } from "@/components/molecules/CardName"
import { getPokemonId } from "@/helpers /getPokemonId"
import { HomeProps } from "./home.model"
import styles from "./home.module.scss"

const TITLE = "POKEMONS"

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
    const offset = rowsPerPage * newPage
    setPage(newPage)
    fetchPokemons(rowsPerPage, offset)
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

      <div className={styles.header}>{TITLE}</div>
      {isLoading && <CircularProgress sx={{ margin: "0 auto" }} size={80} />}
      {pokemons.results.length && !isLoading && (
        <section className={styles.cards} id="home-cards">
          {pokemons.results.map(({ name, url }) => (
            <CardName
              url={`/pokemon/${getPokemonId(url)}`}
              name={name}
              key={`${name}`}
            />
          ))}
        </section>
      )}

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
