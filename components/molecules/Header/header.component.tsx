import Image from "next/image"
import Link from "next/link"
import Pokemon from "public/images/pokemon.webp"
import styles from "@/components/molecules/Header/header.module.scss"

export const HeaderComponent = () => (
  <header className={styles.nav__header}>
    <Link href={"/"}>
      <Image
        alt="Pokemon brand"
        width={150}
        height={50}
        src={Pokemon}
        placeholder="blur"
      />
    </Link>
  </header>
)
