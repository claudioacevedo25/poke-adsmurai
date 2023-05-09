import { CardNameProps } from "./cardName.model"
import styles from "./cardName.module.scss"
import Link from "next/link"

export const CardNameComponent = ({ id, name }: CardNameProps) => (
  <Link href={`/pokemon/${id}`} className={styles.container}>
    <h3 className={styles.card__name}>{name}</h3>
  </Link>
)
