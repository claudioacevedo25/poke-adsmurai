import Image from "next/image"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { CardNameProps } from "./cardName.model"
import Pokemon from "public/images/pokemon.webp"
import styles from "./mediaCard.module.scss"
import Link from "next/link"

export const CardNameComponent = (props: CardNameProps) => {
  const {
    id,
    name,
    sprites: {
      other: { dream_world },
    },
  } = props
  return (
    <Link href={`/pokemon/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <Image
          src={dream_world.front_default}
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL={Pokemon.blurDataURL}
          alt={name ?? "Pokemon Image"}
          className={styles.card__image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={styles.card__name}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
