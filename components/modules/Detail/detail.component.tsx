import Image from "next/image"
import { useRouter } from "next/router"
import { Chip, Typography } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { PokemonByIdResponse } from "@/services/models/pokemon.model"
import { CustomStar } from "@/components/atoms/Star"
import Pokemon from "public/images/pokemon.webp"
import styles from "./detail.module.scss"

type Props = {
  pokemon: PokemonByIdResponse
}
export const DetailComponent = ({ pokemon }: Props) => {
  const {
    name,
    sprites: {
      other: { dream_world },
    },
    abilities,
    types,
    height,
    weight,
    moves,
    stats,
  } = pokemon

  const router = useRouter()
  const backToHome = () => void router.push("/")

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ArrowBackIcon
          onClick={backToHome}
          sx={{ cursor: "pointer" }}
          fontSize="large"
        />
        <h1 className={styles.title}>{name}</h1>
      </div>
      <section className={styles.section__container}>
        <div className={styles.content}>
          <div className={styles.primary__image}>
            <Image
              src={dream_world.front_default}
              alt={name}
              fill
              placeholder="blur"
              blurDataURL={Pokemon.blurDataURL}
            />
          </div>
          <article className={styles.primary__info}>
            <section className={styles.star__container}>
              {stats?.map(({ base_stat, stat }) => (
                <CustomStar
                  key={`${base_stat} - ${stat.name}`}
                  text={stat?.name}
                  value={base_stat}
                />
              ))}
            </section>
            <section className={styles.pokemon__characteristic}>
              <span>{`Peso: ${weight} libras`}</span>
              <span>{`Altura: ${height} pies`}</span>
              <span className={styles.types__chip}>
                {`Categoria: `}
                {types?.map(({ type, slot }) => (
                  <Chip size="small" key={slot} label={type?.name} />
                ))}
              </span>
            </section>
          </article>
        </div>
        <div className={styles.chips}>
          <article className={styles.secondary__info}>
            <h4>Movimientos</h4>

            <h6 className={styles.types__chip}>
              {moves?.map(({ move }, index) => {
                if (index > 10) return
                return (
                  <Chip
                    key={`${move.name} - ${index}`}
                    label={move.name}
                    sx={{ color: "#4372AA" }}
                  />
                )
              })}
            </h6>
          </article>
          <article className={styles.secondary__info}>
            <h4>Habilidades</h4>

            <h6 className={styles.types__chip}>
              {abilities?.map(({ ability, slot }) => (
                <Chip
                  key={`${slot}`}
                  label={ability.name}
                  sx={{ color: "#9d1309" }}
                />
              ))}
            </h6>
          </article>
        </div>
      </section>
    </div>
  )
}
