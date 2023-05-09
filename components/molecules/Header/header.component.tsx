import Image from "next/image"
import Link from "next/link"
import { AppBar, Toolbar, Container } from "@mui/material"
import Pokemon from "public/images/pokemon.webp"
import styles from "@/components/molecules/Header/header.module.scss"

export const HeaderComponent = () => (
  <AppBar position="static" className={styles.nav__header}>
    <Container maxWidth="xl">
      <Toolbar>
        <Link href={"/"}>
          <Image
            alt="Pokemon brand"
            width={150}
            height={50}
            src={Pokemon}
            placeholder="blur"
          />
        </Link>
      </Toolbar>
    </Container>
  </AppBar>
)
