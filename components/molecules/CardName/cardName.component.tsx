import Link from "next/link"
import { CardNameProps } from "./cardName.model"
import styles from "./cardName.module.scss"

export const CardNameComponent = ({ name, url }: CardNameProps) => (
  <Link href={url} className={styles.container}>
    <h3 className={styles.card__name}>{name}</h3>
  </Link>
)
