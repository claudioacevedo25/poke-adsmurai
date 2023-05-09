import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Pokemon from "public/images/pokemon.webp"
import Image from "next/image"
import Link from "next/link"
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
