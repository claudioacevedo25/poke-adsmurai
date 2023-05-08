import Typography from "@mui/material/Typography"
import { CardNameProps } from "./cardName.model"
import styles from "./cardName.module.scss"
import Link from "next/link"

export const CardNameComponent = ({ id, name }: CardNameProps) => (
  <Link href={`/pokemon/${id}`}>
    <Typography variant="h5" className={styles.card__name}>
      {name}
    </Typography>
  </Link>
)
