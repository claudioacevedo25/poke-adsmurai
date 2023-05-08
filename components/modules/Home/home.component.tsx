import { Typography } from "@mui/material"
import { Toaster } from "react-hot-toast"
import { CardName } from "@/components/molecules/CardName"
// import { CustomSkeleton } from "@/components/atoms/Skeleton"
import styles from "./home.module.scss"
import { HomeProps } from "./home.model"

export const HomeComponent = ({ pokemons, isLoading }: HomeProps) => (
  <div className={styles.container}>
    <Toaster />

    <div className={styles.header}>
      <Typography>LISTA DE POKEMONS</Typography>
    </div>
    <div className={styles.cards__container}>
      {/* {isLoading && <CustomSkeleton />} */}
      {pokemons && !isLoading && (
        <ul className={styles.cards__list}>
          {pokemons.map(({ name, url }) => (
            <li className={styles.card__pokemon} key={`${name}`}>
              <CardName id={1} name={name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)
