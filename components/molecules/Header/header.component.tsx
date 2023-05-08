import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Gengar from "public/images/gengar.webp"
import Pokemon from "public/images/pokemon.webp"

import Image from "next/image"
import Link from "next/link"

export const HeaderComponent = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
          <Image
            alt="Pokemon brand"
            width={150}
            height={50}
            src={Pokemon}
            placeholder="blur"
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <IconButton sx={{ p: 0 }}>
            <Image
              alt="Pokedex Icon"
              width={50}
              height={50}
              src={Gengar}
              placeholder="blur"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
)
